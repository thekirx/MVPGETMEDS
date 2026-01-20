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
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!formData.userIdOrEmail || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Call Supabase login via Context
      await login(formData.userIdOrEmail, formData.password);
      
      setShowAlert(true);
      // Navigate to dashboard after successful login
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('Login failed: ' + error.message);
    }
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
        {errorMsg && (
          <div className="alert" style={{backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb'}}>
            {errorMsg}
          </div>
        )}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="userIdOrEmail">Email Address</label>
            <input
              type="email"
              id="userIdOrEmail"
              name="userIdOrEmail"
              value={formData.userIdOrEmail}
              onChange={handleChange}
              placeholder="Enter your email"
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