import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {NonAuthStackNavigator} from "./Navigation";
import SplashScreen from "react-native-splash-screen";
import {useDoubleBackPressExit} from "./Screens/Hooks/useDoubleBackPressExit";
import {BackHandler, Alert} from "react-native";

// Redux
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import {store, persistor} from "./Redux/store";
import {Provider as PaperProvider} from "react-native-paper";
import {SnackBar} from "./Screens";
const App = () => {
  // const backAction = () => {
  //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel",
  //     },
  //     {text: "YES", onPress: () => BackHandler.exitApp()},
  //   ]);
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", backAction);

  //   return () =>
  //     BackHandler.removeEventListener("hardwareBackPress", backAction);
  // }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useDoubleBackPressExit(() => {
    BackHandler.exitApp();
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <NonAuthStackNavigator />
            <SnackBar />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
