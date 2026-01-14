import React from 'react';

const ProgressReporter = ({ targets }) => {
  const calculatePercentage = (completed, target) => {
    return Math.min(100, Math.round((completed / target) * 100));
  };
  
  const getProgressClass = (percentage) => {
    if (percentage < 50) return 'low';
    if (percentage < 75) return 'medium';
    return 'high';
  };

  return (
    <div className="card">
      <h3>Progress Reporting</h3>
      <p style={{ color: '#6b7280' }}>Track your targets and quotas in real-time</p>
      
      <div style={{ marginTop: '20px' }}>
        {targets.map((target) => {
          const percentage = calculatePercentage(target.completed, target.target);
          const progressClass = getProgressClass(percentage);
          return (
            <div key={target.id} style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <strong style={{ color: '#1f2937' }}>{target.name}</strong>
                <span style={{ color: '#1f2937' }}>{target.completed} / {target.target}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${progressClass}`} 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.9rem', color: '#6b7280' }}>
                {percentage}% Complete
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h4 style={{ marginTop: 0, color: '#1f2937' }}>Performance Summary</h4>
        <ul style={{ textAlign: 'left', paddingLeft: '20px', color: '#1f2937' }}>
          <li>All activities are synced in real-time to management dashboard</li>
          <li>Your progress updates automatically as you log activities</li>
          <li>Management can view your live status at any moment</li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressReporter;
