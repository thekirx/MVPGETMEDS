import React from 'react';
import './Tracking.css';

const Tracking = () => {
  return (
    <div className="tracking-page">
      <div className="tracking-container">
        <header className="tracking-header">
          <h1>Field Force Location Map</h1>
        </header>
        
        <div className="tracking-content">
          <div className="map-section">
            <div className="map-placeholder">
              [Google Maps View - Live GPS]
            </div>
          </div>
          
          <div className="checkins-section">
            <h2>Recent Check-ins</h2>
            <div className="checkin-list">
              <div className="checkin-item">
                <span className="time">10:00 AM</span>
                <span className="details">Dr. Cruz (Makati)</span>
              </div>
              <div className="checkin-item">
                <span className="time">11:30 AM</span>
                <span className="details">Mercury Drug (Taguig)</span>
              </div>
              <div className="checkin-item">
                <span className="time">02:15 PM</span>
                <span className="details">St. Luke's Hospital (Bonifacio Global City)</span>
              </div>
              <div className="checkin-item">
                <span className="time">04:00 PM</span>
                <span className="details">MedExpress Pharmacy (Ortigas)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;