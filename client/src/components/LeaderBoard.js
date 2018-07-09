import React, { Component } from 'react';

export default class LeaderBoard extends Component {
  render(){
    return(
      <div>
        <h1>High Scores</h1>

        <table className="score-table">
          <tbody>
            <tr>
              <th className="rank">Rank</th>
              <th className="score">Score</th>
              <th className="player">Name</th>
            </tr>
            <tr>
              <td className="rank">1st</td>
              <td className="score">20000</td>
              <td className="player">???</td>
            </tr>
            <tr>
              <td className="rank">2nd</td>
              <td className="score">18000</td>
              <td className="player">???</td>
            </tr>
            <tr>
              <td className="rank">3rd</td>
              <td className="score">15000</td>
              <td className="player">???</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
