import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import Game from './containers/Game';
import NavBar from './components/NavBar';
import Rules from './components/Rules';
import LeaderBoard from './containers/LeaderBoard';
import { fetchHighScores } from './actions/gameActions';
import './App.css';
import shuffle from './shuffle.png';

class App extends Component {

  componentDidMount() {
    this.props.onFetchHighScores()
  }

  render() {
    const GamePage = () => {
      return (
        <Game initialSeconds={30} />
      )
    }

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="title-logo"><h1 className="App-title">unjumbled</h1></div>
            <NavBar />
          </header>
          <div className="main">
            <Route exact path="/" component={GamePage} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/high_scores" component={LeaderBoard} />
          </div>
          <footer>
            <p>created by: chris boujoukos</p>
            <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Shuffle">Shuffle</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div><br />
          </footer>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchHighScores: () => dispatch(fetchHighScores())
  }
}

export default connect(null, mapDispatchToProps)(App);
