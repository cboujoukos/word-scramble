import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWordList, fetchRandomWord, validateWord } from '../actions/gameActions'; //, startGame, endGame
import TargetWord from './TargetWord';
import Timer from '../components/Timer';

class Game extends Component{
  constructor(props){
    super(props);

    this.state = {
      status: 'new', //new, playing, completed
      timeRemaining: this.props.initialSeconds,
      countdownTimer: 3,
      usedLetters: [],
      gameRound:0
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
    this.setState((prevState) => {
      return { status: 'playing', gameRound: prevState.gameRound + 1 }
    }, this.startInterval());
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(document.getElementById('answer').value)
    // this.setState({status: 'completed'});
    clearInterval(this.intervalId)
    this.validateAnswer(document.getElementById('answer').value)
    // this.validAnswer(document.getElementById('answer').value)
    document.getElementById('answer').value = ''
  }

  startInterval = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        const newTimeRemaining = prevState.timeRemaining - 1;
        if (newTimeRemaining === 0) {
          clearInterval(this.intervalId);
          return { status: 'completed', timeRemaining: 0 };
        }
        return { timeRemaining: newTimeRemaining };
      });
    }, 1000);
  }

  validAnswer = (answer) => {
    // check if answer matches target word
    // Check that the letters entered match the letters in target word
    // if yes, dispatch call to OED api to check for presence of answer
    if (answer.toUpperCase() === this.props.targetWord) {
      return true
    } else {
      // this.props.onValidateWord(answer)
      return false
    }
  }

  restartGame = () => {
    clearInterval(this.intervalId);
    this.setState({ status: 'completed', timeRemaining: 0 });
  }

  validateAnswer = (answer) => {
    if (this.validAnswer(answer)){
      if (this.state.gameRound < 5) {
        this.props.onFetchRandomWord('easy')
      } else if ((this.state.gameRound > 4) && this.state.gameRound < 10) {
        this.props.onFetchRandomWord('medium')
      } else if ((this.state.gameRound > 9) && this.state.gameRound < 15) {
        this.props.onFetchRandomWord('hard')
      } else {
        this.props.onFetchRandomWord('very_hard')
      };
      this.setState((prevState) => {
        return { gameRound: prevState.gameRound + 1, timeRemaining: this.props.initialSeconds }
      }, this.startInterval());
    } else {
      alert('you lose.')
      this.restartGame()
    }
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
          <input id="answer" type="text" className="answer" />
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
    onValidateWord: (word) => dispatch(validateWord(word))
    // onStartGame: () => dispatch(startGame()),
    // onEndGame: () => dispatch(endGame())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)
