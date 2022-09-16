import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Icon from "react-native-vector-icons/AntDesign";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Assets/Loading-Screen.png")}
        resizeMode="cover"
        style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Image
          style={styles.logo}
          source={require("../../Assets/Logos/Logo.png")}
        />
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: "#fff",
              textDecorationLine: "underline",
              fontSize: 26,
              marginRight: 20,
            }}>
            Get Started
          </Text>
          <Icon name="arrowright" olor={"#fff"} size={20} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    height: 100,
    width: 300,
    top: "-20%",
  },
  btn: {
    paddingVertical: 20,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "10%",
  },
});
