import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    userIdOrEmail: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.userIdOrEmail || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Show success message
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login to Your Account</h2>
        {showAlert && (
          <div className="alert alert-success">
            Login successful! Redirecting to dashboard...
          </div>
        )}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="userIdOrEmail">User ID or Email</label>
            <input
              type="text"
              id="userIdOrEmail"
              name="userIdOrEmail"
              value={formData.userIdOrEmail}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;