import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import AddIcon from "react-native-vector-icons/Ionicons";
const AddPicture = () => {
  return (
    <View style={{paddingHorizontal: 10, marginTop: 20}}>
      <Text style={{color: "#0A5AC9"}}>Add a Picture of your Business</Text>
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
      <Text style={{color: "#0A5AC9", marginTop: 20}}>
        Picture of your Business Stocks or Items
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
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "#0A5AC9",
          // marginTop: 10,
          // marginBottom: 20,
          justifyContent: "center",
          borderRadius: 10,
          flexDirection: "row",
          position: "absolute",
          bottom: -200,
          alignSelf: "center",
        }}>
        <Text
          style={{
            fontSize: 15,
            color: "#FFFFFF",
            margin: 10,
          }}>
          Upload Picture
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPicture;
