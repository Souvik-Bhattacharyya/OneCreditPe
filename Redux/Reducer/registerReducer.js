import {EDIT_MOBILE, EDIT_NAME} from "../actionTypes";

const INITIAL_STATE = {
  name: "",
  mobileNumber: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case EDIT_MOBILE:
      return {...state, mobileNumber: action.payload.mobile};
    default:
      return state;
  }
};

export default reducer;
