import React, { useState, useEffect } from 'react';
import './Tracking.css';

const Tracking = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    // High accuracy options for field force tracking
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    // watchPosition updates automatically when the user moves
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        });
        setError(null);
      },
      (err) => {
        setError(err.message);
      },
      options
    );

    // Clean up the watcher when the user leaves the page
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="tracking-page">
      <div className="tracking-container">
        <header className="tracking-header">
          <h1>Field Force Location Map</h1>
          {position && (
            <p style={{ color: '#20c997', fontWeight: '600' }}>
              LIVE: {position.lat.toFixed(6)}, {position.lng.toFixed(6)} (±{Math.round(position.accuracy)}m)
            </p>
          )}
        </header>
        
        <div className="tracking-content">
          <div className="map-section">
            <div className="map-placeholder" style={{ overflow: 'hidden', padding: 0 }}>
              {error ? (
                <div style={{ color: '#dc3545', textAlign: 'center', padding: '20px' }}>
                  <strong>Location Error:</strong> {error}
                </div>
              ) : position ? (
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://maps.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`}
                  title="Real-time location"
                ></iframe>
              ) : (
                <div className="loading-location">
                  <div className="status-indicator status-active"></div>
                  Initializing GPS...
                </div>
              )}
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
                <span className="details">St. Luke's Hospital (BGC)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;