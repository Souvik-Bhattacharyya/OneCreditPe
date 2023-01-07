import {
  UPDATE_RENTAL_DETAILS,
  UPDATE_AGREEMENT,
  UPDATE_PAN_DETAILS,
  UPDATE_BILLS,
  REMOVE_RENT_DETAILS,
  // UPDATE_BANK_DETAILS,
} from "../actionTypes";

const INITIAL_STATE = {
  rental_details: {},
  agreement: {},
  pan_details: {},
  bills: {},
  // bank_details: {},
};
const rentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RENTAL_DETAILS:
      return {...state, rental_details: action.payload.rentalDetails};
    case UPDATE_AGREEMENT:
      return {...state, agreement: action.payload.agreement};
    case UPDATE_PAN_DETAILS:
      return {...state, pan_details: action.payload.panDetails};
    case UPDATE_BILLS:
      return {...state, bills: action.payload.bills};
    case REMOVE_RENT_DETAILS:
      return {
        ...state,
        rental_details: {},
        agreement: {},
        pan_details: {},
        bills: {},
      };
    // case UPDATE_BANK_DETAILS:
    //   return {...state, bank_details: action.payload.bankDetails};
    default:
      return state;
  }
};

export default rentReducer;

// name: "",
//   address: "",
//   mobile: null,
//   rent_date: "2023-01-1",
//   rent_since: "2023-01-1",
//   deposit_amount: null,
//   advanced_amount: null,
//   agreement_image: "",
//   pan_no: null,
//   pan_image: "",
//   bill_pdf: "",
//   bank_name: "",
//   branch_name: "",
//   ifsc_code: "",
//   account_no: null,
//   account_holder_name: "",
