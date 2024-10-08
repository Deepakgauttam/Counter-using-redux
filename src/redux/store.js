import { createStore } from "redux";
import RootReducer from "./reducers/index";

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
); 
export default store;