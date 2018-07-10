import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { fetchWordList, fetchRandomWord, fetchAnagrams, fetchHighScores } from '../actions/gameActions'; //, startGame, endGame
import TargetWord from './TargetWord';
import Timer from '../components/Timer';
import Modal from '../components/Modal';

class Game extends Component{
  constructor(props){
    super(props);

    this.state = {
      status: 'new', //new, playing, completed
      timeRemaining: this.props.initialSeconds,
      // countdownTimer: 3,
      score: 0,
      // usedLetters: [],
      scrambles: 0,
      newScramble: '',
      gameRound: 0,
      isOpen: true
    }
  }

  componentDidMount() {
    this.props.onFetchHighScores()
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleOnStart = (event) => {
    event.preventDefault();
    this.props.onFetchRandomWord('easy');
    // alert('wtf is happening?')
    this.setState((prevState) => {
      return { status: 'playing', gameRound: prevState.gameRound + 1 }
    }, this.startTimer());
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
    this.startTimer();
    this.startScore()
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        const newTimeRemaining = prevState.timeRemaining - 1;
        if (newTimeRemaining === 0) {
          clearInterval(this.intervalId);
          if (this.state.score > this.props.highScores[this.props.highScores.length-1].score){
            this.toggleModal()
          }
          return { status: 'completed', timeRemaining: 0 };
        }
        return { timeRemaining: newTimeRemaining };
      });
    }, 1000);
  }

  startScore = () => {
    this.scoreIntervalId = setInterval(() => {
      this.setState((prevState) => {
        const newScore = prevState.score + 1;
        if (this.state.status === 'completed') {
          clearInterval(this.scoreIntervalId);
          return { status: 'completed', timeRemaining: 0 };
        }
        return { score: newScore };
      });
    }, 100);
  }

// MAJOR PROBLEM : fetching anagrams takes roughly 8 seconds to complete. By this time player could have already entered a valid word and still losst.
  validateAnswer = (answer) => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    const OedApiUrl = 'https://od-api.oxforddictionaries.com/api/v1'

    // check if answer matches target word
    if (answer.toUpperCase() === this.props.targetWord) {
      this.nextRound()
    } else {
      // Check that if answer is an anagram
        if (this.props.anagrams.includes(answer)){
        this.nextRound()
      } else {
        this.gameOver()
      }
    }
  }

  nextRound = () => {
    let bonus;
    if (this.state.gameRound < 5) {
      this.props.onFetchRandomWord('easy');
      bonus = 100
    } else if ((this.state.gameRound > 4) && this.state.gameRound < 10) {
      this.props.onFetchRandomWord('medium');
      bonus = 250
    } else if ((this.state.gameRound > 9) && this.state.gameRound < 15) {
      this.props.onFetchRandomWord('hard');
      bonus = 750
    } else {
      this.props.onFetchRandomWord('very_hard');
      bonus = 2000
    };
    this.setState((prevState) => {
      return { gameRound: prevState.gameRound + 1, timeRemaining: this.props.initialSeconds, newScramble: '', score: (prevState.score + prevState.timeRemaining*5 + bonus) }
    }, this.startTimer());
  }



  gameOver = () => {
    clearInterval(this.intervalId);
    this.setState({ status: 'completed', timeRemaining: 0 });
    if (this.state.score > this.props.highScores[this.props.highScores.length-1].score){
      this.toggleModal()
      // this.props.history.push('/high_scores');
    }

  }

  submitHighScore = (event) => {
    event.preventDefault();
    alert(document.getElementById('initials').value)
  }

  // shuffleWord = event => {
  //   event.preventDefault();
  //   let newScramble =
  //   this.props.scramble.split('')
  //     .map(a => [Math.random(), a])
  //     .sort((a, b) => a[0] - b[0])
  //     .map(a => a[1])
  //     .join('');
  //     console.log(newScramble)
  // };


  render(){
    let button;
    let tiles;
    let newScramble;

    if (this.state.status === 'new') {
      button = <button className="btn default" onClick={(event) => this.handleOnStart(event)}>Start</button>;
      tiles = 'SCRAMBLE'
    } else if (this.state.status === 'playing') {
      button = <button className="btn default" onClick={(event) => this.handleOnSubmit(event)}>Submit</button>;
      // tiles = this.props.scramble
      if (this.state.scrambles === 0 || !this.state.newScramble) {
        tiles = this.props.scramble
      } else {
        tiles = this.state.newScramble
      }
    } else {
      button = <button className="btn default">New Game</button>;
      tiles = this.props.targetWord
    }


    const shuffleWord = event => {
      event.preventDefault();
      let shuffled =
      this.props.scramble.split('')
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
        .join('');
        console.log(`tiles: ${tiles}, newScramble: ${newScramble}`)
        this.setState((prevState) => {
          return {scrambles: prevState.scrambles + 1, newScramble: shuffled}
        }
      );
      document.getElementById('answer').focus()
    };


    return(

        <div className="game-board">
          <div className="target-word row item">
            <TargetWord targetWord={this.props.targetWord} scramble={tiles} shuffle={(event)=>shuffleWord(event)} status={this.state.status} scrambles={this.state.scrambles} />

          </div>
          <form>
            <div className="container">
              <input disabled={this.state.status === 'playing' ? false : true} id="answer" type="text" autoComplete="off" className="answer" />


              <div className="game-footer row">
                <div><Timer timeRemaining={this.state.timeRemaining} /></div>
                <div>{button}</div>
                <div>
                  Score: {this.state.score}
                </div>
              </div>
            </div>
          </form>
          <Modal show={this.state.isOpen} onClose={this.toggleModal} onSubmit={this.submitHighScore} score={this.state.score} />
        </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    targetWord: state.game.targetWord,
    scramble: state.game.scramble,
    anagrams: state.game.anagrams,
    highScores: state.game.highScores
    // gameStatus: state.game.gameStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWords: () => dispatch(fetchWordList()),
    onFetchRandomWord: (diff) => dispatch(fetchRandomWord(diff)),
    onFetchAnagrams: (word) => dispatch(fetchAnagrams(word)),
    onFetchHighScores: () => dispatch(fetchHighScores())
    // onStartGame: () => dispatch(startGame()),
    // onEndGame: () => dispatch(endGame())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Game))
