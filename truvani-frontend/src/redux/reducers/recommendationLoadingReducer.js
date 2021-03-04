import {
  FETCH_RECOMMENDATION_FAILED,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_RECOMMENDATION_PENDING,
} from "../types/actionTypes";
const INITIAL_STATE = false;
const recommendationLoadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATION_PENDING:
      return true;
    case FETCH_RECOMMENDATION_FAILED:
    case FETCH_RECOMMENDATION_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default recommendationLoadingReducer;
