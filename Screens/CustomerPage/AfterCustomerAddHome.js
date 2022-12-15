import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, {useState, useEffect} from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import CustomerTransaction from "../../Components/CustomerTransaction";
import CustomerTransactionEmpty from "../../Components/CustomerTransactionEmpty";
import CommonHeader from "../../Components/CommonHeader";
import Api from "../../Services";
const width = Dimensions.get("window").width;

const Customer = () => {
  const navigation = useNavigation();
  const [allCustomerTrnsData, setAllCustomerTrnsData] = useState([]);

  useEffect(() => {
    navigation.addListener("focus", () => {
      allCustomerTransactions();
    });
  }, [navigation]);

  const allCustomerTransactions = async () => {
    try {
      const response = await Api.get("/auth/user-all-customers-transactions");
      if (response.status === 200) {
        setAllCustomerTrnsData(response.data || []);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cusGot = allCustomerTrnsData
    .filter(item => item.aggsum > 0)
    .reduce((accumulator, object) => {
      return accumulator + object.aggsum;
    }, 0);

  const cusGave = allCustomerTrnsData
    .filter(item => item.aggsum < 0)
    .reduce((accumulator, object) => {
      return accumulator + object.aggsum;
    }, 0);
  return (
    <>
      <CommonHeader color="#0a5ac9" />
      <View style={styles.container}>
        {/*Tab Button */}
        <View
          style={{
            marginBottom: 10,
            marginTop: metrics.verticalScale(-15),
            alignSelf: "center",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: "#c6c6c6",
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CustomerStack");
            }}
            style={{
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(10),
              backgroundColor: "#0a5ac9",
              width: "50%",
              flexDirection: "row",
              justifyContent: "center",
              borderColor: "#fff",
              borderWidth: 4,
              alignItems: "center",
            }}>
            <Image
              source={require("../../Assets/add-user.png")}
              style={styles.btnIcon}
            />
            <Text style={[styles.btnTxt, {color: "#fff"}]}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SupplierStack");
            }}
            style={{
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(15),
              backgroundColor: "#fff",
              width: "50%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              source={require("../../Assets/manage-supplier(Theme).png")}
              style={styles.btnIcon}
            />
            <Text style={styles.btnTxt}>Supplier</Text>
          </TouchableOpacity>
        </View>

        {/* Card Started */}
        <View
          style={[
            styles.card,
            {borderColor: "#c6c6c6", backgroundColor: "#fff"},
          ]}>
          <View
            style={[
              styles.box,
              {borderRightWidth: 1, borderColor: "#c9c9c9", paddingRight: 10},
            ]}>
            <View
              style={{
                backgroundColor: "#12ce12",
                borderRadius: 50,
                padding: 8,
                marginRight: 15,
              }}>
              <Icon name="account-arrow-left" color={"#fff"} size={30} />
            </View>
            <View style={{flexDirection: "column"}}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  fontWeight: "700",
                  fontFamily: "Poppins",
                }}>
                ₹{cusGot}
              </Text>
              <Text style={{fontSize: 12, color: "#828282", fontWeight: "600"}}>
                You Got
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.box,
              {borderLeftWidth: 1, borderColor: "#c9c9c9", paddingLeft: 10},
            ]}>
            <View
              style={{
                backgroundColor: "#e23c41",
                borderRadius: 50,
                padding: 8,
                marginRight: 15,
              }}>
              <Icon name="account-arrow-right" color={"#fff"} size={30} />
            </View>
            <View style={{flexDirection: "column"}}>
              <Text style={{fontSize: 18, color: "#333", fontWeight: "700"}}>
                ₹{cusGave}
              </Text>
              <Text style={{fontSize: 12, color: "#828282", fontWeight: "600"}}>
                You Gave
              </Text>
            </View>
          </View>
        </View>
        {/* Card end */}

        {allCustomerTrnsData?.length ? (
          <CustomerTransaction allCustomerTrnsData={allCustomerTrnsData} />
        ) : (
          <CustomerTransactionEmpty />
        )}

        <View
          style={{
            position: "absolute",
            bottom: metrics.verticalScale(0),
            alignSelf: "center",
            width,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#f6f6f6",
            paddingHorizontal: 20,
            paddingVertical: 10,
            left: 0,
            borderTopWidth: 1,
            borderColor: "#c9c9c9",
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NewCustomer", {customerType: "customer"});
            }}
            style={{
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(10),
              backgroundColor: "#0a5ac9",
              borderRadius: 6,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Icon name="plus-circle" color={"#fff"} size={20} />
            <Text style={[styles.btnTxt, {color: "#fff", marginLeft: 5}]}>
              Add New Customer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Customer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF3FF",
    paddingTop: metrics.verticalScale(15),
    position: "relative",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: metrics.verticalScale(15),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#c6c6c6",
    marginBottom: 10,
  },
  box: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: '#ddd'
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0a5ac9",
    textAlign: "center",
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
