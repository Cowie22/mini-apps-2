import React from 'react';

class ScoreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      totalScore: 0,
      bowls: 0,
      round: 0,
    }
    this.submitScore = this.submitScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitScore() {
    this.setState({
      totalScore: parseInt(this.state.score) + parseInt(this.state.totalScore),
      bowls: parseInt(this.state.bowls) + 1,
      round: this.state.bowls % 2 === 1 ? this.state.round + 1 : this.state.round,
    })
  }

  render() {
    return (
      <div>
        <label>SELECT SCORE:</label>
        <select name="score" onChange={this.handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button onClick={this.submitScore}>SUBMIT SCORE</button>
        <div>
          TOTAL SCORE:  
          {'  '}
          {this.state.totalScore}
        </div>
        <div>
          CURRENT ROUND:  
          {'  '}
          {this.state.round}
        </div>
      </div>
    )
  }
}

export default ScoreSelector;