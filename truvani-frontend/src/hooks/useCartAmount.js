import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRewards } from "../redux/actions/rewardActions";
const getCartAmount = (cartItems) => {
  let totalAmount = 0;
  cartItems.forEach((cartItem) => {
    const { qty, price } = cartItem;
    const currentAmount = price * qty;
    totalAmount += currentAmount;
  });
  return totalAmount.toFixed(2);
};

const useCartAmount = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    let totalCartAmount;
    if (cartItems.length > 0) {
      totalCartAmount = getCartAmount(cartItems);
      if (totalCartAmount < 99) {
        dispatch(updateRewards("Unearned"));
        console.log("Unearned", totalCartAmount);
      } else if (totalCartAmount > 99 && totalCartAmount < 149) {
        dispatch(updateRewards("Free Shipping"));
      } else if (totalCartAmount > 149) {
        dispatch(updateRewards("Free Shipping and Totebag"));
      } else {
        console.log("What are you doing here", totalCartAmount);
      }
    }
  }, [cartItems, dispatch]);
};

export default useCartAmount;
