import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MatIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import OldCustomer from "../../Components/OldCustomer";

const CustomerHome = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextInput
              placeholder="Customer Name"
              placeholderTextColor={"#828282"}
              style={styles.Input}
            />
            <View style={styles.circle}>
              <Icon name="user" size={16} color={"#fff"} style={styles.Icon} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}>
            <TextInput
              placeholder="Customer Mobile Number"
              placeholderTextColor={"#828282"}
              style={styles.Input}
            />
            <View style={styles.circle}>
              <Icon name="phone" size={16} color={"#fff"} style={styles.Icon} />
            </View>
          </View>
        </View>

        {/* Old Customer */}
        <View style={styles.Row}>
          <View style={{borderRadius: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#0A5AC9",
                  fontSize: 20,
                  fontWeight: "700",
                }}>
                Old Customers
              </Text>
            </View>
            <OldCustomer />
          </View>
        </View>

        {/* Add From Contact */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 20,
            right: 0,
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#0A5AC9",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 50,
              justifyContent: "flex-end",
            }}
            onPress={() => navigation.navigate("AddContact")}>
            <AntDesign name="pluscircle" color={"#fff"} size={32} />
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff", marginHorizontal: 10 }}>
              Add Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.horizontalScale(15),
    paddingVertical: metrics.verticalScale(15),
    backgroundColor: "#E8EEFF",
    flex: 1,
  },
  Input: {
    width: "100%",
    color: "#333",
    position: "relative",
    paddingLeft: metrics.horizontalScale(50),
    paddingVertical: metrics.verticalScale(15),
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 6,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  circle: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A5AC9",
    borderRadius: 20,
    position: "absolute",
    left: 10,
  },
  contactBox: {
    flexDirection: "row",
    paddingHorizontal: metrics.horizontalScale(20),
    paddingVertical: metrics.verticalScale(15),
    marginVertical: metrics.verticalScale(10),
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  Row: {
    backgroundColor:'#ddd',
    marginVertical: metrics.verticalScale(15),
    paddingVertical: metrics.verticalScale(10)
  }
});
