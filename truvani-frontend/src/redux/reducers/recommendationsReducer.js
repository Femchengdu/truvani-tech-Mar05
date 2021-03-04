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

const returnRecommenderItemsOnAdd = (recommendationItems, product) => {
  let updatedRecommendationItems;
  const porductFromRecommendations = productInList(
    recommendationItems,
    product
  );
  console.log("test returned recom :", product, porductFromRecommendations);
  if (!porductFromRecommendations) {
    updatedRecommendationItems = [...recommendationItems, { ...product }];
  } else {
    updatedRecommendationItems = [...recommendationItems];
  }
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
      return returnRecommenderItemsOnAdd(state, action.recommendation);
    default:
      return state;
  }
};

export default recommendationsReducer;
