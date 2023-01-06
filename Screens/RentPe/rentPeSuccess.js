import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const RentPeSuccess = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Icon
          name="checkcircle"
          color="#21F312"
          size={16}
          style={{
            marginVertical: 8,
            paddingHorizontal: 5,
            fontSize: 120,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            padding: 10,
          }}>
          Rent Details Successfully Added
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShowRentDetails")}
        style={{
          marginHorizontal: 15,

          padding: 10,
          borderRadius: 20,
          backgroundColor: "#0A5AC9",
        }}>
        <Text style={{textAlign: "center", fontWeight: "bold", color: "#fff"}}>
          See Details
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default RentPeSuccess;
