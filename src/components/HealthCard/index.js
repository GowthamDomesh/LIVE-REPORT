import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Chart } from "react-charts";
import './HealthReport.scss';
import axios from 'axios';

class HealthCard extends Component {  
  constructor (props) {
    super(props);
    this.state = {};
    this.reportDetails = {};
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/api/reports`)
      .then(res => {
        console.log(res);
        this.reportDetails = res.data;
        this.setState({ reportDetail: this.reportDetails});
      })
  }
  render() {
    const { type } = this.props;
    const { reportDetail } = this.state;
    console.log(reportDetail);
    const roundOffValues = (value) => {
      return parseFloat(Math.round(value * 100) / 100).toFixed(2) + '%'
    };

    return (
      <div className="health-report-container">
          <div className="report-header">Health Report on {type}</div>
          <div className="inner-container">
            <div className="health-card">
              <div className="table-header">
                <div className="inner-txt">Category</div>
                <div className="inner-txt">Frequency</div>
                <div className="inner-txt">Earned value</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Commitment Index</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">{roundOffValues(this.reportDetails.commitmentIndex)}</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Availabel Capacity</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">{roundOffValues(this.reportDetails.availableVsPlannedCapacity)}</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Planed Vs Acutual</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">{roundOffValues(this.reportDetails.plannedVsActual)}</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Resource Utilize</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">{roundOffValues(this.reportDetails.resourceUtilization)}</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">QA Test Effectiveness</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">{roundOffValues(this.reportDetails.qaTestEffectiveness)}</div>
              </div>
            </div>
            <div className="health-chart">
              <div
                style={{
                  width: "350px",
                  height: "300px"
                }}
              >
                <Chart
                  data={[
                    {
                      label: "Series 1",
                      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                    },
                    {
                      label: "Series 2",
                      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                    }
                  ]}
                  axes={[
                    { primary: true, type: "linear", position: "bottom" },
                    { type: "linear", position: "left" }
                  ]}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HealthCard;
