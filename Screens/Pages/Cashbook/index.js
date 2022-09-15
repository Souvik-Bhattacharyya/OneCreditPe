import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import TransactionEmpty from "../../../Components/TransactionEmpty";
import TransactionFull from "../../../Components/TransactionFull";

const Cashbook = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: metrics.horizontalScale(20),
      backgroundColor: "#E8EEFF",
      paddingVertical: metrics.verticalScale(15),
      position: "relative",
    },
    card: {
      width: "100%",
      backgroundColor: "#fff",
      paddingVertical: metrics.verticalScale(10),
      borderRadius: 6,
    },
    cardBody: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    boxOne: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
      paddingVertical: metrics.verticalScale(15),
      borderRightWidth: 2,
      borderColor: "#ccc",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: metrics.horizontalScale(40),
      paddingVertical: metrics.verticalScale(15),
      // backgroundColor: '#ccc'
    },
    cardBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      backgroundColor: "dodgerblue",
      paddingVertical: metrics.verticalScale(6),
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    cashBtn: {
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 50,
    },
    btnTxt: {
      fontSize: 22,
      fontWeight: "800",
      color: "#fff",
    },
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#1790FF",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}>
                Cash In Hand
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#12CE12",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}>
                Today's Income
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cardBtn}>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontWeight: "700",
                marginRight: 12,
                fontFamily: "Poppins",
              }}>
              View Report
            </Text>
            <Icon name="doubleright" color={"#fff"} size={16} />
          </TouchableOpacity>
        </View>
      </View>

      <TransactionFull />

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            position: "absolute",
            bottom: 20,
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            style={[styles.cashBtn, {backgroundColor: "#EB707C"}]}>
            <Text style={styles.btnTxt}>Cash Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cashBtn, {backgroundColor: "#85D098"}]}>
            <Text style={styles.btnTxt}>Cash Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cashbook;
