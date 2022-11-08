import {View, Text, TouchableOpacity, Linking} from "react-native";
import React from "react";
import MessageIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LikeIcon from "react-native-vector-icons/AntDesign";
import DislikeIcon from "react-native-vector-icons/AntDesign";
import CallIcon from "react-native-vector-icons/Feather";

const Ans = ({route}) => {
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:${+917980222011}";
    } else {
      number = "tel:${+917980222011}";
    }
    Linking.openURL(number);
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 20,
          marginVertical: 20,
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 19,
            color: "black",
            marginBottom: 10,
          }}>
          {route.params.qus}
        </Text>
        <Text style={{marginBottom: 20}}>{route.params.ans}</Text>
        <Text style={{textAlign: "center", marginBottom: 20}}>
          Was this helpful?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}>
          <LikeIcon
            name="like1"
            size={20}
            style={{paddingHorizontal: 15}}
            color="black"
          />
          <DislikeIcon
            name="dislike1"
            size={20}
            color="black"
            style={{paddingHorizontal: 15}}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "black",
          marginVertical: 20,
          fontSize: 15,
        }}>
        Didn't find your question?
      </Text>
      <View style={{flexDirection: "row", justifyContent: "space-around"}}>
        <View
          style={{
            backgroundColor: "#0A5AC9",
            paddingHorizontal: 10,
            paddingVertical: 10,
            width: "40%",
            flexDirection: "row",
            borderRadius: 5,
          }}>
          <MessageIcon
            name="message-processing-outline"
            size={20}
            color="white"
          />
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("whatsapp://send?text=Hello&phone=+917980222011")
            }>
            <Text style={{marginHorizontal: 5, color: "white"}}>
              CHAT WITH US
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#0A5AC9",
            paddingHorizontal: 10,
            paddingVertical: 10,
            width: "40%",
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 5,
          }}>
          <CallIcon name="phone" size={18} color="white" />
          <TouchableOpacity onPress={() => openDialScreen()}>
            <Text style={{marginHorizontal: 5, color: "white"}}>CALL US</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Ans;
