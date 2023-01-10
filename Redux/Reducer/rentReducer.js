import {
  ADD_OR_UPDATE_OWNER_DETAILS,
  ADD_OR_UPDATE_PAN_DETAILS,
  ADD_OR_UPDATE_BILLS,
  REMOVE_RENT_DETAILS,
  ADD_OR_UPDATE_AGREEMENT,
} from "../actionTypes";

const INITIAL_STATE = {
  owner: {
    name: "",
    address: "",
    mobile: null,
    rent_date: new Date(),
    rent_since: new Date(),
    deposit_amount: null,
    advanced_amount: null,
  },
  agreement: {
    mimeType: "",
    uri: "",
    name: "",
  },
  pan_details: {
    pan_no: null,
    mimeType: "",
    uri: "",
    name: "",
  },
  bills: {
    mimeType: "",
    uri: "",
    name: "",
    billsList: [
      {
        amount: null,
        description: "",
      },
    ],
  },
};

const rentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_OR_UPDATE_OWNER_DETAILS:
      return {...state, owner: action.payload};
    case ADD_OR_UPDATE_AGREEMENT:
      return {...state, agreement: action.payload};
    case ADD_OR_UPDATE_PAN_DETAILS:
      return {...state, pan_details: action.payload};
    case ADD_OR_UPDATE_BILLS:
      return {...state, bills: action.payload};
    case REMOVE_RENT_DETAILS:
      return {...state, ...INITIAL_STATE};

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
