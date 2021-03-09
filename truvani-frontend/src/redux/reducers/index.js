import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducder";
import productsReducer from "./productsReducer";
import recommendationsReducer from "./recommendationsReducer";
import recommenderErrorReducer from "./recommenderErrorReducer";
import recommendationLoadingReducer from "./recommendationLoadingReducer";
import rewardsReducer from "./rewardsReducer";

const rootReducer = combineReducers({
  cartItems: cartReducer,
  error: errorReducer,
  loading: loadingReducer,
  products: productsReducer,
  recommenderItems: recommendationsReducer,
  recommenderErrro: recommenderErrorReducer,
  recommendationLoading: recommendationLoadingReducer,
  rewards: rewardsReducer,
});

export default rootReducer;
