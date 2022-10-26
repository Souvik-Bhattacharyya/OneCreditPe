import {
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import metrics from "../Constants/metrics";
import UserTransaction from "./UserTransaction";

const CustomerHome = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <UserTransaction />
      <UserTransaction />
    </ScrollView>
  );
};

export default CustomerHome;
