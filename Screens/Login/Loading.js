import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";

const Loading = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreens");
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../Assets/Logos/Logo.png")} />
      </View>
      <View style={{marginTop: "45%"}}>
        <Image source={require("../../Assets/cuate.png")} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreens")}
        style={{
          backgroundColor: "#349EFF",
          paddingVertical: 5,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          flexDirection: "row",
          marginTop: "auto",
        }}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 20,
            fontWeight: "bold",
            color: "#FFFFFF",
            margin: 10,
          }}>
          Let's Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
