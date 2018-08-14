import React from 'react';

const ScoreEntry = ({score, name, rank}) => {

  return (
    <tbody>
      <tr>
        <td className="rank">{rank}.</td>
        <td className="score">{score}</td>
        <td className="player">{name}</td>

      </tr>
    </tbody>
  )
}


export default ScoreEntry
