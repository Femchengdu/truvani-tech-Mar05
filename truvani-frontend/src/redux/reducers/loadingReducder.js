import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
} from "../types/actionTypes";
const INITIAL_STATE = false;
const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return true;
    case FETCH_PRODUCTS_FAILED:
    case FETCH_PRODUCTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
