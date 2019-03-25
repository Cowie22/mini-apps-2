import React from 'react';
import ScoreSelector from './ScoreSelector.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <ScoreSelector />
      </div>
    )
  }
}

export default App;