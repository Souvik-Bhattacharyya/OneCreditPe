import Api from "../Services";
import {SOMETHING_WENT_WRONG} from "../Utility/constants";

export const addRentDetails = async formData => {
  try {
    const response = await Api.postForm("/auth/rent-owner", formData);
    console.log("-------------------->", response.data);
    return response.data;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};
