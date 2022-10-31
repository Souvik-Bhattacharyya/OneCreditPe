import {View, Text, Image, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import moment from "moment";

const CashOut = ({object}) => {
  const {amount, created_at, detais} = object;
  const date = moment(created_at).format("Do MMM YY, h:mm a");
  return (
    <View>
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          paddingHorizontal: metrics.horizontalScale(5),
          paddingVertical: metrics.verticalScale(10),
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderColor: "#c6c6c6",
          width: "100%",
        }}>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <IconMat name="account-arrow-right" color={"#F31B24"} size={32} />
        </View>
        <View style={{width: "20%"}}>
          <Text
            style={{
              color: "#F31B24",
              fontSize: 18,
              fontWeight: "800",
              marginBottom: metrics.verticalScale(5),
            }}>
            {object.amount}
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "800"}}>
            Cash Out
          </Text>
        </View>
        <View style={{width: "45%"}}>
          <Text
            style={{
              color: "#000",
              fontSize: 14,
              fontWeight: "600",
              marginBottom: metrics.verticalScale(5),
            }}>
            {date}
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "500"}}>
            Balance- Rs. 4,220
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "500"}}>
            details...
            {/* {detais} */}
          </Text>
        </View>
        <View style={{width: "10%"}}>
          <TouchableOpacity>
            <IconMat name="image" color={"#0a5ac9"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CashOut;
