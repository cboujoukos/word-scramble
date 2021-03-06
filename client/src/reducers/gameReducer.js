export default(state={
  loading: false,
  targetWord: '',
  scramble: '',
  anagrams: [],
  highScores: []
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_WORD_LIST':
      return Object.assign({}, state, {loading:false, words: action.payload});
    case 'FETCH_WORD':
      return Object.assign({}, state, {loading:false, targetWord: action.payload.name, scramble: action.payload.scramble});
    case 'FETCH_ANAGRAMS':
      return Object.assign({}, state, {loading:false, anagrams: action.payload});
    case 'FETCH_HIGH_SCORES':
      return Object.assign({}, state, {loading:false, highScores: action.payload});
    default:
      return state;
  }
}
