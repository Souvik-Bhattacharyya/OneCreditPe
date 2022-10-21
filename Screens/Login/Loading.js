import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";

const Loading = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreens");
    }, 3000);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flex: .8 }}>
        <Image source={require("../../Assets/Logos/Logo.png")} style={styles.logo} />
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'absolute', bottom: 40 }}>
        <Image source={require("../../Assets/secure.png")} style={{ width: 146, height: 146 }} />
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#828282' }}>100% Safe And Secure</Text>
      </View>
    </View >
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
  logo: {
    height: 100,
    width: 300,
    top: "-20%",
  },
});
