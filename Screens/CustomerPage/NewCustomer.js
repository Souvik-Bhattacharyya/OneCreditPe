import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/FontAwesome5";
import {useNavigation} from "@react-navigation/native";
import AddContact from "../../Components/AddContact";
import Api from "../../Services";

const CustomerHome = ({route}) => {
  const navigation = useNavigation();
  const {customerType} = route.params;
  const [customer, setCustomer] = useState({
    name: "",
    mobile: null,
  });

  const payload = {
    cus_name: customer.name,
    cus_mobile: customer.mobile,
    customer_type: customerType,
  };
  const addCustomer = async () => {
    try {
      console.log("--->", customerType);
      const response = await Api.post("/auth/customer", payload);
      if (response.data) {
        setCustomer({...customer, name: "", mobile: null});
        navigation.navigate("UserDetails", {user: response.data.data});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addSupplier = async () => {
    try {
      console.log("--->", customerType);
      const response = await Api.post("/auth/customer", payload);
      if (response.data) {
        setCustomer({...customer, name: "", mobile: null});
        navigation.navigate("UserDetails", {user: response.data.data});
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{paddingHorizontal: metrics.horizontalScale(15)}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextInput
              value={customer.name}
              placeholder="Customer Name"
              placeholderTextColor={"#828282"}
              style={styles.Input}
              onChangeText={val => setCustomer({...customer, name: val})}
            />
            <View style={styles.circle}>
              <Icon
                name="user-alt"
                size={16}
                color={"#fff"}
                style={styles.Icon}
              />
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
              value={customer.mobile}
              placeholder="Customer Mobile"
              placeholderTextColor={"#828282"}
              style={styles.Input}
              keyboardType={"numeric"}
              onChangeText={val => setCustomer({...customer, mobile: val})}
            />
            <View style={styles.circle}>
              <Icon name="phone" size={16} color={"#fff"} style={styles.Icon} />
            </View>
          </View>
          {/* Continue */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{width: "100%"}}
              onPress={() =>
                customerType === "customer" ? addCustomer() : addSupplier()
              }>
              <View
                style={{
                  backgroundColor: "#0a5ac9",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
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

        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            backgroundColor: "#fff",
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginTop: 15,
            // borderWidth: 1,
            // borderColor: '#c9c9c9',
            flex: 1,
          }}>
          <AddContact
          // customer={customer}
          // setCustomer={setCustomer}
          // addCustomer={addCustomer}
          // addSupplier={addSupplier}
          // customerType={customerType}
          />
        </View>
      </View>
    </>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.verticalScale(15),
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
});
