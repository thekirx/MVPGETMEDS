import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/LogoIcon';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleDocumentationClick = () => {
    // In a real app, this would navigate to documentation
    alert('Documentation would open here');
  };

  const handleTrackingClick = () => {
    navigate('/tracking');
  };

  const handleReportsClick = () => {
    navigate('/reports');
  };

  const handleQuotasClick = () => {
    navigate('/quotas');
  };

  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Empowering Field Sales with Real-Time Data</h1>
          <p>Seamless reporting, tracking, and quota achievement for field representatives.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleDashboardClick}>
              Go to Dashboard
            </button>
            <button className="btn-secondary" onClick={handleDocumentationClick}>
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="feature-highlights">
        <div className="container">
          <h2>System Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={handleTrackingClick}>
              <div className="feature-icon map-pin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Real-Time Tracking</h3>
              <p>Log your location and visits instantly with GPS precision.</p>
            </div>

            <div className="feature-card" onClick={handleReportsClick}>
              <div className="feature-icon clipboard">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Instant Reporting</h3>
              <p>Submit daily reports and doctor feedback in seconds.</p>
            </div>

            <div className="feature-card" onClick={handleQuotasClick}>
              <div className="feature-icon chart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 20V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Quota Management</h3>
              <p>Track your sales targets and sample distribution live.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
