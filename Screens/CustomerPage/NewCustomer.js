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
          <View style={{
            flexDirection: "row",
            alignItems:'center',justifyContent:'space-between',
            paddingVertical: metrics.verticalScale(15),
            paddingHorizontal: metrics.horizontalScale(20),
            backgroundColor: '#0a5ac9',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "700",
              }}>
              Old Customers
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'flex-end',
                backgroundColor:'#fff', 
                borderRadius: 6,
                paddingVertical: 5,
                paddingHorizontal: 10
              }}
              onPress={() => navigation.navigate("AddContact")}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "#0a5ac9", marginLeft: 5}}>
                Add Contact
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{
            paddingHorizontal: metrics.horizontalScale(10),
          }}>
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
            <OldCustomer />
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 40,
              right: 0,
              marginHorizontal: 10,
              borderColor: '#c9c9c9',
              borderWidth: 1,
              borderRadius: 50,
              backgroundColor: "#fff",
            }}>

          </View>
        </View>

        {/* Continue */}
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end",
          }}>
          <TouchableOpacity style={{ width: "100%" }}>
            <View
              style={{
                backgroundColor: "#0a5ac9",
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
                Continue
              </Text>
            </View>
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
    backgroundColor: '#fff',
    marginVertical: metrics.verticalScale(15),
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 6,
    height: "50%"
  }
});
