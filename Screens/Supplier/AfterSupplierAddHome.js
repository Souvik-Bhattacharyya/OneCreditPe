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
import CommonHeader from "../../Components/CommonHeader";
import CustomerTransactionEmpty from "../../Components/CustomerTransactionEmpty";
import Api from "../../Services";
const Supplier = () => {
  const navigation = useNavigation();
  const [customerTransactionData, setCustomerTransactionData] = useState([]);

  useEffect(() => {
    navigation.addListener("focus", () => {
      supplierTransactions();
    });
  }, [navigation]);

  const supplierTransactions = async () => {
    try {
      const response = await Api.get("/auth/get-transaction/supplier");
      setCustomerTransactionData(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CommonHeader />
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
            backgroundColor: "#0a5ac9",
            borderBottomWidth: 1,
            borderBottomColor: "#c6c6c6",
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CustomerStack");
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
              source={require("../../Assets/add-user(Theme).png")}
              style={styles.btnIcon}
            />
            <Text style={[styles.btnTxt, {color: "#0a5ac9"}]}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SupplierStack");
            }}
            style={{
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(10),
              backgroundColor: "#0a5ac9",
              width: "50%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#fff",
              borderWidth: 4,
            }}>
            <Image
              source={require("../../Assets/manage-supplier(Light).png")}
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
          <View style={styles.box}>
            <Text style={{fontSize: 20, color: "#12CE12", fontWeight: "900"}}>
              ₹ 4,242.00
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
              Total amount purchase for Month
            </Text>
          </View>
          <View style={styles.box}>
            <Icon name="account-arrow-left" color={"#12CE12"} size={32} />
          </View>
        </View>
        <View
          style={[
            styles.card,
            {borderColor: "#c6c6c6", backgroundColor: "#fff"},
          ]}>
          <View style={styles.box}>
            <Text style={{fontSize: 20, color: "#F31B24", fontWeight: "900"}}>
              ₹ 3,560.00
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
              Total amount paid in advance
            </Text>
          </View>
          <View style={styles.box}>
            <Icon name="account-arrow-right" color={"#F31B24"} size={32} />
          </View>
        </View>
        {customerTransactionData?.length ? (
          <CustomerTransaction
            // ToGetUser={"Advance"}
            customerTransactionData={customerTransactionData}
          />
        ) : (
          <CustomerTransactionEmpty />
        )}

        <View
          style={{
            position: "absolute",
            bottom: metrics.verticalScale(0),
            alignSelf: "center",
            width: "100%",
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
              navigation.navigate("NewCustomer", {customerType: "supplier"});
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
              Add New Supplier
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Supplier;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EEFF",
    paddingTop: metrics.verticalScale(15),
    position: "relative",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: metrics.horizontalScale(20),
    paddingVertical: metrics.verticalScale(15),
    borderRadius: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  box: {
    width: "38%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
