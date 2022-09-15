import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {CustomerHome, Cashbook, CashEntries, ViewReport} from "../Screens";

const Tab = createBottomTabNavigator();
const AuthTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={CustomerHome} />
      <Tab.Screen name="Customer" component={Cashbook} />
      <Tab.Screen name="CashBook" component={CashEntries} />
      <Tab.Screen name="More" component={ViewReport} />
    </Tab.Navigator>
  );
};

export default AuthTabNavigation;
