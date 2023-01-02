import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
const rentPeMode = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={[
          styles.paddingHorizontal,
          {
            height: 220,
            backgroundColor: "transparent",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          },
        ]}>
        <Image
          source={require("../../Assets/Images/kyc.png")}
          style={{resizeMode: "contain", width: "50%"}}
        />
      </View>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 16, fontWeight: "bold", color: "#0A5AC9"}}>
          Select Payment Mode
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#7C7C7D",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Text>Add Bank Account</Text>
          <Icon
            name="right"
            size={16}
            style={{marginVertical: 8, paddingHorizontal: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#7C7C7D",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Text>Add BHM UPI ID</Text>
          <Icon
            name="right"
            size={16}
            style={{marginVertical: 8, paddingHorizontal: 5}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#7C7C7D",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginVertical: 10,
            borderRadius: 8,
          }}>
          <Text>From Wallet</Text>
          <Icon
            name="right"
            size={16}
            style={{marginVertical: 8, paddingHorizontal: 5}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("RentPeSuccess")}
        style={{
          borderRadius: 20,
          marginHorizontal: 15,
          padding: 10,
          marginTop: 20,
          backgroundColor: "#0A5AC9",
        }}>
        <Text style={{textAlign: "center", color: "#fff", fontWeight: "bold"}}>
          Make Payment
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default rentPeMode;
