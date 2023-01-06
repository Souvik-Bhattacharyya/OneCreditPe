import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";

const NotWorking = ({navigation}) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "700",
          color: "#ED1C24",
          fontSize: 28,
          textAlign: "center",
          marginTop: 20,
        }}>
        Oops!
      </Text>
      <Text style={{textAlign: "center", marginTop: 10}}>
        Something went wrong. Please recheck your {"\n"} documents
      </Text>
      <Image
        source={require("../../../Assets/warning.png")}
        style={{
          height: 250,
          width: 290,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 80,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EasyLoan");
        }}
        style={{
          width: "95%",
          backgroundColor: "#0A5AC9",
          justifyContent: "center",
          borderRadius: 20,
          flexDirection: "row",
          position: "absolute",
          bottom: -170,
          alignSelf: "center",
        }}>
        <Text
          style={{
            fontSize: 15,
            color: "#FFFFFF",
            margin: 10,
          }}>
          Go To Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotWorking;
