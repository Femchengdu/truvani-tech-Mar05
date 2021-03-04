import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducder";
import productsReducer from "./productsReducer";
import recommendationsReducer from "./recommendationsReducer";
import recommenderErrorReducer from "./recommenderErrorReducer";
import recommendationLoadingReducer from "./recommendationLoadingReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  error: errorReducer,
  loading: loadingReducer,
  products: productsReducer,
  recommendations: recommendationsReducer,
  recommenderErrro: recommenderErrorReducer,
  recommendationLoading: recommendationLoadingReducer,
});

export default rootReducer;
