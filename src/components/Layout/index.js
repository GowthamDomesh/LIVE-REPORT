import React, { Component } from 'react';
import Report from '../Reports';
import './layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="side-menu-block">
          OFS
        </div>
        <div className="content-wrapper">
          <div className="header-block">
            <div className="title">
              <h5>Live Report</h5>
            </div>
            <div className="options">
            </div>
          </div>
          <div className="main-container">
            <Report />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
