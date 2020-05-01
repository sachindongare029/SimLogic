import React from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.legend.display = false;

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      label: "Monthly Total Charge",
      backgroundColor: "#319788",
      borderWidth: 0,
      barPercentage: 0.9,
      barThickness: 12,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [100, 75, 50, 75, 50, 75, 100, 90],
    },
    {
      label: "Monthly Overage Charge",
      backgroundColor: "#3f51b5",
      borderWidth: 0,
      barPercentage: 0.9,
      barThickness: 12,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [90, 65, 40, 65, 40, 65, 90, 75],
    },
  ],
};

class CostBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legend: [],
    };
  }

  componentDidMount() {
    const instance = this.refs.chart.chartInstance;
    // console.log(this.chartReference);
    this.setState({ legend: instance.legend.legendItems });
  }

  render() {
    const { legend } = this.state;
    return (
      <div className="cost__bar__chart">
        <Bar
          ref="chart"
          data={state}
          width={100}
          height={80}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
        <div className="cost__chart__legend">
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

export default CostBarChart;
