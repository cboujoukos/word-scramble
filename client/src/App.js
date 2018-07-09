import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Game from './containers/Game';
import NavBar from './components/NavBar';
import LeaderBoard from './containers/LeaderBoard';
import NewHighScore from './components/NewHighScore'
import './App.css';

class App extends Component {

  // TESTING CONNECTION TO API
  // componentDidMount() {
  //   window.fetch('api/words?difficulty=very_hard')
  //     .then(rsp => rsp.json())
  //     .then(json=> console.log(json))
  //     .catch(error=> console.log(error));
  //   window.fetch('api/words/10')
  //     .then(rsp => rsp.json())
  //     .then(json=> console.log(json))
  //     .catch(error=> console.log(error))
  // }

  // TESTING FETCH FROM EXTERNAL API
  // componentDidMount() {
  //   window.fetch(` https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/inflections/en/test`, {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'multipart/form-data',
  //       "Accept": "application/json",
  //       "app_id": `${process.env.REACT_APP_ID}`,
  //       "app_key": `${process.env.REACT_APP_KEY}`
  //     }
  //   })
  //   .then(rsp => {debugger});
  //
  //   window.fetch(`https://api.edamam.com/search?q=chicken`+`&app_id=c36af475`+`&app_key=db520ef743113e32c6a1ee7b5bd8ec9e`+`&to=100`)
  // }


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
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title">Word Scramble</h1>
          </header>
          <NavBar />
          <Route exact path="/" render={() => <h1>Welcome to the home page</h1>} />
          <Route exact path="/play" component={GamePage} />
          <Route exact path="/high_scores" component={LeaderBoard} />
          <Route exact path="/high_scores/new" component={NewHighScore} />
          {/*<Game initialSeconds={30}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
