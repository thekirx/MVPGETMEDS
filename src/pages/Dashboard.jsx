import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import DailyActivityLogger from '../components/DailyActivityLogger';
import ProgressReporter from '../components/ProgressReporter';
import RealTimeStatus from '../components/RealTimeStatus';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  
  // Local targets state (Future: move this to 'quotas' table in DB)
  const [targets, setTargets] = useState([
    { id: 1, name: 'Doctor Visits', target: 10, completed: 4 },
    { id: 2, name: 'Pharmacy Calls', target: 15, completed: 8 },
    { id: 3, name: 'Sample Distribution', target: 20, completed: 12 }
  ]);

  // Fetch activities when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchActivities();
    }
  }, [user]);

  const fetchActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Transform DB data to match UI expectations if needed
      // (Supabase returns 'created_at', your UI might expect 'timestamp')
      const formattedData = data.map(item => ({
        ...item,
        timestamp: new Date(item.created_at).toLocaleString()
      }));

      if (data) setActivities(formattedData);
    } catch (error) {
      console.error('Error fetching activities:', error.message);
    }
  };

  const addActivity = async (activity) => {
    try {
      if (!user) {
        alert("You must be logged in to add activities.");
        return;
      }

      // 1. Insert into Supabase 'activities' table
      const { data, error } = await supabase
        .from('activities')
        .insert([{
          user_id: user.id,
          type: activity.type,
          details: activity.details,
          quantity: activity.quantity || 1,
          location: activity.location
        }])
        .select();

      if (error) throw error;

      // 2. Update local state immediately (Optimistic UI update)
      if (data && data[0]) {
        const newActivity = {
          ...data[0],
          timestamp: new Date(data[0].created_at).toLocaleString()
        };
        setActivities(prev => [newActivity, ...prev]);
        
        // 3. Update Targets Logic (Local state only for now)
        if (activity.type === 'doctor_visit') {
          setTargets(prev => prev.map(target => 
            target.name === 'Doctor Visits' ? {...target, completed: target.completed + 1} : target
          ));
        } else if (activity.type === 'pharmacy_call') {
          setTargets(prev => prev.map(target => 
            target.name === 'Pharmacy Calls' ? {...target, completed: target.completed + 1} : target
          ));
        } else if (activity.type === 'sample_distribution') {
          setTargets(prev => prev.map(target => 
            target.name === 'Sample Distribution' ? {...target, completed: target.completed + (activity.quantity || 1)} : target
          ));
        }
      }
    } catch (error) {
      alert('Error saving activity: ' + error.message);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Field Force Dashboard</h1>
          <p>Real-time activity tracking and progress reporting</p>
        </header>
        
        <div className="dashboard-content">
          <div className="dashboard-grid">
            {/* RealTimeStatus now receives data fetched from Supabase */}
            <RealTimeStatus activities={activities} />
            
            <div className="activity-section">
              <DailyActivityLogger onAddActivity={addActivity} />
            </div>
            
            <div className="progress-section">
              <ProgressReporter targets={targets} />
            </div>
          </div>
        </div>
      </div>
      {/* Floating action button for mobile */}
      <button className="floating-action-button" onClick={() => document.querySelector('.activity-section .btn').click()}>
        +
      </button>
    </div>
  );
};

export default Dashboard;