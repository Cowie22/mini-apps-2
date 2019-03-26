import React from 'react';
var Chart = require("chart.js");

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillReceiveProps(nextProps) {
    const node = this.node;
    Chart.defaults.global.defaultFontColor = "#0ec91d";
    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: nextProps.date,
        datasets: [
          {
            label: "Bitcoin Currency",
            data: nextProps.price,
            backgroundColor: [
              "#4286f4"
            ]
          }
        ],
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 700, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    )
  }
}

export default CryptoChart