import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import React, {useState, useEffect} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import TransactionEmpty from "../../Components/TransactionEmpty";
import TransactionFull from "../../Components/TransactionFull";
import metrics from "../../Constants/metrics";
import Api from "../../Services";

const width = Dimensions.get("window").width;

const Cashbook = ({navigation, route}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E8EEFF",
      paddingTop: metrics.verticalScale(10),
      position: "relative",
      flex: 1,
    },
    card: {
      width: "95%",
      backgroundColor: "#fff",
      borderRadius: 6,
      marginHorizontal: metrics.horizontalScale(10),
      borderWidth: 1,
      borderColor: "#c6c6c6",
    },
    cardBody: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    boxOne: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: metrics.verticalScale(10),
      borderRightWidth: 1,
      borderColor: "#c6c6c6",
      width: "50%",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: metrics.verticalScale(15),
      width: "50%",
    },
    cardBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderColor: "#c6c6c6",
      paddingVertical: metrics.verticalScale(7),
      borderRadius: 6,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    cashBtn: {
      paddingVertical: 10,
      borderRadius: 50,
      width: 50,
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    btnTxt: {
      fontSize: 22,
      fontWeight: "800",
      color: "#fff",
      textAlign: "center",
      marginLeft: 10,
    },
    search: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: metrics.horizontalScale(10),
      borderColor: "#c6c6c6",
      borderWidth: 1,
      borderRadius: 46,
      backgroundColor: "#f6f6f6",
    },
  });

  const [cashOutDetails, setCashOutDetails] = useState([]);
  const [cashInDetails, setCashInDetails] = useState([]);

  useEffect(() => {
    getCashOut();
    getCashIn();
  }, [route.params?.getData]);

  const getCashOut = async () => {
    try {
      const response = await Api.get("/auth/today-cashbook-out");
      if (response.data.status == 200) {
        setCashOutDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCashIn = async () => {
    try {
      const response = await Api.get("/auth/today-cashbook-in");
      if (response.data.status == 200) {
        setCashInDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#1790FF",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}>
                Cash In Hand
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#12CE12",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}>
                Today's Income
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => navigation.navigate("View Report")}>
            <Text
              style={{
                fontSize: 14,
                color: "#0A5AC9",
                fontWeight: "700",
                marginRight: 12,
                fontFamily: "Poppins",
              }}>
              View Report
            </Text>
            <Icon name="doubleright" color={"#0A5AC9"} size={16} />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, marginTop: 10}}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 20,
              paddingHorizontal: metrics.horizontalScale(20),
              backgroundColor: "#fff",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
            }}>
            <View style={styles.search}>
              <TextInput
                placeholder="Search"
                placeholderTextColor={"#828282"}
                style={{
                  width: "100%",
                  fontSize: 16,
                  color: "#000",
                  fontWeight: "500",
                  position: "relative",
                  paddingLeft: metrics.horizontalScale(10),
                  // backgroundColor:'#ddd',
                  paddingVertical: metrics.verticalScale(7),
                }}
              />
              <TouchableOpacity
                style={{position: "absolute", right: 20, alignSelf: "center"}}>
                {/* <Icon name="search" color={'#333'} size={22} /> */}
              </TouchableOpacity>
            </View>
          </View>
          <TransactionFull
            cashOutDetails={cashOutDetails}
            cashInDetails={cashInDetails}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            // width,
            position: "absolute",
            bottom: 20,
            right: 0,
            paddingHorizontal: metrics.horizontalScale(10),
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CashEntries", {name: "Cash Entries"})
            }
            style={[styles.cashBtn, {backgroundColor: "#0a5ac9"}]}>
            <Icon name="plus" color={"#fff"} size={28} />
            {/* <Text style={styles.btnTxt}>New Entries</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cashbook;
