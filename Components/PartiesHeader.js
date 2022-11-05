import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const PartiesHeader = ({user}) => {
  console.log("user==>", user);

  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#0A5AC9",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        // paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#C6C6C6",
      }}>
      <View
        style={{
          flexDirection: "row",
          // backgroundColor:'#fff',
          // justifyContent:'center',
          alignItems: "center",
          width: "75%",
        }}>
        <Image
          source={require("../Assets/profile.png")}
          style={{
            height: 50,
            width: 50,
            resizeMode: "contain",
            marginRight: 10,
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
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{fontWeight: "800", fontSize: 17, color: "#fff"}}>
              {user.cus_name}
              {user.customer_type || user.cus_type}
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: "#ddd", fontWeight: "800"}}>
            {user.cus_mobile}
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.push("Set Collection Date")}
        style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("../Assets/calender.png")}
          style={{
            height: 38,
            width: 38,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default PartiesHeader;
