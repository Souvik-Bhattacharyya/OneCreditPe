import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistCombineReducers} from "redux-persist";
// import AuthReducer from "./authReducer";
import registerReducer from "./registerReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const Reducer = {
  register: registerReducer,
};
const rootReducer = persistCombineReducers(persistConfig, Reducer);

export default rootReducer;
