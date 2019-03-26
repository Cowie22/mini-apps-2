import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  
  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((res) => {
        this.setState({
          data: res.data.bpi
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