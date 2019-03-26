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
      strikeCount: 0,
    }
    this.submitScore = this.submitScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSpare = this.handleSpare.bind(this);
    this.submitBowl = this.submitBowl.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.baseState = this.state;
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSpare() {
    const { score1, score2 } = this.state;
    this.setState({
      spare: (parseInt(score1) + parseInt(score2)) === 10 && (parseInt(score2) !== 0) ? true : false,
    })
  }

  submitBowl() {
    const { bowls, score, strikeCount } = this.state;
    if (bowls % 2 === 0 && parseInt(score) === 10) {
      this.setState({
        bowls: bowls + 2,
        score1: parseInt(score),
        score2: 0,
        strikeCount: strikeCount + 1,
      })
    } else if (bowls % 2 === 0) {
      this.setState({
        bowls: bowls + 1,
        score1: parseInt(score),
        strikeCount: 0,
      })
    } else {
      this.setState({
        bowls: bowls + 1,
        score2: parseInt(score),
        strikeCount: 0,
      })
    }
  }

  submitScore() {
    const { score, score1, score2, totalScore, round, spare, strike, strikeCount, bowls } = this.state;
    this.handleSpare();
    this.setState({
      prevScore: parseInt(score),
      strike: score1 === 10 ? true : false,
      totalScore: spare ? ((parseInt(score1) * 2) + parseInt(score2) + totalScore) :
      strike && strikeCount > 0 && parseInt(round) < 3 ? ((parseInt(score1) * 2) + totalScore) :
      strike && strikeCount > 0 ? ((parseInt(score1) * 2) + 10 + totalScore) :
      strike ? ((parseInt(score1) * 2) + (parseInt(score2 * 2)) + totalScore) :
      parseInt(score1) + parseInt(score2) + parseInt(totalScore),
      round: parseInt(round) + 1,
      score1: 0,
      score2: 0,
    })
  }

  handleReset() {
    this.setState(this.baseState)
  }

  render() {
    const { totalScore, round, bowls, score1, score2 } = this.state;
    return (
      bowls <= 22 ?
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
          {totalScore}
        </div>
        <div>
          CURRENT ROUND:  
          {'  '}
          {round}
        </div>
        <div>
          TOTAL BOWLS:  
          {'  '}
          {bowls}
        </div>
        <div>
          SCORE 1:  
          {'  '}
          {score1}
        </div>
        <div>
          SCORE 2:  
          {'  '}
          {score2}
        </div>
      </div>
      :
      <div>
        GAME COMPLETE!!
        YOUR SCORE IS:
        { ' ' }
        {totalScore}
        <button onClick={this.handleReset}>RESET GAME</button>
      </div>
    )
  }
}

export default ScoreSelector;