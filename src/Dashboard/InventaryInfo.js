import React, { Component } from "react";

class InventaryInfo extends Component {
  render() {
    return (
      <div className="inventary__chart__info">
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="12" strokeWidth="3" fill="#BE61CA" />
            </svg>
          </div>
          <div className="chart__flow__stats">
            <div className="chart__stat__title">Activated</div>
            <div className="chart__flow">
              <div
                className="progress"
                data-toggle="tooltip"
                data-placement="top"
                title="75%"
              >
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
          <div className="chart__flow__count">143</div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="12" strokeWidth="3" fill="#633EBB" />
            </svg>
          </div>
          <div className="chart__flow__stats">
            <div className="chart__stat__title">Activation Ready</div>
            <div className="chart__flow">
              <div
                className="progress"
                data-toggle="tooltip"
                data-placement="top"
                title="45%"
              >
                <div className="progress-bar" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
          <div className="chart__flow__count">39</div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="12" strokeWidth="3" fill="#F2BC5E" />
            </svg>
          </div>
          <div className="chart__flow__stats">
            <div className="chart__stat__title">Deactivated</div>
            <div className="chart__flow">
              <div
                className="progress"
                data-toggle="tooltip"
                data-placement="top"
                title="30%"
              >
                <div className="progress-bar" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
          <div className="chart__flow__count">17</div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="12" strokeWidth="3" fill="#F13C59" />
            </svg>
          </div>
          <div className="chart__flow__stats">
            <div className="chart__stat__title">Inventary</div>
            <div className="chart__flow">
              <div
                className="progress"
                data-toggle="tooltip"
                data-placement="top"
                title="15%"
              >
                <div className="progress-bar" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
          <div className="chart__flow__count">5</div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="12" strokeWidth="3" fill="#64C2A6" />
            </svg>
          </div>
          <div className="chart__flow__stats">
            <div className="chart__stat__title">Retired</div>
            <div className="chart__flow">
              <div
                className="progress"
                data-toggle="tooltip"
                data-placement="top"
                title="5%"
              >
                <div className="progress-bar" style={{ width: "05%" }}></div>
              </div>
            </div>
          </div>
          <div className="chart__flow__count">2</div>
        </div>
      </div>
    );
  }
}

export default InventaryInfo;
