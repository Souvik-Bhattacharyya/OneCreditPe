import {INCREMENT} from "../../actionTypes";

let initialState = {
  count: 0,
};
const IncrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count + 1};
    default:
      return state;
  }
};

export default IncrementReducer;
