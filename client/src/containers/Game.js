import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWordList, fetchRandomWord } from '../actions/gameActions'; //, startGame, endGame
import TargetWord from './TargetWord';
import Timer from '../components/Timer';

class Game extends Component{
  constructor(props){
    super(props);

    this.state = {
      status: 'new', //new, playing, completed
      timeRemaining: this.props.initialSeconds,
      usedLetters: []
    }
  }

  componentDidMount() {
    // this.props.onFetchWords();
    this.props.onFetchRandomWord('easy');
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //   // const diffWord = this.props.targetWord !== nextProps.targetWord
  //   const diffStatus = this.state.status !== nextState.status
  //   return diffStatus
  // }

  handleOnStart = (event) => {
    this.setState({status: 'playing'})
    // this.props.onFetchRandomWord('easy');
    // console.log(this.props.gameStatus);
    console.log(this.state.status)
  }

  startGame = () => {

  }

  render(){
    let button;

    if (this.state.status === 'new') {
      button = <button onClick={event => this.handleOnStart(event)}>Start</button>
    } else if (this.state.status === 'playing') {
      button = <button>Submit</button>
    } else {
      button = <button>New Game</button>
    }

    return(
      <div className="game-board">
        <div className="target-word">
          {/*<Letter letter="M" />
          <Letter letter="A" />
          <Letter letter="J" />
          <Letter letter="O" />
          <Letter letter="R" />*/}
          <TargetWord targetWord={this.props.targetWord} scramble={this.state.status === 'new' ? 'SCRAMBLE' : this.props.scramble} />
        </div>
        <form>
          <input type="text" className="answer" />
          <div className="game-footer">
            <Timer timeRemaining={this.state.timeRemaining} />
            <div className="start-button">
              {button}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    targetWord: state.game.targetWord,
    scramble: state.game.scramble,
    // gameStatus: state.game.gameStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWords: () => dispatch(fetchWordList()),
    onFetchRandomWord: (diff) => dispatch(fetchRandomWord(diff)),
    // onStartGame: () => dispatch(startGame()),
    // onEndGame: () => dispatch(endGame())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)
