import axios from "axios";
import {
  FETCH_RECOMMENDATION_FAILED,
  REMOVE_RECOMMENDATION,
  FETCH_RECOMMENDATION_SUCCESS,
  CLEAR_ALL_RECOMMENDATIONS,
  FETCH_RECOMMENDATION_PENDING,
} from "../types/actionTypes";
import { recommendsUrl } from "../../config/appConfig";

const fetchRecommendations = (query) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_RECOMMENDATION_PENDING });
    try {
      let res;
      if (query && query !== "") {
        res = await axios.get(recommendsUrl + `?q=${query}`);
      }

      const { data } = res;
      if (data) {
        dispatch({
          type: FETCH_RECOMMENDATION_SUCCESS,
          recommendation: data,
        });
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: FETCH_RECOMMENDATION_FAILED, err: message });
    }
  };
};

const clearRecomendations = () => ({
  type: CLEAR_ALL_RECOMMENDATIONS,
});

const removeRecommendation = (id) => ({
  type: REMOVE_RECOMMENDATION,
  id,
});

export { fetchRecommendations, clearRecomendations, removeRecommendation };
