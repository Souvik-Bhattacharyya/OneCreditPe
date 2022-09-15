import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login, OtpScreen, Welcome} from "../Screens";

const Stack = createNativeStackNavigator();

const LoginStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Welcome} name="welcome" />
      <Stack.Screen component={Login} name="login" />
      <Stack.Screen component={OtpScreen} name="otp" />
    </Stack.Navigator>
  );
};

export default LoginStackScreen;
