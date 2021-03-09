import {
  REMOVE_RECOMMENDATION,
  FETCH_RECOMMENDATION_SUCCESS,
  CLEAR_ALL_RECOMMENDATIONS,
} from "../types/actionTypes";
import { productInList } from "../../utilityFns/utils";

const returnRecommendationsOnRemove = (recommendationItems, product) => {
  let updatedRecommendationItems;
  const porductFromRecommendations = productInList(
    recommendationItems,
    product
  );

  if (porductFromRecommendations) {
    updatedRecommendationItems = recommendationItems.filter(
      (prod) => prod.id !== porductFromRecommendations.id
    );
  } else {
    updatedRecommendationItems = [...recommendationItems];
  }
  return updatedRecommendationItems;
};

const returnRecommenderItemsOnAdd = (recommendations) => {
  let updatedRecommendationItems = [...recommendations];
  return updatedRecommendationItems;
};

const INITIAL_STATE = [];
const recommendationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_ALL_RECOMMENDATIONS:
      return INITIAL_STATE;
    case REMOVE_RECOMMENDATION:
      return returnRecommendationsOnRemove(state, action.product);
    case FETCH_RECOMMENDATION_SUCCESS:
      return returnRecommenderItemsOnAdd(action.recommendation);
    default:
      return state;
  }
};

export default recommendationsReducer;
