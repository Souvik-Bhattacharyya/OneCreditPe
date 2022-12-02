import {View, Text, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import AddIcon from "react-native-vector-icons/Ionicons";
const AddAdhaarDetails = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#D2D2D2",
      }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          height: "100%",
        }}>
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Enter Your Aadhar number
        </Text>
        <TextInput
          placeholder="Enter Your Aaddhar number"
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Add Aadhar Image
        </Text>
        <View
          style={{
            paddingVertical: 60,
            marginTop: 10,
            borderRadius: 5,
            borderColor: "#c6c6c6",
            borderWidth: 0.8,
            alignItems: "center",
          }}>
          <AddIcon name="add-circle" size={30} color="#349EFF" />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: "95%",
          backgroundColor: "#0A5AC9",
          justifyContent: "center",
          borderRadius: 20,
          flexDirection: "row",
          position: "absolute",
          bottom: 10,
          alignSelf: "center",
        }}>
        <Text
          style={{
            fontSize: 15,
            color: "#FFFFFF",
            margin: 10,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAdhaarDetails;
