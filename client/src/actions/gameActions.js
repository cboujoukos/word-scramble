import fetch from 'isomorphic-fetch';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const OedApiUrl = 'https://od-api.oxforddictionaries.com/api/v1'
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
        score: entry.score,
        name: entry.name
      })
    })
  }

}

// I guess I really just want this to return True/False.. Should I move it pout of actions since it doesn't map to a reducer?
export function validateWord(answer){
  const word = answer
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`${corsAnywhere}${OedApiUrl}/inflections/en/${word}`, {
      // mode: "cors",
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'multipart/form-data',
        // "Accept": "application/json",
        "app_id": `${process.env.REACT_APP_ID}`,
        "app_key": `${process.env.REACT_APP_KEY}`
      }
    })
    .then(rsp => rsp.status === 200 ? true : false)
  }
}

// export function startGame(){
//   return (dispatch) => {
//     dispatch({type: 'START_GAME'});
//   }
// }
//
// export function endGame(){
//   return (dispatch) => {
//     dispatch({type: 'END_GAME'});
//   }
// }
