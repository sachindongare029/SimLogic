import React, { Component } from "react";
import { Line, defaults } from "react-chartjs-2";

defaults.global.legend.display = false;

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data Available",
      fill: true,
      lineTension: 0.2,
      borderColor: "#3da295",
      borderWidth: 2,
      backgroundColor: "#d9eaed",
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3da295",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3da295",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 30, 10, 55, 20, 40, 15],
    },
    {
      label: "Data Usage",
      fill: true,
      lineTension: 0.2,
      borderColor: "#4558be",
      borderWidth: 2,
      backgroundColor: "#f0f2f8",
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#4558be",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#4558be",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 70, 35, 100, 40, 75, 35],
    },
  ],
};

class UsageLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legend: [],
    };
  }
  componentDidMount() {
    const instance = this.refs.chart.chartInstance;
    // console.log(instance);
    this.setState({ legend: instance.legend.legendItems });
  }

  render() {
    const { legend } = this.state;
    return (
      <div className="usage__line__chart">
        <Line
          ref="chart"
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: {
                top: 5,
                left: 5,
                right: 5,
                bottom: 15,
              },
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: true,
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    display: true,
                    fontColor: "rgba(1,0,0,0.6)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 25,
                    padding: 30,
                  },
                  gridLines: {
                    display: true,
                    drawBorder: false,
                  },
                },
              ],
            },
          }}
        />
        <div className="usage__chart__legend">
          {legend.length &&
            legend.map((item) => {
              return (
                <div key={item.text} className="legend__item">
                  <div className="legend__indicator">
                    <svg height="100%" width="100%">
                      <circle
                        cx="20"
                        cy="20"
                        r="12"
                        strokeWidth="3"
                        fill={item.fillStyle}
                      />
                    </svg>
                  </div>
                  <span>{item.text}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default UsageLineChart;
