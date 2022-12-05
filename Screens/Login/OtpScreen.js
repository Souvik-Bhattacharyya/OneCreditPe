import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, {useEffect} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import OTPTextView from "../../Constants/AppOtpInput";
import Api from "../../Services";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {addToken} from "../../Redux/Action/authActions";

const OtpScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {mobileNumber} = route.params;

  // const [otp, setOtp] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  const onSubmitOtp = async e => {
    try {
      setLoading(true);
      const response = await Api.post("/check-otp", {
        mobile: mobileNumber,
        otp: e,
      });
      console.log("response", response.data.status);
      if (response.data.status == "401") {
        alert("You have entered wrong OTP");
      } else {
        const payload = {
          user: response.data.user,
          clientToken: response.data.token,
        };
        dispatch(addToken(payload));
        navigation.navigate("loading");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 0.4}}>
          <Image
            source={require("../../Assets/Logos/Logo.png")}
            style={styles.logo}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              marginVertical: 20,
              width: "100%",
            }}>
            <Text style={styles.text}>Otp send to </Text>
            <View style={{display: "flex", flexDirection: "row"}}>
              <Text style={[styles.text, {fontWeight: "600", fontSize: 20}]}>
                {mobileNumber || ""}
              </Text>
              <FontAwesome
                name="pencil"
                color="#0A5AC9"
                size={20}
                style={{marginLeft: 10, alignSelf: "center"}}
              />
            </View>
          </TouchableOpacity>

          <OTPTextView
            inputCount={4}
            handleTextChange={e => {
              e.length == 4 && onSubmitOtp(e);
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
            width: "100%",
          }}>
          {isLoading && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
              }}>
              <ActivityIndicator
                animating={true}
                color={"red"}
                size={"large"}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#000",
                  marginLeft: 30,
                }}>
                Auto verifying
              </Text>
            </View>
          )}
          <View style={{width: "100%"}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                textAlign: "left",
                color: "#0a5ac9",
                marginTop: 30,
              }}>
              Resend OTP in 10s
            </Text>
          </View>
        </View>

        {/* <TouchableOpacity
          onPress={onSubmitOtp}
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
            Verify OTP
          </Text>
          <AntDesign name="arrowright" color="white" size={30} />
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#464555",
    fontSize: 16,
    textAlign: "center",
  },
  logo: {
    height: 60,
    width: 200,
    top: "20%",
    resizeMode: "contain",
  },
});
