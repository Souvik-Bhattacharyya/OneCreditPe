import * as React from "react";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginStackScreen from "./LoginStackScreen";
import AuthTabNavigation from "./AuthTabNavigation";

const Tab = createBottomTabNavigator();

function NonAuthStackNavigator() {
  const navigation = useNavigation();

  // React.useEffect(() => {
  //   if (auth.clientToken)
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 0,
  //         routes: [
  //           {
  //             name: "HomeScreens",
  //           },
  //         ],
  //       }),
  //     );
  //   else
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 0,
  //         routes: [
  //           {
  //             name: "LoginScreens",
  //           },
  //         ],
  //       }),
  //     );
  // }, [auth.clientToken]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreens"
        component={AuthTabNavigation}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
      <Tab.Screen
        name="LoginScreens"
        component={LoginStackScreen}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
    </Tab.Navigator>
  );
}

export default NonAuthStackNavigator;
