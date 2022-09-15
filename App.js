import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {NonAuthStackNavigator} from "./Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <NonAuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;
