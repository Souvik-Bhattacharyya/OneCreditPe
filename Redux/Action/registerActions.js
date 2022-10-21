import {EDIT_MOBILE, EDIT_NAME} from "../actionTypes";

export const editMobile = payload => {
  return {
    type: EDIT_MOBILE,
    payload,
  };
};

export const editName = payload => {
  return {
    type: EDIT_NAME,
    payload,
  };
};
