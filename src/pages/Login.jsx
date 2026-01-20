import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    userIdOrEmail: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
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
    // Simulate login with dummy user data
    login({ id: 1, userIdOrEmail: formData.userIdOrEmail });
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
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account?</p>
          <a href="/register">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;