import { useEffect } from "react";
import { clearRecomendations } from "../redux/actions/recommendActions";
import { useDispatch, useSelector } from "react-redux";

const useClearRecommendation = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    return () => {
      if (cartItems.length === 0) {
        // TODO we never get to this code
        // Do you still need it here?
        console.log("Cart items are :", cartItems.length);
        dispatch(clearRecomendations());
      }
    };
  }, [dispatch, cartItems.length]);
};

export default useClearRecommendation;
