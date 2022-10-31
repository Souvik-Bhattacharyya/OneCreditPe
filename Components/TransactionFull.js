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
import Api from "../Services";
import {useSelector} from "react-redux";
import {Cashbook} from "../Screens";
const width = Dimensions.get("window").width;

const TransactionFull = () => {
  const [cashOutDetails, setCashOutDetails] = useState([]);
  const [cashInDetails, setCashInDetails] = useState([]);
  useEffect(() => {
    getCashOut();
  }, []);
  useEffect(() => {
    getCashIn();
  }, []);

  const getCashOut = async () => {
    try {
      const response = await Api.get("/auth/today-cashbook-out");
      if (response.data.status == 200) {
        console.log("cash out data :", response.data.data);
        setCashOutDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCashIn = async () => {
    try {
      const response = await Api.get("/auth/today-cashbook-in");
      if (response.data.status == 200) {
        console.log("cash in data :", response.data.data);
        setCashInDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          {cashOutDetails.map(obj => (
            <CashOut object={obj} />
          ))}

          {cashInDetails.map(obj => (
            <CashIn object={obj} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionFull;
