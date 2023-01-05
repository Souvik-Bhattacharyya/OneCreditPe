import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";

const Success = ({navigation}) => {
  return (
    <View style={{backgroundColor: "#F7FBFF", height: "100%"}}>
      <Text
        style={{
          fontSize: 28,
          color: "#00B032",
          fontWeight: "700",
          textAlign: "center",
          marginTop: 20,
        }}>
        Success
      </Text>
      <Text style={{textAlign: "center", marginTop: 10}}>
        Your documents submitted successfully. We’ll Verify
      </Text>
      <Text style={{textAlign: "center"}}>
        your documents and reach to you soon
      </Text>
      <Image
        source={require("../../../Assets/bro.png")}
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
          navigation.navigate("NotWorking");
        }}
        style={{
          width: "95%",
          backgroundColor: "#0A5AC9",
          justifyContent: "center",
          borderRadius: 20,
          flexDirection: "row",
          position: "absolute",
          bottom: 20,
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

export default Success;
