import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page">
      <div className="support-container">
        <header className="support-header">
          <h1>Support Center</h1>
          <p>Get help with GETMEDS +2mg INC. Field Force Management System</p>
        </header>
        
        <div className="support-content">
          <div className="support-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How do I log a doctor visit?</h3>
                <p>Go to the Dashboard and use the Daily Activity Logger. Select "Doctor Visit" from the activity type dropdown, add details about your visit, and click "Log Activity".</p>
              </div>
              
              <div className="faq-item">
                <h3>Why isn't my location updating?</h3>
                <p>Make sure you've given the app permission to access your location. Click the "Get My Location" button in the activity form to manually update your location.</p>
              </div>
              
              <div className="faq-item">
                <h3>How do I reset my password?</h3>
                <p>Contact your system administrator or IT support team. They can reset your password in the admin panel.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I access the system offline?</h3>
                <p>Yes, activities can be logged offline and will sync automatically when you reconnect to the internet.</p>
              </div>
            </div>
          </div>
          
          <div className="support-section">
            <h2>Contact Support</h2>
            <div className="contact-options">
              <div className="contact-card">
                <h3>📞 Phone Support</h3>
                <p>Call our support hotline: (123) 456-7890</p>
                <p>Hours: Mon-Fri, 8:00 AM - 6:00 PM</p>
              </div>
              
              <div className="contact-card">
                <h3>✉️ Email Support</h3>
                <p>Email: support@getmeds2mg.com</p>
                <p>Response within 24 hours</p>
              </div>
              
              <div className="contact-card">
                <h3>💬 Live Chat</h3>
                <p>Available in the app's bottom right corner</p>
                <p>Hours: Mon-Fri, 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="support-section">
            <h2>Training Resources</h2>
            <div className="resources">
              <div className="resource-card">
                <h3>User Manual</h3>
                <p>Complete guide to all features and functions</p>
                <button className="resource-btn">Download PDF</button>
              </div>
              
              <div className="resource-card">
                <h3>Video Tutorials</h3>
                <p>Step-by-step walkthroughs of key features</p>
                <button className="resource-btn">Watch Videos</button>
              </div>
              
              <div className="resource-card">
                <h3>Quick Reference Guide</h3>
                <p>One-page cheat sheet for common tasks</p>
                <button className="resource-btn">View Guide</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;