import Api from "../Services";
import {SOMETHING_WENT_WRONG} from "../Utility/constants";

/**
 *
 * @returns {(string|Promise [])} SOMETHING_WENT_WRONG or array of transactions
 */
const UserToCustomerTransactions = async () => {
  try {
    const response = await Api.get("/auth/user-all-customers-transactions");
    if (response.data) return response.data;
    return null;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};

/**
 *
 * @returns {(string|Promise [])} SOMETHING_WENT_WRONG or array of transactions
 */
const UserToSupplierTransactions = async () => {
  try {
    const response = await Api.get("/auth/user-all-suppliers-transactions");
    if (response.data) return response.data;
    return null;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};

/**
 *
 * @returns {(string|Promise <object>)} SOMETHING_WENT_WRONG or array of transactions
 */
const getTransactionsReport = async () => {
  try {
    const response = await Api.get("/auth/view_reports");
    if (response.data) return response.data;
    return null;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};

export {
  UserToCustomerTransactions,
  UserToSupplierTransactions,
  getTransactionsReport,
};
