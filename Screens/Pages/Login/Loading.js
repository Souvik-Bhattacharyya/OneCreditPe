import {View, Text, StyleSheet, Image, ActivityIndicator} from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../../Assets/Logos/Logo.png")} />
      </View>
      <View>
        <Image source={require("../../../Assets/cuate.png")} />
      </View>
      <View style={{marginBottom: 40}}>
        <ActivityIndicator size="large" color="#349EFF" />
      </View>
    </View>
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
});
