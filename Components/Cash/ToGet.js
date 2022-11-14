import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
import moment from "moment";

const CashIn = ({ object }) => {
  const { amount, date_time, payment_details } = object;
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
          <IconMat name="account-arrow-left" color={"#12ce12"} size={32} />
        </View>
        <View style={{ width: "20%" }}>
          <Text
            style={{
              color: "#12ce12",
              fontSize: 18,
              fontWeight: "600",
              marginBottom: metrics.verticalScale(5),
            }}>
            {amount}
          </Text>
          <Text style={{ color: "#000", fontSize: 12, fontWeight: "800" }}>
            To Get
          </Text>
        </View>
        <View style={{ width: "45%" }}>
          <Text
            style={{
              color: "#000",
              fontSize: 14,
              fontWeight: "600",
              marginBottom: metrics.verticalScale(5),
            }}>
            {moment(date_time).format("Do MMM YY - hh:mm A")}
          </Text>
          <Text style={{ color: "#828282", fontSize: 12, fontWeight: "800" }}>
            Balance- Rs. 4,220
          </Text>
          <Text style={{ color: "#111", fontSize: 12, fontWeight: "600" }}>
            {payment_details}
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            flexDirection: 'column',
            alignItems: 'center',
            // backgroundColor: '#ddd',
            paddingHorizontal: 7
          }}>
          {/* {object.attachments === "null" && ( */}
            <TouchableOpacity>
              <IconMat
                name="attachment"
                color={"#0a5ac9"}
                size={24}
              />
            </TouchableOpacity>
          {/* )} */}

          <TouchableOpacity
            // onPress={createTwoButtonAlert}
            >
            <Icon
              name="delete"
              color={"red"}
              size={16}
              style={{ marginVertical: 3 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CashIn;
