import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import {useNavigation} from "@react-navigation/native";
import moment from "moment/moment";

const ToPayUser = ({object}) => {
  const navigation = useNavigation();
  const {customer_id, amount, date_time, attachment} = object;
  const date = moment(date_time).format("Do MMM YY, hh:mm A");
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetails")}
        style={styles.contactBox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            width: "50%",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}>
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
              ...
            </Text>
          </View>
          <View style={{flexDirection: "column", marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: "700", color: "#333"}}>
              ...
            </Text>
            <Text style={{fontSize: 12, fontWeight: "400", color: "#828282"}}>
              {date}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            alignItems: "flex-end",
            backgroundColor: "#fff",
          }}>
          <Text style={{fontSize: 18, fontWeight: "800", color: "#ED1C24"}}>
            {amount}
          </Text>
          <Text style={{fontSize: 12, fontWeight: "400", color: "#828282"}}>
            To Pay
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ToPayUser;

const styles = StyleSheet.create({
  contactBox: {
    flexDirection: "row",
    paddingHorizontal: metrics.horizontalScale(15),
    paddingVertical: metrics.verticalScale(15),
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderColor: "#c6c6c6",
    width: "100%",
    justifyContent: "space-between",
  },
});
