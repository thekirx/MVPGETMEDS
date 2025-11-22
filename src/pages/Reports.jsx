import React from 'react';
import './Reports.css';

const Reports = () => {
  const handleCreateReport = () => {
    alert('Create new report functionality would be implemented here');
  };

  // Sample report data
  const reports = [
    { id: 1, date: '2025-11-20', doctor: 'Dr. Santos', type: 'Doctor Visit', status: 'Submitted' },
    { id: 2, date: '2025-11-19', doctor: 'Mercury Drug', type: 'Pharmacy Call', status: 'Approved' },
    { id: 3, date: '2025-11-18', doctor: 'Dr. Cruz', type: 'Sample Distribution', status: 'Pending' },
    { id: 4, date: '2025-11-17', doctor: 'St. Luke\'s', type: 'Meeting', status: 'Submitted' },
    { id: 5, date: '2025-11-16', doctor: 'MedExpress', type: 'Training', status: 'Approved' },
  ];

  return (
    <div className="reports-page">
      <div className="reports-container">
        <header className="reports-header">
          <h1>Daily Report History</h1>
          <button className="create-report-btn" onClick={handleCreateReport}>
            + Create New Report
          </button>
        </header>
        
        <div className="reports-table">
          <div className="table-header">
            <div className="table-cell">Date</div>
            <div className="table-cell">Doctor/Pharmacy</div>
            <div className="table-cell">Type</div>
            <div className="table-cell">Status</div>
          </div>
          
          <div className="table-body">
            {reports.map(report => (
              <div className="table-row" key={report.id}>
                <div className="table-cell">{report.date}</div>
                <div className="table-cell">{report.doctor}</div>
                <div className="table-cell">{report.type}</div>
                <div className="table-cell">
                  <span className={`status-badge ${report.status.toLowerCase()}`}>
                    {report.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;