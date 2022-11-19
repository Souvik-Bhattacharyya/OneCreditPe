import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import metrics from "../Constants/metrics";
import UserTransaction from "./UserTransaction";
import PartiesHeader from "./PartiesHeader";
import Api from "../Services";
import TransactionEmpty from "./TransactionEmpty";

const CustomerHome = ({route}) => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const [allTransaction, setAllTransaction] = useState([]);
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    navigation.addListener("focus", () => {
      route.params.customerId &&
        customersAllTransaction(route.params.customerId);
    });
  }, [navigation]);

  const customersAllTransaction = async customerId => {
    try {
      const response = await Api.get(
        `/auth/transactions-by-customer/${customerId}`,
      );
      if (response.data) {
        setCustomerData(response.data);
        setAllTransaction(response.data.transactions);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      // dispatch()
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <PartiesHeader customerData={customerData} />
      <ScrollView style={{marginBottom: 60}}>
        {allTransaction?.length ? (
          <UserTransaction
            allTransaction={allTransaction}
            customersAllTransaction={customersAllTransaction}
          />
        ) : (
          <View
            style={{
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingTop: metrics.verticalScale(15),
              position: "relative",
            }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: metrics.verticalScale(20),
              }}>
              <View>
                <Image
                  source={require("../Assets/Images/add-notes.png")}
                  style={{
                    width: 220,
                    flex: 1,
                    resizeMode: "contain",
                    marginTop: "-5%",
                  }}
                />
                <View style={{alignItems: "center", marginTop: 30}}>
                  <Text
                    style={{
                      color: "#464555",
                      fontSize: 22,
                      fontWeight: "800",
                      marginBottom: 5,
                    }}>
                    No Items Found
                  </Text>
                  <Text
                    style={{
                      color: "#aaa",
                      fontSize: 18,
                      fontWeight: "500",
                      marginBottom: 5,
                    }}>
                    Click below to add some
                  </Text>
                  <Icon name="arrowdown" color={"#aaa"} size={24} />
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
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
          onPress={() =>
            navigation.navigate("CustomerStack", {
              screen: "CustomerEntries",
              params: {customerId: route.params?.customerId},
            })
          }
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: "#0a5ac9",
            borderRadius: 6,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <IconMat name="cash-plus" color={"#fff"} size={24} />
          <Text style={[styles.btnTxt, {color: "#fff", marginLeft: 5}]}>
            New Transaction
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
