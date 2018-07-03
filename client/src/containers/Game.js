import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWordList, fetchRandomWord } from '../actions/gameActions';
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
    this.props.onFetchWords();
  }

  handleOnStart = (event) => {
    this.props.onFetchRandomWord('easy');
    this.setState({
      status: 'playing'
    });
    console.log(this.state.status);
    debugger
  }

  render(){
    let button;

    if (this.state.status === 'new') {
      button = <button onClick={event => this.handleOnStart(event)}>Start</button>
    } else if (this.state.status === 'playing') {
      button = <button onClick={event => this.handleOnStart(event)}>Submit</button>
    } else {
      button = <button onClick={event => this.handleOnStart(event)}>New Game</button>
    }

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
