import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CommonHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20
      }}>
      <View
        style={{
          flexDirection: "row",
          // backgroundColor:'#fff',
          // justifyContent:'center',
          alignItems:'center',
          width: '75%'
        }}>
        <Image
          source={require("../../Assets/profile.png")}
          style={{
            height: 50,
            width: 50,
            resizeMode: "contain",
            marginRight: 10
            // backgroundColor:'#fff'
          }}
        />
        <View
          style={{
            flexDirection: "column",
          }}>
          <Text style={{ fontWeight: "800", fontSize: 17, color: "black" }}>
            Business Name
          </Text>
          <Text style={{ fontSize: 14, color: '#828282' }}>9192939495</Text>
        </View>
      </View>
      <TouchableOpacity style={{width:'25%', justifyContent:'center', alignItems:'center'}}>
        <Image
          source={require("../../Assets/calender.png")}
          style={{
            height: 38,
            width: 38,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;
