import React from 'react';

class ScoreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      prevScore: 0,
      totalScore: 0,
      bowls: 0,
      round: 1,
      spare: false,
      strike: false,
      score1: 0,
      score2: 0,
    }
    this.submitScore = this.submitScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSpare = this.handleSpare.bind(this);
    // this.handleStrike = this.handleStrike.bind(this);
    // this.handleStrikeScore = this.handleStrikeScore.bind(this);
    this.submitBowl = this.submitBowl.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  // handleSpare() {
  //   this.setState({
  //     spare: (this.state.bowls % 2 === 1) && (parseInt(this.state.score) + this.state.prevScore === 10) ? true : false,
  //   })
  // }

  handleSpare() {
    this.setState({
      spare: (parseInt(this.state.score1) + parseInt(this.state.score2)) === 10 && (parseInt(this.state.score2) !== 0) ? true : false,
    })
  }


  // handleStrike() {
  //   this.setState({
  //     strike: (parseInt(this.state.score1) === 10) ? true : false,
  //   })
  // }

  // handleStrikeScore() {
  //   if (this.state.score === 10) {
  //     this.setState({
  //       bowls: parseInt(this.state.bowls) + 2,
  //       round: parseInt(this.state.round) + 1,

  //     })
  //   }
  // }

  submitBowl() {
    // this.handleSpare();
    // this.handleStrike();
    if (this.state.bowls % 2 === 0 && parseInt(this.state.score) === 10) {
      this.setState({
        bowls: this.state.bowls + 2,
        score1: parseInt(this.state.score),
        score2: 0,
        // strike: true,
      })
    } else if (this.state.bowls % 2 === 0) {
      this.setState({
        bowls: this.state.bowls + 1,
        // round: this.state.round + 1,
        score1: parseInt(this.state.score),
      })
    } else {
      this.setState({
        bowls: this.state.bowls + 1,
        score2: parseInt(this.state.score),
      })
    }
  }

  submitScore() {
    // this.handleStrike();
    this.handleSpare();
    this.setState({
      prevScore: parseInt(this.state.score),
      strike: this.state.score1 === 10 ? true : false,
      totalScore: this.state.spare ? ((parseInt(this.state.score1) * 2) + parseInt(this.state.score2) + this.state.totalScore) :
      this.state.strike ? ((parseInt(this.state.score1) * 2) + (parseInt(this.state.score2 * 2)) + this.state.totalScore) :
      parseInt(this.state.score1) + parseInt(this.state.score2) + parseInt(this.state.totalScore),
      // bowls: this.state.strike ? this.state.bowls + 2 : this.state.bowls,
      round: parseInt(this.state.round) + 1,
      score1: 0,
      score2: 0,
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
        <button onClick={this.submitBowl}>SUBMIT BOWL</button>
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
        <div>
          SCORE 1:  
          {'  '}
          {this.state.score1}
        </div>
        <div>
          SCORE 2:  
          {'  '}
          {this.state.score2}
        </div>
      </div>
    )
  }
}

export default ScoreSelector;