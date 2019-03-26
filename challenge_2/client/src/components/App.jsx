import React from 'react';
import axios from 'axios';
import CryptoChart from './CryptoChart.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      price: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((res) => {
        let dateData = [];
        let priceData = [];
        for (let key in res.data.bpi) {
          dateData.push(key);
          priceData.push(res.data.bpi[key]);
        }
        this.setState({
          date: dateData,
          price: priceData,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency-Charting-Tool</h1>
        <CryptoChart
        date={this.state.date}
        price={this.state.price}
        />
        <a href="https://www.coindesk.com/price/bitcoin">Powered by Coindesk</a>
      </div>
    )
  }
}

export default App;