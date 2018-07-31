import fetch from 'isomorphic-fetch';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
// const OedApiUrl = 'https://od-api.oxforddictionaries.com/api/v1'
const anagramUrl = `http://www.anagramica.com/all/`

export function fetchWordList(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch('api/words')
      .then(rsp => rsp.json())
      .then(json => json.data)
      .then(words => dispatch({type: 'FETCH_WORD_LIST', payload: words}))
  }
}

export function fetchRandomWord(diff){
  let difficulty = diff
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`api/words?difficulty=${difficulty}`)
      .then(rsp => rsp.json())
      .then(json => json.data)
      .then(word => dispatch({type: 'FETCH_WORD', payload: word}))
      .then(word => dispatch(fetchAnagrams(word.payload.name)));
  }
}

export function fetchHighScores(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`api/high_scores`)
    .then(rsp => rsp.json())
    .then(json => json.data)
    .then(scores => dispatch({type: 'FETCH_HIGH_SCORES', payload: scores}))
  }
}

export function fetchAnagrams(word){
  return(dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`${corsAnywhere}${anagramUrl}${word}`)
    .then(rsp => rsp.json())
    .then(json => json.all)
    .then(anagrams => dispatch({type: 'FETCH_ANAGRAMS', payload: anagrams}))
  }
}

export function postHighScore(entry){
  return (dispatch) => {
    return fetch(`/api/high_scores`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: entry.high_score.score,
        name: entry.high_score.name
      })
    }).then(() => dispatch(fetchHighScores()))
  }
}
