import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWordList, fetchRandomWord } from '../actions/gameActions';
import TargetWord from '../containers/TargetWord';
import Letter from './Letter';
import Timer from './Timer';

class Game extends Component{
  constructor(props){
    super(props);

    this.state = {
      status: 'new', //new, playing, complete
      timeRemaining: this.props.initialSeconds,
      usedLetters: []
    }
  }

  componentDidMount() {
    this.props.onFetchWords();
  }

  handleOnStart = (event) => {
    this.props.onFetchRandomWord('easy')
  }

  render(){


    return(
      <div className="game-board">
        <div className="target-word">
          {/*<Letter letter="M" />
          <Letter letter="A" />
          <Letter letter="J" />
          <Letter letter="O" />
          <Letter letter="R" />*/}
          <TargetWord targetWord={this.props.targetWord} scramble={this.props.scramble} />
        </div>
        <input type="text" className="answer" />
        <div className="game-footer">
          <Timer timeRemaining={this.state.timeRemaining} />
          <div className="start-button">
            <button onClick={event => this.handleOnStart(event)}>Start</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    targetWord: state.game.targetWord,
    scramble: state.game.scramble
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWords: () => dispatch(fetchWordList()),
    onFetchRandomWord: (diff) => dispatch(fetchRandomWord(diff))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)
