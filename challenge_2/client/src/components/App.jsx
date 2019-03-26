import React from 'react';
import axios from 'axios';
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
          data: dateData,
          price: priceData,
        })
      })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default App;