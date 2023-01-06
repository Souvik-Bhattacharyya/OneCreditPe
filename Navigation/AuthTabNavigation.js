import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import User from "react-native-vector-icons/FontAwesome";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationAction} from "@react-navigation/native";
import {
  HomePage,
  Customer,
  Cashbook,
  CashEntries,
  ViewReport,
  NewCustomer,
  LoanSection,
  Settings,
  AddContact,
  SetCollectionDate,
  Supplier,
  CommonHeader,
  UserDetails,
  ToPayUser,
  ToGetUser,
  CustomerEntries,
  UserProfile,
  PrivacyAndPolicy,
  TermsAndConditions,
  LanguageScreen,
  Faq,
  Ans,
  InviteFriendModal,
  PartiesHeader,
  LoanDetails,
  AddDetails,
  BusinessBank,
  AddBankDetails,
  AddBusinessDetails,
  FindIfsc,
  AddPicture,
  AddAdhaarDetails,
  Loading,
  CusSupProfile,
  ToGet,
  Picture,
  PanDetails,
  RentHome,
  AddRentDetails,
  RentAgreement,
  RentPanUpload,
  MonthPeDetails,
  RentPeMode,
  RentPeSuccess,
  ShowRentDetails,
<<<<<<< HEAD
  SelectLoanAmountAndInterest,
  Success,
  NotWorking,
=======
  MonthlyRent,
  RaiseTicket,
  ViewAllTickets,
>>>>>>> 940dae4e579b5b2d7fa577e4b244437f7ba2e0e9
} from "../Screens";
import Loan from "../Screens/loanSection/Loan";
// import PanDetails from "../Screens/loanSection/PanDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 150, height: 50}}
      source={require("../Assets/Logos/Logo.png")}
    />
  );
}

const CustomerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0A5AC9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        component={Customer}
        name="Customer"
        options={{headerShown: false}}
      />
      <Stack.Screen component={SetCollectionDate} name="Set Collection Date" />
      <Stack.Screen
        component={NewCustomer}
        name="NewCustomer"
        options={{
          headerTitle: "Add New Customer",
        }}
      />
      <Stack.Screen
        component={CustomerEntries}
        name="CustomerEntries"
        options={{
          headerTitle: "Customer Entries",
        }}
      />
      <Stack.Screen component={AddContact} name="AddContact" />
      <Stack.Screen component={ToPayUser} name="ToPayUser" />
      <Stack.Screen component={ToGetUser} name="ToGetUser" />

      <Stack.Screen
        component={UserDetails}
        name="UserDetails"
        options={{
          header: ({navigation}) => {
            <PartiesHeader ScreenNavigation={navigation} />;
          },
        }}
      />
      <Stack.Screen component={CommonHeader} name="CommonHeader" />

      <Stack.Screen
        component={CusSupProfile}
        name="CusSupProfile"
        options={{
          headerTitle: "Customer Profile",
        }}
      />
    </Stack.Navigator>
  );
};

const SupplierStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0A5AC9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        component={Supplier}
        name="Supplier"
        options={{headerShown: false}}
      />
      <Stack.Screen component={SetCollectionDate} name="Set Collection Date" />
      <Stack.Screen
        component={NewCustomer}
        name="NewCustomer"
        options={{
          headerTitle: "Add New Supplier",
        }}
      />
      <Stack.Screen component={AddContact} name="AddContact" />
      <Stack.Screen component={CommonHeader} name="CommonHeader" />
      <Stack.Screen component={ToPayUser} name="ToPayUser" />
      <Stack.Screen component={ToGetUser} name="ToGetUser" />
      <Stack.Screen
        component={UserDetails}
        name="UserDetails"
        options={{
          header: ({navigation}) => {
            <PartiesHeader navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        component={CustomerEntries}
        name="CustomerEntries"
        options={{
          headerTitle: "Customer Entries",
        }}
      />
      <Stack.Screen
        component={CusSupProfile}
        name="CusSupProfile"
        options={{
          headerTitle: "Supplier Profile",
        }}
      />
    </Stack.Navigator>
  );
};

const PartiesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={CustomerStack}
        name="CustomerStack"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SupplierStack}
        name="SupplierStack"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CashBookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0A5AC9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Cashbook}
        name="Cash Book"
      />
      <Stack.Screen component={ViewReport} name="View Report" />
      <Stack.Screen component={CashEntries} name="CashEntries" />
    </Stack.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      cardShadowEnabled
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0A5AC9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        component={HomePage}
        name="CustomerHome"
      />
      <Stack.Screen component={SetCollectionDate} name="Set Collection Date" />
      <Stack.Screen component={CommonHeader} name="CommonHeader" />
      <Stack.Screen
        component={LoanScreenStack}
        name="LoanScreenStack"
        options={{headerTitle: "Easy Loan", headerShown: false}}
      />

      {/* <Stack.Screen
        component={RentPeScreenStack}
        name="RentPeScreenStack"
        options={{headerTitle: "Easy Loan"}}
      /> */}

      <Stack.Screen
        component={RentHome}
        name="RentHome"
        options={{
          headerTitle: "RentPe Home",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={AddRentDetails}
        name="AddRentDetails"
        options={{
          headerTitle: "Owener Info",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={RentAgreement}
        name="RentAgreement"
        options={{
          headerTitle: "Owener Info",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={RentPanUpload}
        name="RentPanUpload"
        options={{
          headerTitle: "Owener Info",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={MonthPeDetails}
        name="MonthPeDetails"
        options={{
          headerTitle: "Month's Payment Details",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={RentPeMode}
        name="RentPeMode"
        options={{
          headerTitle: "RentPe",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={RentPeSuccess}
        name="RentPeSuccess"
        options={{
          headerTitle: "RentPe",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={ShowRentDetails}
        name="ShowRentDetails"
        options={{
          headerTitle: "RentPe",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={MonthlyRent}
        name="MonthlyRent"
        options={{
          headerTitle: "Month's Payment Details",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
// const RentPeScreenStack = () => {
//   return (
//     <Stack.Navigator
//       cardShadowEnabled
//       screenOptions={{
//         headerTitleAlign: "center",
//         headerStyle: {
//           backgroundColor: "#0A5AC9",
//         },
//         // headerTitle: "Easy Loan",
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}>
//       <Stack.Screen
//         component={RentHome}
//         name="RentHome"
//         options={{
//           headerTitle: "RentPe Home",
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
const LoanScreenStack = () => {
  return (
    <Stack.Navigator
      cardShadowEnabled
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0A5AC9",
        },
        // headerTitle: "Easy Loan",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        component={Loan}
        name="EasyLoan"
        options={{
          headerTitle: "Loan Section",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={LoanDetails}
        name="LoanDetails"
        options={{
          headerTitle: "Loan Section",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={AddDetails}
        name="AddDetails"
        options={{
          title: "Complete Your KYC",
          // headerShown: false,
        }}
      />

      <Stack.Screen
        component={AddBankDetails}
        name="AddBankDetails"
        options={{
          headerTitle: "Add Your bank account",
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={FindIfsc}
        name="FindIfsc"
        options={{
          headerTitle: "Add Your bank account",
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={AddPicture}
        name="AddPicture"
        options={{
          headerTitle: "Add Your Picture",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={AddAdhaarDetails}
        name="AddAdhaarDetails"
        options={{
          headerTitle: "Add Your Aaddhar",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={SelectLoanAmountAndInterest}
        name="SelectLoanAmountAndInterest"
        options={{
          headerTitle: "Select Loan Amount and Interest",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={Success}
        name="Success"
        options={{
          headerTitle: "Documents Submitted",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={NotWorking}
        name="NotWorking"
        options={{
          headerTitle: "Documents Not Submitted",
          headerShown: true,
        }}
      />
      {/* <Stack.Screen component={SetCollectionDate} name="Set Collection Date" /> */}
      {/* <Stack.Screen component={CommonHeader} name="CommonHeader" /> */}
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator
      cardShadowEnabled
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0A5AC9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        component={Settings}
        name="Settings"
      />
      <Stack.Screen component={UserProfile} name="UserProfile" />
      <Stack.Screen component={PrivacyAndPolicy} name="Privacy And Policy" />
      <Stack.Screen
        component={TermsAndConditions}
        name="Terms And Conditions"
      />
      <Stack.Screen component={LanguageScreen} name="Language" />
      <Stack.Screen
        component={Faq}
        name="faq"
        options={{
          title: "FAQ Listing Questions",
        }}
      />
      <Stack.Screen
        component={Ans}
        name="Ans"
        options={{
          title: "FAQ Listing Ans",
        }}
      />
      <Stack.Screen
        component={RaiseTicket}
        name="RaiseTicket"
        options={{
          title: "Raise Ticket",
        }}
      />
      <Stack.Screen
        component={ViewAllTickets}
        name="ViewAllTickets"
        options={{
          title: "All Tickets",
        }}
      />
      <Stack.Screen
        component={AddDetails}
        name="AddDetails"
        options={{
          headerTitle: "Complete Your KYC",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={BusinessBank}
        name="BusinessBank"
        options={{
          headerTitle: "BusinessBank",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={AddBankDetails}
        name="AddBankDetails"
        options={{
          headerTitle: "Add Your Bank Account",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={AddBusinessDetails}
        name="AddBusinessDetails"
        options={{
          headerTitle: "Add Your Business Account",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={AddPicture}
        name="AddPicture"
        options={{
          headerTitle: "Add Your Picture",
          headerShown: true,
        }}
      />
      <Stack.Screen
        component={AddAdhaarDetails}
        name="AddAdhaarDetails"
        options={{
          headerTitle: "Add Your Aaddhar",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={Picture}
        name="Picture"
        options={{
          headerTitle: "Add Business Picture",
          headerShown: true,
        }}
      />

      <Stack.Screen
        component={PanDetails}
        name="AddPanDetails"
        options={{
          headerTitle: "Add Your Pan",
          headerShown: true,
        }}
      />

      <Stack.Screen component={InviteFriendModal} name="InviteFriendModal" />
    </Stack.Navigator>
  );
};

const AuthLoadingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Loading} name="loading" />

      <Stack.Screen
        name="AuthNavigation"
        component={AuthTabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AuthTabNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarInactiveTintColor: "#828282",
        tabBarStyle: {
          paddingVertical: 10,
          height: 60,
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 12,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={32}
              color={color}
              style={{marginTop: 2}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Parties"
        component={PartiesStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <User
              name={focused ? "user" : "user-o"}
              size={26}
              color={color}
              style={{marginTop: 2}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cashbook"
        component={CashBookStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? "book-account" : "book-account-outline"}
              size={24}
              color={color}
              style={{marginTop: 2}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="menu-fold"
              size={24}
              color={color}
              style={{marginTop: 2}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthLoadingStack;
