import React, { Component } from 'react';
import shuffle from '../shuffle.png';
// import { connect } from 'react-redux';
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
    // const renderDefault = "SCRAMBLE".split('').map((letter, i) => {
    //   return <Letter key={i} value={letter} />
    // })

    return (
      <div className="box">
        {/*{this.props.gameStatus === 'new' ? renderDefault : renderScramble}*/}
        {renderScramble}
        {(this.props.status === 'playing' && this.props.scrambles < 10) ?
          <img src={shuffle} className="btn shuffle default" onClick={this.props.shuffle} />
          :
          null}
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
