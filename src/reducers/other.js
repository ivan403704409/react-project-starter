const initialState = {text: 0};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {
        text: state + action.text,
      }
      break;
    case 'ADD_TWO':
      return {
        text: state + 2,
      }
      break;
    default:
      return state;
  }
}