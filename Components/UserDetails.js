import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import metrics from "../Constants/metrics";
import UserTransaction from "./UserTransaction";
import PartiesHeader from "./PartiesHeader";

const CustomerHome = ({route}) => {
  const navigation = useNavigation();
  const user =
    route.params?.user || route.params?.object || route.params?.userDetails;
  const width = Dimensions.get("window").width;
  let userData = {};
  if (user.customer_id) {
    userData = {
      customer_id: user.customer_id,
      cus_name: user.cus_name,
      cus_mobile: user.cus_mobile,
      cus_type: user.cus_type,
    };
  } else {
    userData = {
      customer_id: user.id,
      cus_name: user.cus_name,
      cus_mobile: user.cus_mobile,
      cus_type: user.customer_type,
    };
  }
  console.log("details of user in userDetails page", userData);
  return (
    <View style={{flex: 1, backgroundColor: "#E8EEFF"}}>
      <PartiesHeader user={userData} />
      <ScrollView style={{marginBottom: 60}}>
        <UserTransaction />
        {/* <UserTransaction />
        <UserTransaction />
        <UserTransaction />
        <UserTransaction />
        <UserTransaction />
        <UserTransaction /> */}
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: metrics.verticalScale(0),
          alignSelf: "center",
          width,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#f6f6f6",
          paddingHorizontal: 20,
          paddingVertical: 10,
          left: 0,
          borderTopWidth: 1,
          borderColor: "#c9c9c9",
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CustomerStack", {
              screen: "CustomerEntries",
              params: {userData: userData},
            })
          }
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: "#0a5ac9",
            borderRadius: 6,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <IconMat name="cash-plus" color={"#fff"} size={24} />
          <Text style={[styles.btnTxt, {color: "#fff", marginLeft: 5}]}>
            Cash Entries
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
