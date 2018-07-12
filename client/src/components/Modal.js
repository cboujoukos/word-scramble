import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component{
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    if (event.target.value.length <= 3) {
      this.setState({
        text: event.target.value
      })
    }
  }

  render(){
    if (!this.props.show){
      return null
    }


    return (
      <div className="backdrop">
        <div className="modal">
          <button className="btn exit" onClick={this.props.onClose}>X</button>
          <h3>CONGRATULATIONS!</h3>
          <p>New High Score: <span id="score">{this.props.score}</span></p>
          <p>Enter your initials</p>
          <form>
            <input className="answer" maxLength="3" onChange={(event) => this.handleChange(event)} id="initials" type="text" autoComplete="off" />
            <div className="modal-footer">
              <button className="btn default" onClick={this.props.onSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal
