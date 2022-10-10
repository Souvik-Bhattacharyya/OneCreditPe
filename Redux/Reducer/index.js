import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistCombineReducers} from "redux-persist";
import Reducer from "./reducerFunctios";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  //   whitelist:[]
};
const rootReducer = persistCombineReducers(persistConfig, Reducer);

export default rootReducer;
