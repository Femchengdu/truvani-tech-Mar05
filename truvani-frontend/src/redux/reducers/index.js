import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducder";
import productsReducer from "./productsReducer";
import recommendationsReducer from "./recommendationsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  error: errorReducer,
  loading: loadingReducer,
  products: productsReducer,
  recommendations: recommendationsReducer,
});

export default rootReducer;
