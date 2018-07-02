import React, { Component } from 'react';


class Letter extends Component {
  render() {
    return(
      <div className="letter-tile">
        {this.props.letter}
      </div>
    )
  }
}


export default Letter
