import React from "react";
import { Doughnut } from "react-chartjs-2";

class InventaryPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          backgroundColor: ["#B21F00", "#C9DE00", "#00A6B4", "#6800B4"],
          hoverBackgroundColor: ["#501800", "#4B5000", "#003350", "#35014F"],
          data: [65, 59, 81, 56],
        },
      ],
    };
  }
  render() {
    let { labels, datasets } = this.state;
    return (
      <div className="inventary__pie__chart">
        <Doughnut
          data={{
            labels: labels,
            datasets: datasets,
          }}
          options={{
            title: {
              display: false,
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default InventaryPieChart;
