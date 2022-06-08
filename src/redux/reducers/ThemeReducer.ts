import { setColor, setMode } from '../actions/ThemeAction';
type ActionTypes = ReturnType<typeof setColor> | ReturnType<typeof setMode>;

const ThemeReducer = (state = {}, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
