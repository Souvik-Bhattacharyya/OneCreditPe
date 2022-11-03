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

const TransactionFull = ({todayEntryDetails}) => {
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
          {todayEntryDetails.map((obj, index) =>
            obj.cb_tns_type == "in" ? (
              <CashIn object={obj} key={index} />
            ) : (
              <CashOut object={obj} key={index} />
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionFull;
