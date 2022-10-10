import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./Reducer";

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);
const persistor = persistStore(store);
export {store, persistor};
