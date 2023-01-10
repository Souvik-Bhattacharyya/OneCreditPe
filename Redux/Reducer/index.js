import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistCombineReducers} from "redux-persist";
import AuthReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
import rentReducer from "./rentReducer";

import transactionReducer from "./transactionReducer";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const Reducer = {
  auth: AuthReducer,
  notification: notificationReducer,
  rent: rentReducer,
  transaction: transactionReducer,
};
const rootReducer = persistCombineReducers(persistConfig, Reducer);

export default rootReducer;
