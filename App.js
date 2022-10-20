import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {NonAuthStackNavigator} from "./Navigation";

// Redux
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import {store, persistor} from "./Redux/store";
import {Provider as PaperProvider} from "react-native-paper";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <NonAuthStackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
