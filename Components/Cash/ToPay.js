import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import moment from "moment";

const CashOut = ({trnsDetails}) => {
  console.log(trnsDetails);
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
              fontWeight: "600",
              marginBottom: metrics.verticalScale(5),
            }}>
            {trnsDetails?.amount}
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "800"}}>
            Advance
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
            {moment(trnsDetails?.date_time).format("Do MMM YY")}
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "500"}}>
            Balance- Rs. 4,220
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "500"}}>
            {trnsDetails?.payment_details}
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 7,
          }}>
          {trnsDetails?.attachment !== null && (
            <TouchableOpacity>
              <IconMat name="attachment" color={"#0a5ac9"} size={24} />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Icon
              name="delete"
              color={"red"}
              size={16}
              style={{marginVertical: 3}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CashOut;
