import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import {useNavigation} from "@react-navigation/native";
import {SetDateModal} from "../../Screens";
const ToPay = ({showModal}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.contactBox}>
        <View
          style={{
            width: 42,
            height: 42,
            backgroundColor: "#c3e2ff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
          }}>
          <Text style={{fontSize: 24, fontWeight: "900", color: "#0A5AC9"}}>
            A
          </Text>
        </View>
        <View style={{paddingHorizontal: metrics.horizontalScale(20)}}>
          <Text style={{fontSize: 18, fontWeight: "600", color: "#333"}}>
            Asish Kr Das
          </Text>
          <Text style={{fontSize: 14, fontWeight: "400", color: "#828282"}}>
            +91-6502545585
          </Text>
        </View>
        <View style={{paddingHorizontal: metrics.horizontalScale(20)}}>
          <Text style={{fontSize: 18, fontWeight: "800", color: "#ED1C24"}}>
            ₹100
          </Text>
          <Text style={{fontSize: 12, fontWeight: "400", color: "#828282"}}>
            To Pay
          </Text>
        </View>
        <TouchableOpacity
          style={{position: "absolute", right: 15}}
          onPress={showModal}>
          <Icon name="account-cash" color={"#0A5AC9"} size={28} />
        </TouchableOpacity>
      </View>
      {/* <SetDateModal visible={visible} hideModal={hideModal} /> */}
    </View>
  );
};

export default ToPay;

const styles = StyleSheet.create({
  contactBox: {
    flexDirection: "row",
    paddingHorizontal: metrics.horizontalScale(20),
    paddingVertical: metrics.verticalScale(15),
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#c6c6c6",
    width: "100%",
  },
});
