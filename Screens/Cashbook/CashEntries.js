import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";

const CashEntries = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter Amount"
          placeholderTextColor={"#828282"}
          style={styles.textInput}
        />
        <Icon name="rupee" color={"#828282"} style={styles.icon} size={26} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: metrics.verticalScale(20),
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: "#0A5AC9",
          }}>
          <Text style={styles.btnTxt}>Online Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: "#fff",
          }}>
          <Text style={[styles.btnTxt, {color: "#0A5AC9"}]}>
            Offline Payment
          </Text>
        </TouchableOpacity>
      </View>



      <View>
        <TextInput
          placeholder="Enter Payment Details"
          placeholderTextColor={"#828282"}
          style={[
            styles.textInput,
            { height: 200, textAlignVertical: "top", paddingHorizontal: 20 },
          ]}
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: metrics.verticalScale(20),
          alignSelf: "center",
          width: "100%",
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#EB707C",
            borderRadius: 50,
          }}>
          <Text style={styles.btnTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CashEntries;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.horizontalScale(20),
    paddingVertical: metrics.verticalScale(20),
    backgroundColor: "#E8EEFF",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: "#000",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    top: "30%",
    left: 25,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
