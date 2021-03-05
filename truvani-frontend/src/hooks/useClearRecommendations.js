import { useEffect } from "react";
import { clearRecomendations } from "../redux/actions/recommendActions";
import { useDispatch } from "react-redux";
const useClearRecommendation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearRecomendations());
    };
  }, [dispatch]);
};

export default useClearRecommendation;
