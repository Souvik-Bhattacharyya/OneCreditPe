import {View, Text, StyleSheet, Dimensions, Image} from "react-native";
import React from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import CustomerTransaction from "../../Components/CustomerTransaction";

const width = Dimensions.get("window").width;

export default function SetCollectionDate() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {borderColor: "#c6c6c6", backgroundColor: "#fff"},
        ]}>
        <View
          style={{
            width: "75%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View style={styles.box}>
            <Text style={{fontSize: 20, color: "#F31B24", fontWeight: "900"}}>
              ₹ 3,560.00
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
              Total amount you have to pay
            </Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Image
            source={require("../../Assets/modalImage.png")}
            style={{height: 34, width: 34}}
          />
        </View>
      </View>
      <CustomerTransaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EEFF",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: metrics.horizontalScale(10),
    paddingVertical: metrics.verticalScale(20),
    borderRadius: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  box: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
});
