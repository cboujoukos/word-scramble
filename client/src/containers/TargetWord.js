import React from 'react';
import Letter from '../components/Letter';

const TargetWord = ({targetWord, scramble}) => {
  const renderScramble = scramble.split('').map((letter, i) => {
    return <Letter key={i} value={letter} />
  })

  return (
    <div>
      {renderScramble}
    </div>
  )


}

export default TargetWord
