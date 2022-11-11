import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
const CommonHeader = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);

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
        // borderBottomWidth: 1,
        // borderBottomColor: "#C6C6C6",
      }}>
      <View
        style={{
          flexDirection: "row",
          // backgroundColor:'#fff',
          // justifyContent:'center',
          alignItems: "center",
          width: "75%",
        }}>
        <View>
          <Image
            source={require("../../Assets/profile.png")}
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginRight: 10,
              // backgroundColor:'#fff'
            }}
          />
        </View>
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
            <Text style={{fontWeight: "600", fontSize: 14, color: "#fff"}}>
              Business Name
            </Text>
            <Icon name="caretdown" color={"#fff"} size={12} />
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: "#ddd", fontWeight: "800"}}>
            {user.mobile}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => alert("In Progress")}
        style={{width: "25%", justifyContent: "center", alignItems: "center"}}>
        <Image
          source={require("../../Assets/calender.png")}
          style={{
            height: 34,
            width: 34,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;
