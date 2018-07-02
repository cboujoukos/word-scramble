export default(state={
  loading: false,
  words: []
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading:true});
    default:
      return state;
  }
}
