import React, { Component } from "react";
import { Link } from "react-router-dom";
import InventaryPieChart from "./InventaryPieChart";
import InventaryInfo from './InventaryInfo';
import "./index.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__select">
          <label htmlFor="menu">Sim Status</label>
          <div className="status__select__menu">
            <select id="menu">
              <option value="all">All</option>
              <option value="activated">Activated</option>
              <option value="activation_ready">Activation Ready</option>
              <option value="deactivated">Deactivated</option>
              <option value="inventary">Inventary</option>
              <option value="test_ready">Test Ready</option>
              <option value="retired">Retired</option>
            </select>
          </div>
        </div>
        <div className="data__statistics">
          <div className="data__statistics__section">
            <div className="data__stat__title">Inventary</div>
            <div className="data__stat__count">
              220 <span className="count__unit">PCS</span>
            </div>
            <div className="data__stat__flow">
              <div>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <div className="flow__count">567 PCS</div>
            </div>
          </div>
          <div className="data__statistics__section">
            <div className="data__stat__title">Data Usage</div>
            <div className="data__stat__count">
              806.27 <span className="count__unit">GB</span>
            </div>
            <div className="data__stat__flow">
              <div>
                <i className="fa fa-caret-up" aria-hidden="true"></i>
              </div>
              <div className="flow__count">567 GB</div>
            </div>
          </div>
          <div className="data__statistics__section">
            <div className="data__stat__title">Cost Summary</div>
            <div className="data__stat__count">$5497</div>
            <div className="data__stat__flow">
              <div>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <div className="flow__count">$45,795</div>
            </div>
          </div>
          <div className="data__statistics__section">
            <div className="data__stat__title">Total User</div>
            <div className="data__stat__count">200</div>
            <div className="data__stat__flow">
              <div>
                <i className="fa fa-caret-up" aria-hidden="true"></i>
              </div>
              <div className="flow__count">10</div>
            </div>
          </div>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__overview">
            <div className="dashboard__section">Overview</div>
            <div className="row">
              <div className="col-4">
                <div className="data-card">
                  <div className="card__statistics">
                    <div className="statistics__info">
                      <div className="statistics__title">Inventory</div>
                    </div>
                    <div className="card__action--btn">
                      <button type="button" className="btn btn-default">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <InventaryPieChart />
                  <InventaryInfo />
                </div>
              </div>
              <div className="col-4">
                <div className="data-card">
                  <div className="card__statistics">
                    <div className="statistics__info">
                      <div className="statistics__title">Data Usage</div>
                    </div>
                    <div className="card__action--btn">
                      <button type="button" className="btn btn-default">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="data-card">
                  <div className="card__statistics">
                    <div className="statistics__info">
                      <div className="statistics__title">Cost Summary</div>
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
          <div className="dashboard__data">
            <div className="dashboard__section">Data</div>
            <div className="dashboard__table__wrapper">
              <table width="100%">
                <thead>
                  <tr>
                    <th>Rate Plan</th>
                    <th>Subscription Fee</th>
                    <th>SIM Count</th>
                    <th>Data Usage</th>
                    <th>Data Available</th>
                    <th>Total Cost (CAD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>600 MB</td>
                    <td>$12.75</td>
                    <td>9</td>
                    <td>4.21 GB</td>
                    <td>184 MB</td>
                    <td>$114</td>
                  </tr>
                  <tr>
                    <td>3 GB</td>
                    <td>$25.50</td>
                    <td>43</td>
                    <td>125.51 GB</td>
                    <td>3.49 GB</td>
                    <td>$1,096</td>
                  </tr>
                  <tr>
                    <td>5 GB</td>
                    <td>$34.50</td>
                    <td>64</td>
                    <td>310.60 GB</td>
                    <td>9.40 GB</td>
                    <td>$2,176</td>
                  </tr>
                  <tr>
                    <td>10 GB</td>
                    <td>$55.25</td>
                    <td>27</td>
                    <td>235.71 GB</td>
                    <td>34.29 GB</td>
                    <td>$1,491</td>
                  </tr>
                  <tr>
                    <td>70 GB</td>
                    <td>$310.25</td>
                    <td>2</td>
                    <td>130.23 GB</td>
                    <td>9.76 GB</td>
                    <td>$620</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
