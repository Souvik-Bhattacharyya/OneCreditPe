import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import moment from "moment";
import Api from "../../Services";
const CashIn = ({ object }) => {
  const { id, amount, date_time, payment_details } = object;
  console.log("object", object);
  const date = moment(date_time).format("Do MMM YY, h:mm a");

  const createTwoButtonAlert = () =>
    Alert.alert("Are you sure to delete this entry?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          deleteEntry();
        },
      },
    ]);

  const deleteEntry = async () => {
    try {
      const response = await Api.delete(`/auth/cashbook/${id}`);
      console.log("=======>", response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
            ̥₹{amount}
          </Text>
          <Text style={{ color: "#000", fontSize: 12, fontWeight: "400" }}>
            Cash In
          </Text>
        </View>
        <View style={{ width: "45%" }}>
          <Text
            style={{
              color: "#000",
              fontSize: 14,
              fontWeight: "400",
              marginBottom: metrics.verticalScale(5),
            }}>
            {date}
          </Text>
          <Text style={{ color: "#000", fontSize: 12, fontWeight: "500" }}>
            Balance- Rs. {amount}
          </Text>
          <Text style={{ color: "#000", fontSize: 12, fontWeight: "500" }}>
            {payment_details}
          </Text>
        </View>

        <View
          style={{
            width: "18%",
            flexDirection: 'column',
            alignItems: 'center',
            // backgroundColor: '#ddd',
            paddingHorizontal: 7
          }}>
          {object.attachments === "null" && (
            <TouchableOpacity>
              <IconMat
                name="attachment"
                color={"#0a5ac9"}
                size={24}
              />
            </TouchableOpacity>
           )}

          <TouchableOpacity
            onPress={createTwoButtonAlert}>
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
