import {
  UPDATE_RENT_DETAILS,
  UPDATE_AGREEMENT,
  UPDATE_PAN_DETAILS,
  UPDATE_BILLS,
  REMOVE_RENT_DETAILS,
  UPDATE_All_DETAILS_OF_RENTAL,
  SHOW_ALL_RENTALS,
} from "../actionTypes";

const INITIAL_STATE = {
  rent_details: {},
  agreement: {},
  pan_details: {},
  bills: {},
};

const INITIAL_ALL_RENTALS = [];
const INITIAL_RENTAL_DETAILS = {};

const addRentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RENT_DETAILS:
      return {...state, rent_details: action.payload.rentDetails};
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

    default:
      return state;
  }
};

const showAllRentalsReducer = (state = INITIAL_ALL_RENTALS, action) => {
  switch (action.type) {
    case SHOW_ALL_RENTALS:
      return (state = action.payload);
    default:
      return state;
  }
};

const updateAllDetailsOfRentals = (state = INITIAL_RENTAL_DETAILS, action) => {
  switch (action.type) {
    case UPDATE_All_DETAILS_OF_RENTAL:
      return (state = action.payload);
    default:
      return state;
  }
};
export {addRentReducer, showAllRentalsReducer, updateAllDetailsOfRentals};

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
