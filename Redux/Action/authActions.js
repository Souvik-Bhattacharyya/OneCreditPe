import {ADD_TOKEN, LOGOUT, UPDATE_USER} from "../actionTypes";

export const addToken = payload => {
  return {
    type: ADD_TOKEN,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const updateUser = payload => {
  return {
    type: UPDATE_USER,
    payload,
  };
};
