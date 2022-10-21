import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import AntDesign from "react-native-vector-icons/AntDesign";
import Api from "../../Services";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { editName, editMobile } from "../../Redux/Action/registerActions";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { name, mobileNumber } = useSelector(state => state.register);

  const login = async () => {
    console.log("--------->", name, mobileNumber);
    try {
      const response = await Api.post("/send-otp", {
        name: name,
        mobile: mobileNumber,
      });
      console.log("==>", response.data);
      if (response.status == 200) {
        navigation.navigate("otp");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../Assets/Logos/Logo.png")} style={styles.logo} />
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text
          style={{
            fontSize: 20,
            color: "#20409A",
            marginBottom: 10,
            fontWeight: "bold",
          }}>
          Create an account,
        </Text>
        <Text
          style={{
            color: "#828282",
            fontWeight: "700",
          }}>
          Please enter your Mobile Number
        </Text>
      </View>

      <View>
        <SafeAreaView style={{ alignItems: "center", marginTop: 20 }}>
          <TextInput
            value={name}
            style={styles.name}
            placeholder="Your Business Name"
            placeholderTextColor="#B4B4B4"
            onChangeText={val => dispatch(editName({ name: val }))}
          />
          <TextInput
            value={mobileNumber}
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor="#B4B4B4"
            onChangeText={val => dispatch(editMobile({ mobile: val }))}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}>
        <TouchableOpacity onPress={login} style={{width:'100%'}} >
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
        </TouchableOpacity>
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
  name: {
    paddingVertical: 15,
    backgroundColor: "#f6f6f6",
    width: "100%",
    borderRadius: 6,
    paddingHorizontal: 20,
    marginTop: "20%",
    fontSize: 18,
    color: "#6f6f6f",
    fontWeight: "800",
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
  input: {
    paddingVertical: 15,
    backgroundColor: "#f6f6f6",
    width: "100%",
    borderRadius: 6,
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    color: "#6f6f6f",
    fontWeight: "800",
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
  logo: {
    height: 60,
    width: 200,
    top: "20%",
    resizeMode:'contain'
  },
});
