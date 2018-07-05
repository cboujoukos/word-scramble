import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

  render(){

    const defaultStyle = {
      display: 'inline-block',
      padding: '20px 16px 0 16px',
      textDecoration: 'none',
      // backgroundColor: 'black',
      color: '#36495a',
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 'bold'
    }
    const activeStyle = {
      color: 'red'
    }

    return(
      <nav>
        <NavLink
          exact to="/"
          style={defaultStyle}
          activeStyle={activeStyle}>Home</NavLink>
        <NavLink exact to="/play"
        style={defaultStyle}
        activeStyle={activeStyle}>Play</NavLink>
        <NavLink exact to="scores"
        style={defaultStyle}
        activeStyle={activeStyle}>High Scores</NavLink>
      </nav>
    )
  }
}
export default NavBar
