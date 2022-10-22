import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Loading, Login, OtpScreen, Welcome} from "../Screens";

const Stack = createNativeStackNavigator();

const LoginStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Welcome} name="welcome" />
      <Stack.Screen component={Login} name="login" />
      <Stack.Screen component={OtpScreen} name="otp" />
      <Stack.Screen component={Loading} name="loading" />
    </Stack.Navigator>
  );
};

export default LoginStackScreen;
