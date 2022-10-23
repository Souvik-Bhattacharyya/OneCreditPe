import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistCombineReducers} from "redux-persist";
import AuthReducer from "./authReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const Reducer = {
  auth: AuthReducer,
};
const rootReducer = persistCombineReducers(persistConfig, Reducer);

export default rootReducer;
