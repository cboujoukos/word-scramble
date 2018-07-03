import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from '../components/Letter';

class TargetWord extends Component {


// const TargetWord = ({gameStatus}) => {

  // const renderScramble = this.props.scramble.split('').map((letter, i) => {
  //   return <Letter key={i} value={letter} />
  // })
  //
  // const renderDefault = "SCRAMBLE".split('').map((letter, i) => {
  //   return <Letter key={i} value={letter} />
  // })

  render(){
    let renderScramble;
    if (!!this.props.scramble){
      renderScramble = this.props.scramble.split('').map((letter, i) => {
        return <Letter key={i} value={letter} />
      })
    } else {
      renderScramble = "SCRAMBLE".split('').map((letter, i) => {
        return <Letter key={i} value={letter} />
      })
    }
    const renderDefault = "SCRAMBLE".split('').map((letter, i) => {
      return <Letter key={i} value={letter} />
    })

    return (
      <div>
        {/*{this.props.gameStatus === 'new' ? renderDefault : renderScramble}*/}
        {renderScramble}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     targetWord: state.game.targetWord,
//     scramble: state.game.scramble,
//     // gameStatus: state.game.gameStatus
//   }
// }

// export default connect(mapStateToProps)(TargetWord)
export default TargetWord
