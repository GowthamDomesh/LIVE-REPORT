import React, { Component } from 'react';
// import logo from './logo.svg';
import './reports.scss';
import { Row, Col, Button } from 'react-bootstrap';
import HealthCard from '../HealthCard';

class ReportPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            reportType: 'day',
        };
    }

    handleTypeChange = type => {
        this.setState({
            reportType: type,
        });
    }

    render() {
        const { reportType } = this.state;
        return (
            <div className="live-reports-container">
                <div className="category-btns">
                    <div className="buttons-group">
                        <Button
                            className="day-report-btn"
                            variant={reportType === 'day' ? 'primary' : ''}
                            onClick={this.handleTypeChange.bind(this, 'day')}
                        >Day Report</Button>
                        <Button
                            className="sprint-report-btn"
                            variant={reportType === 'sprint' ? 'primary' : ''}
                            onClick={this.handleTypeChange.bind(this, 'sprint')}
                        >Sprint Report</Button>
                    </div>
                </div>
                <div className="filters-container">
                    <div className="inner-content-container">
                        ...Filter buttons goes here...
                    </div>
                </div>
                <HealthCard type={reportType} />
            </div>
        );
    }
}

export default ReportPage;
