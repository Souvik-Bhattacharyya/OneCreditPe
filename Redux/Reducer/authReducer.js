import {ADD_TOKEN, LOGOUT, UPDATE_USER} from "../actionTypes";

const INITIAL_STATE = {
  user: {},
  clientToken: "",
  business: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        user: action.payload.user,
        clientToken: action.payload.clientToken,
        business: action.payload.business,
      };
    case LOGOUT:
      return {...state, user: {}, clientToken: ""};
    case UPDATE_USER:
      return {...state, user: action.payload.user};
    default:
      return state;
  }
};

export default reducer;
