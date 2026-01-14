import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import DailyActivityLogger from '../components/DailyActivityLogger';
import ProgressReporter from '../components/ProgressReporter';
import RealTimeStatus from '../components/RealTimeStatus';

const Dashboard = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: 'doctor_visit',
      details: 'Visited Dr. Smith at Central Hospital to discuss new product line',
      location: 'Central Hospital, Room 204',
      timestamp: new Date(Date.now() - 3600000).toLocaleString() // 1 hour ago
    },
    {
      id: 2,
      type: 'pharmacy_call',
      details: 'Called MedExpress Pharmacy to check stock levels',
      location: 'MedExpress Pharmacy, Main St',
      timestamp: new Date(Date.now() - 7200000).toLocaleString() // 2 hours ago
    },
    {
      id: 3,
      type: 'sample_distribution',
      details: 'Distributed 5 samples of new medication to Dr. Johnson',
      location: 'Johnson Clinic',
      quantity: 5,
      timestamp: new Date(Date.now() - 10800000).toLocaleString() // 3 hours ago
    }
  ]);
  
  const [targets, setTargets] = useState([
    { id: 1, name: 'Doctor Visits', target: 10, completed: 4 },
    { id: 2, name: 'Pharmacy Calls', target: 15, completed: 8 },
    { id: 3, name: 'Sample Distribution', target: 20, completed: 12 }
  ]);

  // Simulate real-time sync by updating status every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, this would come from a WebSocket or API
      console.log('Syncing with server...');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const addActivity = (activity) => {
    const newActivity = {
      ...activity,
      id: Date.now(),
      timestamp: new Date().toLocaleString()
    };
    setActivities(prev => [newActivity, ...prev]);
    
    // Update targets if this activity contributes to a target
    if (activity.type === 'doctor_visit') {
      setTargets(prev => prev.map(target => 
        target.name === 'Doctor Visits' 
          ? {...target, completed: target.completed + 1} 
          : target
      ));
    } else if (activity.type === 'pharmacy_call') {
      setTargets(prev => prev.map(target => 
        target.name === 'Pharmacy Calls' 
          ? {...target, completed: target.completed + 1} 
          : target
      ));
    } else if (activity.type === 'sample_distribution') {
      setTargets(prev => prev.map(target => 
        target.name === 'Sample Distribution' 
          ? {...target, completed: target.completed + (activity.quantity || 1)} 
          : target
      ));
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
