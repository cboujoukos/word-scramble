import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreEntry from '../components/ScoreEntry';

class LeaderBoard extends Component {

  render(){
    const renderHighScores = this.props.highScores.map((entry, i) =>
    <ScoreEntry key={entry.id} score={entry.score} name={entry.name} rank={i+1} votes={0} />
  )

    if (this.props.highScores.length === 0) {
      return(
        <div className="container score-container">
          <h2>Loading high scores...</h2>
        </div>
      )
    }
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


export default connect(mapStateToProps)(LeaderBoard)
