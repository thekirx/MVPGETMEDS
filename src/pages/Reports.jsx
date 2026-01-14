import React from 'react';
import './Reports.css';

const Reports = () => {
  const reports = [
    { date: '2025-01-14', doctor: 'Dr. Smith', type: 'Visit', status: 'Completed' },
    { date: '2025-01-14', doctor: 'Mercury Drug', type: 'Call', status: 'Pending' },
    { date: '2025-01-13', doctor: 'Dr. Johnson', type: 'Sample', status: 'Completed' },
    { date: '2025-01-13', doctor: 'PharmaCorp', type: 'Meeting', status: 'Completed' },
    { date: '2025-01-12', doctor: 'Dr. Brown', type: 'Visit', status: 'Completed' }
  ];

  const getStatusClass = (status) => {
    return status === 'Completed' ? 'status-completed' : 'status-pending';
  };

  const handleCreateReport = () => {
    alert('Create new report functionality would open here');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="header-content">
          <div>
            <h1>Daily Report History</h1>
            <p>View and manage your activity reports</p>
          </div>
          <button className="create-report-btn" onClick={handleCreateReport}>
            + Create New Report
          </button>
        </div>
      </div>
      
      <div className="reports-table-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Doctor/Pharmacy</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.date}</td>
                <td>{report.doctor}</td>
                <td>
                  <span className={`type-badge type-${report.type.toLowerCase()}`}>
                    {report.type}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(report.status)}`}>
                    {report.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn view-btn">View</button>
                  <button className="action-btn edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="reports-summary">
        <h3>Weekly Summary</h3>
        <div className="summary-stats">
          <div className="stat-card">
            <h4>Total Reports</h4>
            <p className="stat-number">24</p>
          </div>
          <div className="stat-card">
            <h4>Completed</h4>
            <p className="stat-number stat-completed">18</p>
          </div>
          <div className="stat-card">
            <h4>Pending</h4>
            <p className="stat-number stat-pending">6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
