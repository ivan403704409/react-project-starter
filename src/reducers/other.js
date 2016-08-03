const initialState = {text: 100};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
    console.log(state.text);
      return {
        text: state.text + action.text,
      }
      break;
    case 'ADD_TWO':
      return {
        text: state.text + 2,
      }
      break;
    default:
      return state;
  }
}