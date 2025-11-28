import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(22); // Default to today

  // Sample appointment data for different dates
  const allAppointments = {
    20: [
      {
        time: '09:30 AM',
        title: 'Dr. Martinez - Pediatrician',
        location: 'Children\'s Hospital Manila',
        tag: 'Confirmed',
        tagClass: 'confirmed'
      },
      {
        time: '11:00 AM',
        title: 'Generic Pharmacy - Stock Check',
        location: 'Makati Branch',
        tag: 'Pending',
        tagClass: 'pending'
      }
    ],
    21: [
      {
        time: '10:00 AM',
        title: 'Dr. Johnson - General Practitioner',
        location: 'Medical Plaza Ortigas',
        tag: 'Confirmed',
        tagClass: 'confirmed'
      },
      {
        time: '01:00 PM',
        title: 'Team Sync Meeting',
        location: 'Conference Room 3',
        tag: 'Online',
        tagClass: 'online'
      }
    ],
    22: [
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
    ],
    23: [
      {
        time: '08:30 AM',
        title: 'Dr. Williams - Neurologist',
        location: 'Neuro Care Center',
        tag: 'Confirmed',
        tagClass: 'confirmed'
      },
      {
        time: '12:00 PM',
        title: 'MediPlus Pharmacy - Sample Drop',
        location: 'Bonifacio Global City',
        tag: 'Pending',
        tagClass: 'pending'
      }
    ],
    24: [
      {
        time: '10:30 AM',
        title: 'Dr. Brown - Orthopedic',
        location: 'Ortho Medical Center',
        tag: 'Confirmed',
        tagClass: 'confirmed'
      }
    ]
  };

  // Generate calendar days (1-30)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  
  // Get appointments for selected date or default to today
  const appointments = allAppointments[selectedDate] || [];

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

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
                    className={`calendar-day ${day === selectedDate ? 'today' : ''}`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="appointments-section">
            <h2>{selectedDate} November Appointments</h2>
            <div className="appointments-list">
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
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
                ))
              ) : (
                <div className="no-appointments">
                  <p>No appointments scheduled for this day.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;