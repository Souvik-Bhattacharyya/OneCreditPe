import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, {useEffect} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import OTPTextView from "../../Constants/AppOtpInput";
import Api from "../../Services";
//Redux
import {useSelector} from "react-redux";

const OtpScreen = ({navigation}) => {
  const {mobileNumber} = useSelector(state => state.register);
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

  useEffect(() => {});

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={require("../../Assets/Logos/Logo.png")} />
        </View>

        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            flexDirection: "row",
            marginVertical: 20,
            width: "100%",
            height: "auto",
          }}>
          <Text style={styles.text}>Otp send to </Text>
          <View style={{display: "flex", flexDirection: "row"}}>
            <Text style={[styles.text, {fontWeight: "800", fontSize: 20}]}>
              0000000000
            </Text>
            <FontAwesome
              name="pencil-square-o"
              color="#333"
              size={20}
              style={{marginLeft: 10, alignSelf: "center"}}
            />
          </View>
        </TouchableOpacity>

        <OTPTextView inputCount={4} handleTextChange={e => setOtp(e)} />

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
              <Text style={{fontSize: 14, fontWeight: "500"}}>
                Auto verifying
              </Text>
            </>
          )}
          <Text style={{fontSize: 14, fontWeight: "500", textAlign: "right"}}>
            Resend OTP in 10s
          </Text>
        </View>

        {/* <View style={styles.box}>
            <TextInput
              maxLength={1}
              // ref={"pin1ref"}
              style={styles.textInp}
            />
            <TextInput
              maxLength={1}
              // ref={"pin2ref"}
              style={styles.textInp}
            />
            <TextInput
              maxLength={1}
              // ref={"pin3ref"}
              style={styles.textInp}
            />
            <TextInput
              maxLength={1}
              // ref={"pin4ref"}
              style={styles.textInp}
            />
          </View> */}

        <View style={{marginTop: 30}}>
          <Image source={require("../../Assets/Images/enter-otp.png")} />
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
    alignItems: "center",
  },
  // , textInp: {
  //   fontWeight: '600',
  //   textAlign: 'center',
  //   fontSize: 28,
  //   height: 60,
  //   width: 48,
  //   borderRadius: 10,
  //   borderWidth: 0.5,
  //   borderColor: 'grey',
  //   padding: 10,
  //   color: '#333',
  //   backgroundColor: '#F6F5FA',
  // },
  // box: {
  //   width: '100%',
  //   justifyContent: "space-evenly",
  //   flexDirection: 'row'
  // },
  // shadowProp: {
  //   shadowColor: '#171717',
  //   shadowOffset: { width: 0, height: 4 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  // },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#828282",
    fontSize: 16,
    textAlign: "center",
  },
});
