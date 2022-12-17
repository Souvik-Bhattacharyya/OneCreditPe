import {View, Text, TouchableOpacity, Image, Alert} from "react-native";
import React from "react";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
import moment from "moment";
import Api from "../../Services";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import UpdateIcon from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";
const ToGet = ({trnsDetails, customersAllTransaction}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
          deleteEntry(trnsDetails?.id);
        },
      },
    ]);

  const deleteEntry = async id => {
    try {
      const response = await Api.delete(`/auth/transaction/${id}`);
      console.log(response);

      if (response.status == 200) {
        customersAllTransaction(trnsDetails?.customer_id);
        dispatch(notify({message: "Transaction deleted successfully"}));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      dispatch(notify({message: error.message}));
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
        <View style={{width: "20%"}}>
          <Text
            style={{
              color: "#12ce12",
              fontSize: 18,
              fontWeight: "600",
              marginBottom: metrics.verticalScale(5),
            }}>
            {trnsDetails?.amount}
          </Text>
          <Text style={{color: "#000", fontSize: 12, fontWeight: "800"}}>
            {trnsDetails?.tns_type}
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
          <Text style={{color: "#111", fontSize: 12, fontWeight: "600"}}>
            {trnsDetails?.payment_details}
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: '#ddd',
            paddingHorizontal: 7,
          }}>
          {trnsDetails?.attachment !== null && (
            <TouchableOpacity>
              <IconMat name="attachment" color={"#0a5ac9"} size={24} />
            </TouchableOpacity>
          )}

          <View style={{flexDirection: "row"}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CustomerEntries", {
                  trnsDetails: trnsDetails,
                })
              }>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={createTwoButtonAlert}>
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
    </View>
  );
};

export default ToGet;
