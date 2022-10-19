import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Icon from "react-native-vector-icons/AntDesign";
import {increase} from "../../Redux/Action/increse.action";
import {useSelector, useDispatch} from "react-redux";
const Welcome = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.increment.count);
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
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("login")}>
          <Text
            style={{
              color: "#fff",
              fontSize: 26,
              marginRight: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#fff',
              paddingBottom: 2

            }}>
            Get Started
          </Text>
          <Icon name="arrowright" color={"#fff"} size={20} />
        </TouchableOpacity>
        {/* <Button
          title="ok"
          onPress={() => {
            dispatch(increase());
          }}
        />
        <Text>{count}</Text> */}
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
