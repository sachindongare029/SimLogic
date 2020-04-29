import React from "react";
import { Doughnut } from "react-chartjs-2";

class InventaryPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [
        "Activated",
        "Activation Ready",
        "Deactivated",
        "Inventary",
        "Retired",
      ],
      datasets: [
        {
          backgroundColor: [
            "#BE61CA",
            "#633EBB",
            "#F2BC5E",
            "#F13C59",
            "#64C2A6",
          ],
          hoverBackgroundColor: [
            "#7e3288",
            "#381a80",
            "#947030",
            "#982537",
            "#76968d",
          ],
          data: [143, 39, 17, 5, 2],
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
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default InventaryPieChart;
