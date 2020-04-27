import React, { Component } from 'react'
import "./index.scss"

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h4>status</h4>
          <select id="menu" className="select-menu">
            <option value="overview">overview</option>
            <option value="data">data</option>
          </select>
        </div>
        <div className="row dashboard-content">
          <div className="col-4">
            <div className="data-card">
              <h6>
                <b>Inventory</b>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </h6>
              <p>206</p>
              <button type="button" className="btn btn-default">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="data-card">
              <h6>
                <b>Data Usage</b>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </h6>
              <p>Total Data Used: 806.27 GB</p>
              <button type="button" className="btn btn-default">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="data-card">
              <h6>
                <b>Cost Summary</b>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </h6>
              <p>Total Cost: $5,497</p>
              <button type="button" className="btn btn-default">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
