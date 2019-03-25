import React from 'react';

class ScoreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      totalScore: 0,
    }
    this.submitScore = this.submitScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitScore(event) {
    console.log(event.target.value)
    this.setState({
      totalScore: this.state.score + this.state.totalScore,
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
          {this.state.totalScore}
        </div>
      </div>
    )
  }
}

export default ScoreSelector;