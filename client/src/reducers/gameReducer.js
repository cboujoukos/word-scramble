export default(state={
  loading: false,
  words: [],
  targetWord: '',
  scramble: '',
  gameStatus: 'new'
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_WORD_LIST':
      return Object.assign({}, state, {loading:false, words: action.payload});
    case 'FETCH_WORD':
      return Object.assign({}, state, {loading:false, targetWord: action.payload.name, scramble: action.payload.scramble});
    case 'START_GAME':
      return Object.assign({}, state, {gameStatus: 'playing'});
    case 'END_GAME':
      return Object.assign({}, state, {gameStatus: 'completed'});
    default:
      return state;
  }
}
