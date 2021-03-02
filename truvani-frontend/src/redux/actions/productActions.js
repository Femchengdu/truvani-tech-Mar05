import axios from "axios";
import * as types from "../types/actionTypes";
import { productListUrl } from "../../config/appConfig";
// Add to Cart

// Remove from Cart

// Fetch Products
const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: types.FETCH_PRODUCTS_PENDING });
    try {
      const res = await axios.get(productListUrl);
      const { data } = res;
      if (data) {
        dispatch({ type: types.FETCH_PRODUCTS_SUCCESS, products: data });
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.FETCH_PRODUCTS_FAILED, err: message });
    }
  };
};

export { fetchProducts };
