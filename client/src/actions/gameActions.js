import fetch from 'isomorphic-fetch';

export function fetchWordList(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch('api/words')
      .then(rsp => rsp.json())
      .then(json => json.data)
      .then(words => dispatch({type: 'FETCH_WORD_LIST', payload: words}))
  }
}
