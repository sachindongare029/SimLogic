import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h4>Dashboard</h4>
        </div>
        <div className="dashboard-content">
          <div className="dashboard__section">Overview</div>
          <div className="row">
            <div className="col-4">
              <div className="data-card">
                <div className="card__statistics">
                  <div className="statistics__info">
                    <div className="statistics__title">
                      <div className="card__title">Inventory</div>
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="statistics__count">
                    <div className="count">206</div>
                  </div>
                </div>
                <div className="card__action--btn">
                  <Link to="/" type="button" className="btn btn-default">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="data-card">
                <div className="card__statistics">
                  <div className="statistics__info">
                    <div className="statistics__title">
                      <div className="card__title">Data Usage</div>
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </div>
                    <div className="count__info">Total Data Used</div>
                  </div>
                  <div className="statistics__count">
                    <div className="count">806.27 <span className="count__extension">GB</span></div>
                  </div>
                </div>
                <div className="card__action--btn">
                  <button type="button" className="btn btn-default">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="data-card">
                <div className="card__statistics">
                  <div className="statistics__info">
                    <div className="statistics__title">
                      <div className="card__title">Cost Summary</div>
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </div>
                    <div className="count__info">Total Cost</div>
                  </div>
                  <div className="statistics__count">
                    <div className="count">$ 5,497</div>
                  </div>
                </div>
                <div className="card__action--btn">
                  <button type="button" className="btn btn-default">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
