import {View, Text, TouchableOpacity, TextInput} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";
const FindIfsc = () => {
  return (
    <View style={{paddingHorizontal: 12}}>
      <Text style={{fontSize: 15, marginTop: 20, color: "#0A5AC9"}}>
        Find IFSC - Select state
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: metrics.horizontalScale(10),
          borderColor: "#c6c6c6",
          borderWidth: 0.8,
          borderRadius: 5,
          backgroundColor: "#f3f3f3",
          marginTop: 10,
        }}>
        <TextInput
          placeholder="Enter State"
          placeholderTextColor={"#828282"}
          style={{
            width: "100%",
            fontSize: 16,
            color: "#000",
            fontWeight: "500",
            position: "relative",
            paddingLeft: metrics.horizontalScale(5),
            paddingVertical: metrics.verticalScale(7),
          }}
        />
        <TouchableOpacity
          style={{position: "absolute", right: 20, alignSelf: "center"}}>
          <Icon name="search" size={18} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "83%",
          borderWidth: 0.8,
          borderColor: "#c6c6c6",
          marginTop: 10,
          borderRadius: 5,
        }}></View>
    </View>
  );
};

export default FindIfsc;
