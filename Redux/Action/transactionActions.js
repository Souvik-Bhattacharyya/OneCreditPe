import {
  USER_TO_CUSTOMER_TRANSACTIONS,
  USER_TO_SUPPLIER_TRANSACTIONS,
} from "../actionTypes";

/**
 *
 * @param {Object} payload {customer: []}
 * @returns {Object} {type: USER_TO_CUSTOMER_TRANSACTIONS, payload}
 */
export const getCustomersTransactions = (payload = {customer: []}) => {
  return {
    type: USER_TO_CUSTOMER_TRANSACTIONS,
    payload,
  };
};

/**
 * @param {Object} payload {supplier: []}
 * @returns {Object} {type: USER_TO_SUPPLIER_TRANSACTIONS, payload}
 */
export const getSuppliersTransactions = (payload = {supplier: []}) => {
  return {
    type: USER_TO_SUPPLIER_TRANSACTIONS,
    payload,
  };
};
