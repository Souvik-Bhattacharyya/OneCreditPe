import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";
const rentAgreement = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            borderWidth: 1,
            backgroundColor: "#fff",
          }}>
          <Icon name="file-plus" color={"#0A5AC9"} size={40} />
          <Text style={{fontSize: 20, fontWeight: "bold", padding: 10}}>
            Upload Agreement
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RentPanUpload")}
            style={{
              width: "40%",
              borderRadius: 20,
              backgroundColor: "#0A5AC9",
              padding: 10,
              marginTop: 100,
              marginHorizontal: 15,
            }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
              }}>
              Next
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("RentPanUpload")}
            style={{
              width: "40%",
              borderRadius: 20,
              backgroundColor: "#0A5AC9",
              padding: 10,
              marginTop: 100,
            }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default rentAgreement;
