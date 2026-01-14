import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Support from './pages/Support';
import Tracking from './pages/Tracking';
import Reports from './pages/Reports';
import Quotas from './pages/Quotas';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/quotas" element={<Quotas />} />
      </Routes>
    </div>
  );
}

export default App;
