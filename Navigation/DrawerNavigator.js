import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = ({navigation}) => {
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
};

export default DrawerNavigator;
