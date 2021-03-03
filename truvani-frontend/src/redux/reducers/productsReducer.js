import { FETCH_PRODUCTS_SUCCESS } from "../types/actionTypes";

const returnFetchedProducts = (productItems, products) => {
  let updatedProductItems;
  updatedProductItems = [...productItems, ...products];
  return updatedProductItems;
};
const INITIAL_STATE = [];
const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return returnFetchedProducts(state, action.products);

    default:
      return state;
  }
};

export default productsReducer;
