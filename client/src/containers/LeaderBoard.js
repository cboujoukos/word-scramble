import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighScores } from '../actions/gameActions';
import ScoreEntry from '../components/ScoreEntry';

class LeaderBoard extends Component {

  componentDidMount(){
    this.props.onFetchHighScores()
  }

  render(){
    const renderHighScores = this.props.highScores.map((entry, i) =>
    <ScoreEntry key={entry.id} score={entry.score} name={entry.name} rank={i+1} votes={0} />
  )
    return(
      <div className="container score-container">
        <div className="leader-board">
          <h1>High Scores</h1>

          <table className="score-table">
            <tbody>
              <tr>
                <th className="rank">Rank</th>
                <th className="score">Score</th>
                <th className="player">Name</th>
              </tr>
            </tbody>
            {renderHighScores}
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    highScores: state.game.highScores
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchHighScores: () => dispatch(fetchHighScores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
