import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "../types/actionTypes";

const addItemToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

const removeItemFromCart = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  product,
});

export { addItemToCart, removeItemFromCart };
