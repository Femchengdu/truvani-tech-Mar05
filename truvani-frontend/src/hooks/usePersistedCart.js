import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  readCartFromLS,
  initLocalStorageFromRedux,
  updateReduxCartFromLS,
} from "../redux/actions/cartActions";
import { localStorageCartKey } from "../config/appConfig";

const usePersistedCart = (cartOnStartup) => {
  const [cartItems, setCartItems] = useState(cartOnStartup);
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const cartVal = readCartFromLS(localStorageCartKey);
      if (cartVal === null) {
        const stringifiedCartObj = JSON.stringify({ cartItems });
        initLocalStorageFromRedux(localStorageCartKey, stringifiedCartObj);
      } else {
        if (JSON.stringify({ cartItems }) !== cartVal) {
          const parsedLocalCartStorage = JSON.parse(cartVal);
          const { cartItems: localCartItems } = parsedLocalCartStorage;
          if (localCartItems.length !== 0) {
            dispatch(updateReduxCartFromLS(localCartItems));
          }
        } else {
          console.log("Same value, nothing to do here :", cartItems, cartVal);
        }
      }
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, cartItems]);
};

export default usePersistedCart;
