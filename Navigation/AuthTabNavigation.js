import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationAction } from "@react-navigation/native";
import { CustomerHome, Customer,Cashbook, CashEntries, ViewReport, CustomerModal, NewCustomer, LoanSection, Settings } from "../Screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function LogoTitle() {
  return (
    <Image
      style={{ width: 150, height: 50 }}
      source={require('../Assets/Logos/Logo.png')}
    />
  );
}

const CustomerStack = ({ navigation }) => {
  // const resetAction = NavigationAction.reset({
  //   index: 0,
  //   routes: [
  //     {
  //       name: "Modal",
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   navigation.dispatch(resetAction)
  // });

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen component={CustomerModal} name="Modal" />
      <Stack.Screen component={NewCustomer} name="NewCustomer" />
      <Stack.Screen component={Customer} name="CustomerHistory" />
    </Stack.Navigator>
  )
}
const CashBookStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen component={Cashbook} name="CashBookHome" />
      <Stack.Screen component={ViewReport} name="ViewReport" />
      <Stack.Screen component={CashEntries} name="CashEntries" />
    </Stack.Navigator>
  )
}

const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen component={CustomerHome} name="CustomerHome"
        options={{
          headerStyle: {
            backgroundColor: '#fff',
            height: 100
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />
        }}
      />
    </Stack.Navigator>
  )
}


const AuthTabNavigation = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: '#20409a', tabBarHideOnKeyboard: true, tabBarShowLabel: true, headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreenStack} options={{
        tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
      }} />
      <Tab.Screen name="Customer" component={CustomerStack} options={{
        tabBarIcon: ({ color }) => <FontAwesome name="user-plus" size={24} color={color} />
      }} />
      <Tab.Screen name="CashBook" component={CashBookStack}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="book" size={24} color={color} />
        }} />
      <Tab.Screen name="More" component={Settings}
        options={{
          tabBarIcon: ({ color }) => <Icon name="menu-fold" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTabNavigation;