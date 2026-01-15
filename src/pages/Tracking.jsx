import React from 'react';
import './Tracking.css';

const Tracking = () => {
  const checkIns = [
    { time: '10:00 AM', doctor: 'Dr. Cruz', location: 'Makati' },
    { time: '11:30 AM', doctor: 'Mercury Drug', location: 'Taguig' },
    { time: '02:00 PM', doctor: 'St. Lukes', location: 'Quezon City' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Field Force Location Map</h1>
        <p>GPS tracking of field representative activities</p>
      </div>
      
      <div className="tracking-content">
        <div className="map-placeholder">
          <div className="map-container">
            <h3>[Map View]</h3>
            <p>Map showing locations of field representatives</p>
          </div>
        </div>
        
        <div className="checkins-section">
          <h2>Recent Check-ins</h2>
          <div className="checkins-list">
            {checkIns.map((checkIn, index) => (
              <div key={index} className="checkin-item">
                <div className="checkin-time">{checkIn.time}</div>
                <div className="checkin-details">
                  <strong>{checkIn.doctor}</strong>
                  <div className="checkin-location">{checkIn.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
