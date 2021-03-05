import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_REDUX_CART_FROM_LS,
} from "../types/actionTypes";
import { productInList } from "../../utilityFns/utils";

const returnCartItemsOnAdd = (cartItems, product) => {
  let updatedCartItems;
  const productFromCart = productInList(cartItems, product);

  if (productFromCart) {
    updatedCartItems = cartItems.map((prod) =>
      prod.id === productFromCart.id
        ? { ...productFromCart, qty: productFromCart.qty + 1 }
        : prod
    );
  } else {
    updatedCartItems = [...cartItems, { ...product, qty: 1 }];
  }
  return updatedCartItems;
};

const returnCartItemsOnRemove = (cartItems, product) => {
  let updatedCartItems;
  const productFromCart = productInList(cartItems, product);

  if (productFromCart.qty === 1) {
    updatedCartItems = cartItems.filter(
      (prod) => prod.id !== productFromCart.id
    );
  } else {
    updatedCartItems = cartItems.map((prod) =>
      prod.id === productFromCart.id
        ? { ...productFromCart, qty: productFromCart.qty - 1 }
        : prod
    );
  }
  return updatedCartItems;
};

const updateStateFromLocalStorage = (cartItems, localStorageCart) => {
  let updatedState;
  updatedState = [...localStorageCart];
  return updatedState;
};

const INITIAL_STATE = [];
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_REDUX_CART_FROM_LS:
      return updateStateFromLocalStorage(state, action.cart);
    case ADD_PRODUCT_TO_CART:
      return returnCartItemsOnAdd(state, action.product);
    case REMOVE_PRODUCT_FROM_CART:
      return returnCartItemsOnRemove(state, action.product);
    default:
      return state;
  }
};

export default cartReducer;
