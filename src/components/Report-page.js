import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { Row, Col, Button } from 'react-bootstrap';
import HealthCard from './HealthReport';

class ReportPage extends Component {
  render() {
    return (
      <div className="app-wrapper">
            <div className="ofs-left-pane">
                <span className="ofs-label">OFS</span>
            </div>
            <div className="login-container">
                <span className="login-label">Login | Signup</span>
            </div>
            <div className="live-report-tracker-container">
                <div className="live-report-inner-container">
                    <span xs={6} className="live-report-label">
                        Live Report
                    </span>
                    <span xs={6} className="report-selection float-right">
                        <Button variant="primary" className="day-report-btn">Day Report</Button>
                        <Button variant="light" className="sprint-report-btn">Sprint Report</Button>
                    </span>  
                </div>
            </div>
      </div>
    );
  }
}

export default ReportPage;
