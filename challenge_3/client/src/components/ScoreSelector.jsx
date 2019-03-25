import React from 'react';

class ScoreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      prevScore: 0,
      totalScore: 0,
      bowls: 0,
      round: 0,
      spare: false,
      strike: false,
    }
    this.submitScore = this.submitScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSpare = this.handleSpare.bind(this);
    this.handleStrike = this.handleStrike.bind(this);
    this.handleStrikeScore = this.handleStrikeScore.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSpare() {
    this.setState({
      spare: (this.state.bowls % 2 === 1) && (parseInt(this.state.score) + this.state.prevScore === 10) ? true : false,
    })
  }

  handleStrike() {
    this.setState({
      strike: (this.state.bowls % 2 === 0) && (parseInt(this.state.score) === 10) ? true : false,
    })
  }

  handleStrikeScore() {
    
  }

  submitScore() {
    this.handleSpare();
    this.handleStrike();
    this.setState({
      prevScore: parseInt(this.state.score),
      totalScore: this.state.spare ? (parseInt(this.state.score) * 2 + this.state.totalScore) :
      this.state.strike ? (parseInt(this.state.score) * 2 + (this.state.prevScore * 2) + this.state.totalScore) :
      parseInt(this.state.score) + parseInt(this.state.totalScore),
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
        <div>
          TOTAL BOWLS:  
          {'  '}
          {this.state.bowls}
        </div>
      </div>
    )
  }
}

export default ScoreSelector;