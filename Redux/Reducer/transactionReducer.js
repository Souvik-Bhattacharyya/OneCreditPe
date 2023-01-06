import {
  USER_TO_CUSTOMER_TRANSACTIONS,
  USER_TO_SUPPLIER_TRANSACTIONS,
} from "../actionTypes";

const INITIAL_STATE = {
  customer: [], // all transactions from user to customer
  supplier: [], // all transactions from user to supplier
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_TO_CUSTOMER_TRANSACTIONS:
      return {
        ...state,
        customer: action.payload.customer,
      };
    case USER_TO_SUPPLIER_TRANSACTIONS:
      return {
        ...state,
        supplier: action.payload.supplier,
      };
    default:
      return state;
  }
};

export default transactionReducer;
