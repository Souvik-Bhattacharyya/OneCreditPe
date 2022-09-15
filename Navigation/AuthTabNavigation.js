import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {} from "../Screens"

const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Customer"
        component={DrawerNavigator}
      />
      <Tab.Screen
        name="CashBook"
        component={DrawerNavigator}
      />
      <Tab.Screen
        name="More"
        component={}
      />
    </Tab.Navigator>
  );
}

export default AuthTabNavigation;
