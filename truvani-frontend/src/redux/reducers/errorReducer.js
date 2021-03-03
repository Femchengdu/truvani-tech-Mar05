import { FETCH_PRODUCTS_FAILED } from "../types/actionTypes";
const INITIAL_STATE = false;
const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FAILED:
      return true;
    default:
      return state;
  }
};

export default errorReducer;
