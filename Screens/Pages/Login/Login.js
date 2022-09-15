import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import AntDesign from "react-native-vector-icons/AntDesign";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: "center"}}>
        <Image source={require("../../../Assets/Logos/Logo.png")} />
      </View>
      <View style={{alignItems: "center", marginTop: 50}}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 20,
            fontWeight: "bold",
            color: "#20409A",
            marginBottom: 10,
            fontWeight: "700",
          }}>
          Create an account,
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "#828282",
            fontWeight: "600",
          }}>
          Please enter your Mobile Number to Login
        </Text>
      </View>

      <View>
        <SafeAreaView style={{alignItems: "center", marginTop: 20}}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor="#938ea6"
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}>
        <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
          <View
            style={{
              backgroundColor: "#349EFF",
              paddingVertical: 5,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              flexDirection: "row",
            }}>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFFFFF",
                margin: 10,
              }}>
              Login Now
            </Text>
            <AntDesign name="arrowright" color="white" size={30} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  input: {
    paddingVertical: 15,
    backgroundColor: "#E8EEFF",
    width: "100%",
    borderRadius: 6,
    paddingHorizontal: 20,
    marginTop: "20%",
    fontSize: 16,
    color: "#938ea6",
    fontWeight: "500",
  },
});
