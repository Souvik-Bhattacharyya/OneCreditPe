import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import OTPTextView from "../../Constants/AppOtpInput";
import Api from "../../Services";
//Redux
import { useSelector } from "react-redux";

const OtpScreen = ({ navigation }) => {
  const { mobileNumber } = useSelector(state => state.register);
  const [otp, setOtp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const onSubmitOtp = async () => {
    try {
      const response = await Api.post("/check-otp", {
        mobile: mobileNumber,
        otp: 1000,
      });
      if (response.status == 200) {
        setLoading(true);
        navigation.navigate("Loading");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { });

  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: .4 }}>
          <Image source={require("../../Assets/Logos/Logo.png")} style={styles.logo} />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              marginVertical: 20,
              width: "100%",
            }}>
            <Text style={styles.text}>Otp send to </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={[styles.text, { fontWeight: "800", fontSize: 20 }]}>
                0000000000
              </Text>
              <FontAwesome
                name="pencil"
                color="#20409a"
                size={20}
                style={{ marginLeft: 10, alignSelf: "center" }}
              />
            </View>
          </TouchableOpacity>

          <OTPTextView inputCount={4} handleTextChange={e => setOtp(e)} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            width: "100%",
          }}>
          {isLoading && (
            <>
              <ActivityIndicator animating={true} color={"red"} />
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Auto verifying
              </Text>
            </>
          )}
          <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "right" }}>
            Resend OTP in 10s
          </Text>
        </View>

        <TouchableOpacity
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
        </TouchableOpacity>
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
    alignItems: "center"
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
    resizeMode: 'contain'
  },
});
