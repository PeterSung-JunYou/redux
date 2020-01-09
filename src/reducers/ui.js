import * as types from "../actions/ActionTypes";

const initalState = {
  color: [255, 255, 255],
  dummy: "dumbdumb",
  dumbObject: {
      d: 0,
      u: 1,
      m: 2,
      b: 3
  }
};

export default function ui(state = initalState, action) {
  /* 
    if (typeof state === 'undefiend'){
        return initalState
    } 
    */

  if (action.type === types.SET_COLOR) {
    return { ...state, color: action.color };
  } else {
    return state;
  }
}
