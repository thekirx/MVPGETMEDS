import React from 'react';
import './Quotas.css';

const Quotas = () => {
  // Sample quota data
  const quotas = [
    { id: 1, name: 'Doctor Visits', target: 10, completed: 4 },
    { id: 2, name: 'Pharmacy Calls', target: 15, completed: 8 },
    { id: 3, name: 'Sample Distribution', target: 20, completed: 12 },
    { id: 4, name: 'Training Sessions', target: 5, completed: 3 },
    { id: 5, name: 'Team Meetings', target: 8, completed: 6 }
  ];

  const calculatePercentage = (completed, target) => {
    return Math.min(100, Math.round((completed / target) * 100));
  };
  
  const getProgressClass = (percentage) => {
    if (percentage < 50) return 'low';
    if (percentage < 75) return 'medium';
    return 'high';
  };

  return (
    <div className="quotas-page">
      <div className="quotas-container">
        <header className="quotas-header">
          <h1>Sales Performance Analytics</h1>
          <p>Track your sales targets and achievements in real-time</p>
        </header>
        
        <div className="quotas-content">
          {quotas.map((quota) => {
            const percentage = calculatePercentage(quota.completed, quota.target);
            const progressClass = getProgressClass(percentage);
            return (
              <div className="quota-card" key={quota.id}>
                <div className="quota-header">
                  <h2>{quota.name}</h2>
                  <span className="quota-stats">{quota.completed} / {quota.target}</span>
                </div>
                
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className={`progress-fill ${progressClass}`} 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="progress-percentage">{percentage}%</div>
                </div>
                
                <div className="quota-details">
                  <div className="detail-item">
                    <span className="detail-label">Remaining:</span>
                    <span className="detail-value">{quota.target - quota.completed}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className={`status-badge ${progressClass}`}>
                      {percentage < 50 ? 'Needs Attention' : percentage < 75 ? 'On Track' : 'Exceeding Target'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quotas;