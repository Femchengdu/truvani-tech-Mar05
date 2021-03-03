import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchProducts());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);
};

export default useFetchProducts;
