import {HIDE, NOTIFY} from "../actionTypes";

export const notify = payload => {
  return {
    type: NOTIFY,
    payload,
    // message: payload.message,
    // notifyType: payload.notifyType,
  };
};

export const hide = () => {
  return {
    type: HIDE,
  };
};
