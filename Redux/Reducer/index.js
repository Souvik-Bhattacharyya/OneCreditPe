import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistCombineReducers} from "redux-persist";
import AuthReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const Reducer = {
  auth: AuthReducer,
  notification: notificationReducer,
};
const rootReducer = persistCombineReducers(persistConfig, Reducer);

export default rootReducer;
