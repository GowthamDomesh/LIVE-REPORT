import React, { Component } from 'react';
// import logo from './logo.svg';
import './reports.scss';
import { Row, Col, Button, Form } from 'react-bootstrap';
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
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>;
                    </div>
                </div>
                <HealthCard type={reportType} />
            </div>
        );
    }
}

export default ReportPage;
