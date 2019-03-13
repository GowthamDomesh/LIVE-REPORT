import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Chart } from "react-charts";
import './HealthReport.scss';

class HealthCard extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type } = this.props;
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
                <div className="inner-txt">70%</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Availabel Capacity</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">70%</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Planed Vs Acutual</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">80%</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">Resource Utilize</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">70%</div>
              </div>
              <div className="table-content">
                <div className="inner-txt">QA Test Effectiveness</div>
                <div className="inner-txt">Sprint</div>
                <div className="inner-txt">90%</div>
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
