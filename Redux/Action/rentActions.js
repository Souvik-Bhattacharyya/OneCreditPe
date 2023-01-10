import {
  ADD_OR_UPDATE_OWNER_DETAILS,
  ADD_OR_UPDATE_PAN_DETAILS,
  ADD_OR_UPDATE_BILLS,
  REMOVE_RENT_DETAILS,
  ADD_OR_UPDATE_AGREEMENT,
} from "../actionTypes";

/**
 *
 * @param {object} {name, address, mobile, rent_date, rent_since, deposit_amount, advanced_amount}
 * @returns
 */
export const addOrUpdateOwnerInfo = payload => {
  return {
    type: ADD_OR_UPDATE_OWNER_DETAILS,
    payload,
  };
};

/**
 *
 * @param {object} {mimeType,uri,name}
 * @returns
 */
export const addOrUpdateAgreement = payload => {
  return {
    type: ADD_OR_UPDATE_AGREEMENT,
    payload,
  };
};

/**
 *
 * @param {object} { pan_no: null,mimeType: "",uri: "",name: ""}
 * @returns
 */
export const addOrUpdatePanDetails = payload => {
  return {
    type: ADD_OR_UPDATE_PAN_DETAILS,
    payload,
  };
};

/**
 *
 * @param {object} {  mimeType: "",uri: "",name: "",billsList: [{amount: null,description: "", }]}
 * @returns
 */
export const addOrUpdateBills = payload => {
  return {
    type: ADD_OR_UPDATE_BILLS,
    payload,
  };
};

/**
 *
 * @returns
 */
export const removeRentDetails = () => {
  return {
    type: REMOVE_RENT_DETAILS,
  };
};
