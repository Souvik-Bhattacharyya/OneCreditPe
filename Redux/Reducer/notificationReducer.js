import {NOTIFY, HIDE} from "../actionTypes";

const INITIAL_STATE = {
  message: "",
  isVisible: false,
  type: "error", // success
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        message: action.payload.message,
        isVisible: true,
        type: action.payload.notifyType || "error",
      };
    case HIDE:
      return {
        message: "",
        type: "",
        isVisible: false,
      };
    default:
      return state;
  }
};

export default reducer;
