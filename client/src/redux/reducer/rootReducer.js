import { combineReducers } from "redux";

import storeReducer from "./storeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  store: storeReducer,
  user: userReducer,
});

export default rootReducer;
