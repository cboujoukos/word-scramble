import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component{
  render(){
    if (!this.props.show){
      return null
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    }

    return (
      <div className="backdrop" style={{backdropStyle}}>
        <div className="modal" style={{modalStyle}}>
          <button className="btn exit" onClick={this.props.onClose}>X</button>
          <h3>New High Score: {this.props.score}</h3>
          <h4>Enter your initials</h4>
          <form>
            <input id="initials" type="text" autoComplete="off" />
            <div className="modal-footer">
              <button className="btn" onClick={this.props.onSubmit}>Submit</button>
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
