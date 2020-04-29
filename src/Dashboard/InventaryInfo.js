import React, { Component } from 'react'

class InventaryInfo extends Component {
  render() {
    return (
      <div className="inventary__chart__info">
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="14" stroke-width="3" fill="#BE61CA" />
            </svg>
          </div>
          <div className="chart__flow__stats">
            <div className="chart__stat__title">Activated</div>
            <div className="chart__flow">
              <div class="progress">
                <div class="progress-bar" style={{width:"75%"}}>75%</div>
              </div>
            </div>
          </div>
          <div className="chart__flow__count">
            143
          </div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="14" stroke-width="3" fill="#633EBB" />
            </svg>
          </div>
          <div className="chart__flow__stats"></div>
          <div className="chart__flow__count"></div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="14" stroke-width="3" fill="#F2BC5E" />
            </svg>
          </div>
          <div className="chart__flow__stats"></div>
          <div className="chart__flow__count"></div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="14" stroke-width="3" fill="#F13C59" />
            </svg>
          </div>
          <div className="chart__flow__stats"></div>
          <div className="chart__flow__count"></div>
        </div>
        <div className="chart__info__section">
          <div className="chart__color__logo">
            <svg height="100%" width="100%">
              <circle cx="20" cy="20" r="14" stroke-width="3" fill="#64C2A6" />
            </svg>
          </div>
          <div className="chart__flow__stats"></div>
          <div className="chart__flow__count"></div>
        </div>
      </div>
    );
  }
}

export default InventaryInfo