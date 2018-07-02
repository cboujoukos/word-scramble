export default(state={
  loading: false,
  words: []
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    case 'FETCH_WORD_LIST':
      return Object.assign({}, state, {loading:false, words: action.payload});
    default:
      return state;
  }
}
