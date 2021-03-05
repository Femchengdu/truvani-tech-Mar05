import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_REDUX_CART_FROM_LS,
} from "../types/actionTypes";

const readCartFromLS = (storageKey) => {
  const storageResult = localStorage.getItem(storageKey);
  return storageResult;
};

const initLocalStorageFromRedux = (localStorageCartKey, stringifiedCartObj) => {
  localStorage.setItem(localStorageCartKey, stringifiedCartObj);
};

const addItemToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

const removeItemFromCart = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  product,
});

const updateReduxCartFromLS = (cart) => ({
  type: UPDATE_REDUX_CART_FROM_LS,
  cart,
});

export {
  addItemToCart,
  removeItemFromCart,
  readCartFromLS,
  initLocalStorageFromRedux,
  updateReduxCartFromLS,
};
