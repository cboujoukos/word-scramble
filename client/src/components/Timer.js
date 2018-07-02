import React, { Component } from 'react';

class Timer extends Component{

  render(){
    return(
      <div className="timer">
        Time: {this.props.timeRemaining}
      </div>
    )
  }
}

export default Timer
