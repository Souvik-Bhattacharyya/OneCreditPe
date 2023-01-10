import Api from "../Services";
import {SOMETHING_WENT_WRONG} from "../Utility/constants";

export const addRentDetails = async formData => {
  try {
    const response = await Api.postForm("/auth/rent-owner", formData);
    return response.data;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};

export const updateRentDetails = async (formData, rentId) => {
  try {
    const response = await Api.postForm(
      `/auth/rent-owner/${rentId}
    ?_method=put`,
      formData,
    );
    return response.data;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};

export const allRentalsDetails = async () => {
  try {
    const response = await Api.get(`/auth/rent-owner`);
    return response.data.data;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};
export const showRentDetails = async rentalId => {
  try {
    const response = await Api.get(`/auth/rent-owner/${rentalId}`);
    return response.data;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};

export const deleteRental = async id => {
  try {
    const response = await Api.delete(`/auth/rent-owner/${id}`);
    return response.data;
  } catch (error) {
    return SOMETHING_WENT_WRONG;
  }
};
