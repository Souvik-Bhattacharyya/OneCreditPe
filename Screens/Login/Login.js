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
import React, {useState} from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import AntDesign from "react-native-vector-icons/AntDesign";
import Api from "../../Services";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {editName, editMobile} from "../../Redux/Action/registerActions";

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {name, mobileNumber} = useSelector(state => state.register);

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
      <View style={{alignItems: "center"}}>
        <Image source={require("../../Assets/Logos/Logo.png")} />
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
            color: "#737373",
            fontWeight: "700",
          }}>
          Please enter your Mobile Number
        </Text>
      </View>

      <View>
        <SafeAreaView style={{alignItems: "center", marginTop: 20}}>
          <TextInput
            value={name}
            style={styles.name}
            placeholder="Your Business Name"
            placeholderTextColor="#6f6f6f"
            onChangeText={val => dispatch(editName({name: val}))}
          />
          <TextInput
            value={mobileNumber}
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor="#6f6f6f"
            onChangeText={val => dispatch(editMobile({mobile: val}))}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}>
        <TouchableWithoutFeedback onPress={login}>
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
  name: {
    paddingVertical: 15,
    backgroundColor: "#f6f6f6",
    width: "100%",
    borderRadius: 6,
    paddingHorizontal: 20,
    marginTop: "20%",
    fontSize: 18,
    color: "#000",
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
    color: "#000",
    fontWeight: "800",
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
});
