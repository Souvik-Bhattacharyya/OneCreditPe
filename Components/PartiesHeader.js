import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const PartiesHeader = ({ user, ScreenNavigation }) => {
  const navigation = useNavigation();
  const nameIcon = Array.from(user.cus_name)[0];

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
          alignItems: "center",
          width: "75%",
        }}>

        {
          navigation.canGoBack() ? (
            <TouchableOpacity
              onPress={() => navigation.pop()}>
              <Icon name="arrowleft" size={24} color="#fff" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          )
            :
            (null)
        }
        <View
          style={{
            height: 40,
            width: 40,
            resizeMode: "contain",
            marginRight: 10,
            backgroundColor: '#EEF3FF',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{
            color: '#0a5ac9',
            fontWeight: '900',
            fontSize: 22,
          }}
          >{nameIcon}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 3,
            }}>
            <Text style={{ fontWeight: "600", fontSize: 17, color: "#fff" }}>
              {user.cus_name}
            </Text>
            <View
              style={{
                backgroundColor: "#fff",
                marginLeft: 10,
                paddingHorizontal: 5,
                paddingVertical: 2,
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text style={{ fontWeight: "600", fontSize: 14, color: "#0a5ac9" }}>
                {user.cus_type}
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 14, color: "#ddd", fontWeight: "800" }}>
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
