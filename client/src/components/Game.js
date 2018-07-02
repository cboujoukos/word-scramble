import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWordList } from '../actions/gameActions';
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

  }

  render(){
    return(
      <div className="game-board">
        <div className="target-word">
          <Letter letter="M" />
          <Letter letter="A" />
          <Letter letter="J" />
          <Letter letter="O" />
          <Letter letter="R" />
        </div>
        <input type="text" className="answer" />
        <div className="game-footer">
          <Timer timeRemaining={this.state.timeRemaining} />
          <div className="start-button">
            <button>Start</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWords: () => dispatch(fetchWordList())
  }
}
export default connect(null, mapDispatchToProps)(Game)
