import axios from "axios";
import * as types from "../types/actionTypes";
import { recommendsUrl } from "../../config/appConfig";

const fetchRecommendations = (product) => {
  return async (dispatch, getState) => {
    dispatch({ type: types.FETCH_RECOMMENDATIONS_PENDING });
    try {
      const res = await axios.get(recommendsUrl);
      const { data } = res;
      if (data) {
        dispatch({
          type: types.FETCH_RECOMMENDATIONS_SUCCESS,
          recommendations: data,
        });
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.FETCH_RECOMMENDATIONS_FAILED, err: message });
    }
  };
};

const clearRecomendations = () => ({
  type: types.CLEAR_RECOMMENDATIONS,
});

const removeRecommendation = (id) => ({
  type: types.REMOVE_RECOMMENDATION,
  id,
});

export { fetchRecommendations, clearRecomendations, removeRecommendation };
