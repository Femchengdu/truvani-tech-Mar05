import axios from "axios";
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_FAILED,
} from "../types/actionTypes";
import { productListUrl } from "../../config/appConfig";

const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_PRODUCTS_PENDING });
    try {
      const res = await axios.get(productListUrl);
      const { data } = res;
      if (data && "products" in data) {
        const { products } = data;
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: FETCH_PRODUCTS_FAILED, err: message });
    }
  };
};

export { fetchProducts };
