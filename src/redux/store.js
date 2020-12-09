import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./reducers";
const rootReducer = combineReducers({
  productReducer: productReducer,
});

const store = createStore(productReducer, composeWithDevTools());
export default store;
