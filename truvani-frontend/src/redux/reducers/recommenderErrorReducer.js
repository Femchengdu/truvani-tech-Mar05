import {
  FETCH_RECOMMENDATION_FAILED,
  FETCH_RECOMMENDATION_SUCCESS,
} from "../types/actionTypes";
const INITIAL_STATE = false;
const recommenderErrorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATION_SUCCESS:
      return false;
    case FETCH_RECOMMENDATION_FAILED:
      return true;
    default:
      return state;
  }
};

export default recommenderErrorReducer;
