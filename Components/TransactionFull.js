import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import CashIn from "./Cash/CashIn";
import CashOut from "./Cash/CashOut";
import {useSelector} from "react-redux";
import {Cashbook} from "../Screens";

const width = Dimensions.get("window").width;

const TransactionFull = ({cashOutDetails, cashInDetails}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      position: "relative",
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{width}}>
          {cashOutDetails.map((obj, index) => (
            <CashOut object={obj} index={index} />
          ))}

          {cashInDetails.map((obj, index) => (
            <CashIn object={obj} index={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionFull;
