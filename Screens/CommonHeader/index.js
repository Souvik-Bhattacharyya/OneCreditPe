import {View, Text, Image} from "react-native";
import React from "react";

const CommonHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-around",
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: "row",
        }}>
        <Image
          source={require("../../Assets/profile.png")}
          style={{
            height: 40,
            width: 40,
            resizeMode: "contain",
            marginVertical: 9,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            marginVertical: 12,
            marginHorizontal: 15,
          }}>
          <Text style={{fontWeight: "400", fontSize: 17, color: "black"}}>
            Business Name
          </Text>
          <Text style={{fontSize: 13, marginTop: -4}}>9192939495</Text>
        </View>
      </View>
      <Image
        source={require("../../Assets/calender.png")}
        style={{
          marginVertical: 15,
          height: 25,
          width: 25,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default CommonHeader;
