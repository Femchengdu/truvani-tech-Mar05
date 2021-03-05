import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  readCartFromLS,
  initLocalStorageFromRedux,
} from "../redux/actions/cartActions";
import { localStorageCartKey } from "../config/appConfig";

const useUpdateCartInLocalStorage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const currentReduxCartString = JSON.stringify({ cartItems });
      const cartVal = readCartFromLS(localStorageCartKey);
      if (cartItems.length !== 0) {
        if (cartVal !== currentReduxCartString) {
          initLocalStorageFromRedux(
            localStorageCartKey,
            currentReduxCartString
          );
        } else {
          console.log(
            "The strings are equal, no need to update the local storage"
          );
        }
      } else {
        const cartValLength = JSON.parse(cartVal).cartItems.length;

        if (cartValLength !== 0) {
          initLocalStorageFromRedux(
            localStorageCartKey,
            currentReduxCartString
          );
        }
      }
    }
    return () => {
      isMounted = false;
    };
  }, [cartItems]);
};

export default useUpdateCartInLocalStorage;
