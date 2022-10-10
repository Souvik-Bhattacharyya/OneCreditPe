import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {NonAuthStackNavigator} from "./Navigation";

// Redux
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import {store, persistor} from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NonAuthStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
