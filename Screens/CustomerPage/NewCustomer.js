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
import {useNavigation} from "@react-navigation/native";

const CustomerHome = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.Row}>
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
        <View style={styles.Row}>
          <View style={{marginTop: 15, borderRadius: 10}}>
            <View style={{flexDirection: "row"}}>
              <Text
                style={{
                  color: "#0A5AC9",
                  fontSize: 20,
                  fontWeight: "700",
                  paddingTop: 20,
                }}>
                Old Customers
              </Text>
            </View>

            <TouchableOpacity style={styles.contactBox}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  backgroundColor: "#c3e2ff",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                }}>
                <Text
                  style={{fontSize: 28, fontWeight: "700", color: "#0A5AC9"}}>
                  A
                </Text>
              </View>
              <View style={{paddingHorizontal: metrics.horizontalScale(20)}}>
                <Text style={{fontSize: 18, fontWeight: "600", color: "#333"}}>
                  Asish Kr Das
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: "400", color: "#828282"}}>
                  +91-6502545585
                </Text>
              </View>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 20,
                  backgroundColor: "#0A5AC9",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: 20,
                }}>
                <MatIcon name="chevron-right" color={"#fff"} size={18} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactBox}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  backgroundColor: "#c3e2ff",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                }}>
                <Text
                  style={{fontSize: 28, fontWeight: "700", color: "#0A5AC9"}}>
                  S
                </Text>
              </View>
              <View style={{paddingHorizontal: metrics.horizontalScale(20)}}>
                <Text style={{fontSize: 18, fontWeight: "600", color: "#333"}}>
                  Suraj Da
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: "400", color: "#828282"}}>
                  +91-2145052022
                </Text>
              </View>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 20,
                  backgroundColor: "#0A5AC9",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: 20,
                }}>
                <MatIcon name="chevron-right" color={"#fff"} size={18} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
              paddingLeft: 10,
              paddingRight: 20,
              borderRadius: 50,
              justifyContent: "flex-end",
            }}
            onPress={() => navigation.navigate("AddContact")}>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 20,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 10,
              }}>
              <AntDesign name="plus" color={"#0A5AC9"} size={22} />
            </View>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#fff"}}>
              Add From Contact
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
    paddingHorizontal: metrics.horizontalScale(20),
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
    borderRadius: 10,
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
});
