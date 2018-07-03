export default(state={
  loading: false,
  words: [],
  targetWord: ''
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_WORD_LIST':
      return Object.assign({}, state, {loading:false, words: action.payload});
    case 'FETCH_WORD':
      return Object.assign({}, state, {loading:false, targetWord: action.payload});
    default:
      return state;
  }
}
