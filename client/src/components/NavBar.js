import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

  render(){

    const defaultStyle = {
      display: 'inline-block',
      padding: '20px 16px 0 16px',
      textDecoration: 'none',
      // backgroundColor: 'black',
      color: '#236AB9',
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 'bold'
    }
    const activeStyle = {
      color: '#D4E4F7'
    }

    return(
      <nav>
        <NavLink
          exact to="/"
          style={defaultStyle}
          activeStyle={activeStyle}>Play</NavLink>
        <NavLink
          exact to="/rules"
          style={defaultStyle}
          activeStyle={activeStyle}>Rules</NavLink>
        <NavLink
          exact to="/high_scores"
          style={defaultStyle}
          activeStyle={activeStyle}>High Scores</NavLink>
      </nav>
    )
  }
}
export default NavBar
