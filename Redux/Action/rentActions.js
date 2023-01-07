import {
  UPDATE_RENTAL_DETAILS,
  UPDATE_AGREEMENT,
  UPDATE_PAN_DETAILS,
  UPDATE_BILLS,
  // UPDATE_BANK_DETAILS,
} from "../actionTypes";

export const updateRentalDetails = payload => {
  return {
    type: UPDATE_RENTAL_DETAILS,
    payload: payload,
  };
};

export const updateAgreement = payload => {
  return {
    type: UPDATE_AGREEMENT,
    payload: payload,
  };
};

export const updatePanDetails = payload => {
  return {
    type: UPDATE_PAN_DETAILS,
    payload: payload,
  };
};
export const updateBills = payload => {
  return {
    type: UPDATE_BILLS,
    payload: payload,
  };
};

// export const updateBankDetails = payload => {
//   return {
//     type: UPDATE_BANK_DETAILS,
//     payload: payload,
//   };
// };
