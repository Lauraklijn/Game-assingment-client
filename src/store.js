import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
//import userReducer from "./reducers/user-reducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
const store = createStore(enhancer);

export default store;
