import React from 'react';

const RealTimeStatus = ({ activities }) => {
  // Get the most recent activities (last 3)
  const recentActivities = activities.slice(0, 3);
  
  return (
    <div className="card">
      <h3>
        Live Activity Feed
      </h3>
      <div className="activity-feed">
        {recentActivities.length > 0 ? (
          recentActivities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <p><strong>{activity.type.replace('_', ' ').toUpperCase()}</strong></p>
              <p>{activity.details || 'No details provided'}</p>
              <p className="activity-time">{activity.timestamp}</p>
            </div>
          ))
        ) : (
          <p>No recent activities. Your activities will appear here in real-time.</p>
        )}
      </div>
      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#1f2937' }}>
          <strong>Real-time Sync:</strong> Management can see your live status updates instantly.
        </p>
      </div>
    </div>
  );
};

export default RealTimeStatus;
