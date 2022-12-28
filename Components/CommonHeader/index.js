import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
const CommonHeader = props => {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  console.log("========>", user);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: props.color,
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "75%",
        }}>
        <View>
          <Image
            source={
              user?.profile_image
                ? {
                    uri:
                      "https://onepay.alsoltech.in/public/assets/user/profile_image/" +
                      user?.profile_image,
                  }
                : require("../../Assets/blank-profile.png")
            }
            style={{
              height: 40,
              width: 40,
              resizeMode: "cover",
              marginRight: 10,
              borderRadius: 100,
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
            <Text
              style={{
                fontWeight: "600",
                fontSize: 17,
                color: "#fff",
                marginRight: 5,
              }}>
              {user.name != null ? user.name : "Username"}
            </Text>
            <Icon name="caretdown" color={"#fff"} size={12} />
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: "#c9c9c9", fontWeight: "800"}}>
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
