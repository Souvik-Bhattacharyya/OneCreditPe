import * as React from "react";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginStackScreen from "./LoginStackScreen";
import AuthLoadingStack from "./AuthTabNavigation";

const Tab = createBottomTabNavigator();

function NonAuthStackNavigator() {
  // const navigation = useNavigation();
  const auth = useSelector(state => state.auth);

  // React.useEffect(() => {
  //   console.log(auth.clientToken);
  //   if (auth.clientToken) {
  //     // navigation.navigate("HomeScreens");
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
  //   } else
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
      {!auth.clientToken ? (
        <Tab.Screen
          name="LoginScreens"
          component={LoginStackScreen}
          options={{
            tabBarStyle: {display: "none"},
          }}
        />
      ) : (
        <Tab.Screen
          name="HomeScreens"
          component={AuthLoadingStack}
          options={{
            tabBarStyle: {display: "none"},
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default NonAuthStackNavigator;
