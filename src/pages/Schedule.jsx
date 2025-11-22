import React from 'react';
import './Schedule.css';

const Schedule = () => {
  // Sample appointment data
  const appointments = [
    {
      time: '09:00 AM',
      title: 'Dr. Santos - Cardio Specialist',
      location: 'St. Luke\'s QC',
      tag: 'Pending',
      tagClass: 'pending'
    },
    {
      time: '11:00 AM',
      title: 'Mercury Drug - Inventory Check',
      location: 'Quezon Ave',
      tag: 'Confirmed',
      tagClass: 'confirmed'
    },
    {
      time: '02:00 PM',
      title: 'Team Meeting',
      location: 'Zoom',
      tag: 'Online',
      tagClass: 'online'
    },
    {
      time: '04:00 PM',
      title: 'Dr. Reyes - Dermatologist',
      location: 'Makati Medical Center',
      tag: 'Confirmed',
      tagClass: 'confirmed'
    }
  ];

  // Generate calendar days (1-30)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = 22; // Current date

  return (
    <div className="schedule-page">
      <div className="schedule-container">
        <header className="schedule-header">
          <h1>My Itinerary</h1>
        </header>
        
        <div className="schedule-content">
          <div className="calendar-section">
            <div className="calendar-widget">
              <h2>November 2025</h2>
              <div className="calendar-grid">
                {days.map(day => (
                  <div 
                    key={day} 
                    className={`calendar-day ${day === today ? 'today' : ''}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="appointments-section">
            <h2>Today's Appointments</h2>
            <div className="appointments-list">
              {appointments.map((appointment, index) => (
                <div className="appointment-card" key={index}>
                  <div className="appointment-time">{appointment.time}</div>
                  <div className="appointment-details">
                    <h3>{appointment.title}</h3>
                    <p>{appointment.location}</p>
                    <span className={`tag ${appointment.tagClass}`}>
                      {appointment.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;