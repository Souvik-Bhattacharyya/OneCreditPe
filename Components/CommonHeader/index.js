import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const CommonHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#C6C6C6'
      }}>
      <View
        style={{
          flexDirection: "row",
          // backgroundColor:'#fff',
          // justifyContent:'center',
          alignItems: 'center',
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
          <TouchableOpacity 
          
          style={{
            flexDirection: "row",
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{ fontWeight: "800", fontSize: 17, color: "black" }}>
              Business Name
            </Text>
            <Icon name="caretdown" color={"#000"} size={14}/>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#828282', fontWeight: '800' }}>9192939495</Text>
        </View>
      </View>
      <TouchableOpacity style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
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
