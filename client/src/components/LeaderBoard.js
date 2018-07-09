import React, { Component } from 'react';

export default class LeaderBoard extends Component {
  render(){
    return(
      <div>
        <h1>High Scores</h1>

        <table className="score-table">
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Score</th>
              <th>Name</th>
            </tr>
            <tr>
              <td>1st</td>
              <td>20000</td>
              <td>???</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>18000</td>
              <td>???</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>15000</td>
              <td>???</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
