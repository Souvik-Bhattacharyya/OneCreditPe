import * as React from "react";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NonAuthStackNavigator() {
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  React.useEffect(() => {
    if (auth.clientToken)
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "HomeScreens",
            },
          ],
        }),
      );
    else
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "LoginScreens",
            },
          ],
        }),
      );
  }, [auth.clientToken]);

  const LoginStackScreen = ()=>{
    return (
      <Stack.Navigator>
        <
      </Stack.Navigator>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="LoginScreens"
        component={LoginStackScreen}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
      <Tab.Screen
        name="HomeScreens"
        component={DrawerNavigator}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
    </Tab.Navigator>
  );
}

export default NonAuthStackNavigator;
