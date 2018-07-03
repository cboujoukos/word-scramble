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
      countdownTimer: 3,
      usedLetters: []
    }
  }

  componentDidMount() {
    this.props.onFetchRandomWord('easy');
  }



  handleOnStart = (event) => {
    event.preventDefault();
    // this.props.onFetchRandomWord('easy');
    // this.setState({status: 'playing'}, () => console.log(this.state.status));
    // alert('wtf is happening?')
    this.setState({ status: 'playing' }, () => {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          const newTimeRemaining = prevState.timeRemaining - 1;
          if (newTimeRemaining === 0) {
            clearInterval(this.intervalId);
            return { gameStatus: 'completed', timeRemaining: 0 };
          }
          return { timeRemaining: newTimeRemaining };
        });
      }, 1000);
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
  }


  render(){
    let button;

    if (this.state.status === 'new') {
      button = <button onClick={(event) => this.handleOnStart(event)}>Start</button>
    } else if (this.state.status === 'playing') {
      button = <button onClick={(event) => this.handleOnSubmit(event)}>Submit</button>
    } else {
      button = <button>New Game</button>
    }

    return(
      <div className="game-board">
        <div className="target-word">
          <TargetWord targetWord={this.props.targetWord} scramble={this.state.status === 'new' ? 'SCRAMBLE' : this.props.scramble} /> {/*gameStatus={this.state.status}*/}
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
