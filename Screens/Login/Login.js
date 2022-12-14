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
import React, {useState} from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import AntDesign from "react-native-vector-icons/AntDesign";
import Api from "../../Services";
import {TextField} from "react-native-ui-lib";
import {notify} from "../../Redux/Action/notificationActions";
import {useDispatch} from "react-redux";

//Redux
// import {useDispatch, useSelector} from "react-redux";
// import {editName, editMobile} from "../../Redux/Action/registerActions";

const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    businessName: "My Business",
    mobileNumber: "",
  });
  const dispatch = useDispatch();
  const login = async () => {
    if (credentials.mobileNumber.length !== 10) {
      dispatch(
        notify({type: "error", message: "Please enter valid mobile number"}),
      );
      return;
    }
    try {
      const response = await Api.post("/send-otp", {
        name: credentials.businessName,
        mobile: credentials.mobileNumber,
      });
      if (response.status == 200) {
        navigation.navigate("otp", {
          mobileNumber: credentials.mobileNumber,
          name: credentials.businessName,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setCredentials({businessName: "my-business", mobileNumber: ""});
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: "flex-start", marginTop: 20}}>
        <Text
          style={{
            fontSize: 28,
            color: "#0A5AC9",
            marginBottom: 5,
            fontWeight: "900",
          }}>
          Login Account
        </Text>
        <Text
          style={{
            color: "#828282",
            fontWeight: "500",
            fontSize: 18,
          }}>
          Create an account
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#C6C6C6",
          paddingHorizontal: 15,
          marginTop: 20,
          // paddingVertical: 10,
        }}>
        {/* <TextInput
            value={credentials.businessName}
            style={styles.name}
            placeholder="Your Business Name"
            placeholderTextColor="#B4B4B4"
            onChangeText={val =>
              setCredentials({...credentials, businessName: val})
            }
          /> */}
        {/* <TextInput
            value={credentials.mobileNumber}
            style={styles.input}
            placeholder="Mobile Number"
            validate={["required", value => value.length <= 10]}
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor="#B4B4B4"
            validationMessage={["Field is required", "Mobile is invalid"]}
            onChangeText={val =>
              setCredentials({...credentials, mobileNumber: val})
            }
          /> */}
        <Text
          style={{
            color: "#000",
            fontWeight: "600",
            marginHorizontal: 10,
            fontSize: 16,
          }}>
          +91
        </Text>
        <TextField
          onChangeText={val => {
            setCredentials({...credentials, mobileNumber: val});
          }}
          placeholder="Enter your mobile number"
          enableErrors
          validate={["required", value => value.length <= 10]}
          validationMessage={["Field is required", "Mobile is invalid"]}
          maxLength={10}
          fieldStyle={{borderWidth: 0, margin: 0, padding: 0}}
          containerStyle={{
            borderWidth: 0,
            margin: 0,
            padding: 0,
            marginTop: 20,
          }}
          validateOnChange={true}
          migrate
          style={{fontSize: 16, fontWeight: "700"}}
          keyboardType="number-pad"
        />
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 50,
          flex: 1,
        }}>
        <Image
          source={require("../../Assets/loginGif.png")}
          style={styles.logo}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}>
        <TouchableOpacity onPress={login} style={{width: "100%"}}>
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
    // backgroundColor: "#f6f6f6",
    width: "100%",
    borderRadius: 6,
    marginHorizontal: 20,
    marginTop: 50,
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    borderWidth: 1,
    borderColor: "#C6C6C6",
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    // backgroundColor: "#f6f6f6",
    width: "100%",
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    borderWidth: 1,
    borderColor: "#C6C6C6",
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  logo: {
    height: 350,
    width: 400,
    resizeMode: "contain",
  },
});
