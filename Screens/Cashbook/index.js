import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, {useState, useEffect} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import TransactionEmpty from "../../Components/TransactionEmpty";
import TransactionFull from "../../Components/TransactionFull";
import metrics from "../../Constants/metrics";
import Api from "../../Services";
import CommonHeader from "../../Components/CommonHeader";
import {useDispatch} from "react-redux";

const width = Dimensions.get("window").width;

const Cashbook = ({navigation}) => {
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#EEF3FF",
      position: "relative",
      flex: 1,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 6,
      marginHorizontal: metrics.horizontalScale(15),
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
      fontWeight: "600",
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

  const [todayEntryDetails, setTodayEntryDetails] = useState([]);
  const [viewResult, setViewResult] = useState({});

  useEffect(() => {
    navigation.addListener("focus", () => {
      getTodayCashEntries();
      viewReport();
    });
  }, [navigation]);

  const getTodayCashEntries = async () => {
    try {
      const response = await Api.get("/auth/cashbook");
      if (response.status == 200 && response.data) {
        setTodayEntryDetails(response.data.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      // dispatch({message: error.message});
    }
  };

  const viewReport = async () => {
    try {
      const response = await Api.get("/auth/view_reports");
      if (response.data) {
        setViewResult(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      // dispatch()
    }
  };
  console.log("todayEntryDetails", todayEntryDetails);
  return (
    <>
      <CommonHeader color="#0a5ac9" />
      <View style={styles.container}>
        <View style={{height: 50, backgroundColor: "#0a5ac9"}}></View>
        <View style={[styles.card, {marginTop: -40}]}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#1790FF",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}>
                ???{viewResult.cash_in_hands}
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
                  color: viewResult.todays_income >= 0 ? "#12CE12" : "#C91E25",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}>
                ???{viewResult.todays_income}
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
            onPress={() =>
              navigation.navigate("View Report", {
                todayEntryDetails: todayEntryDetails,
                viewResult: viewResult,
              })
            }>
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
            {/* <Icon name="doubleright" color={"#0A5AC9"} size={16} /> */}
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, marginTop: 10}}>
          {todayEntryDetails?.length ? (
            <TransactionFull
              todayEntryDetails={todayEntryDetails}
              getTodayCashEntries={getTodayCashEntries}
              viewReport={viewReport}
              handleUpdate={entryDetails =>
                navigation.navigate("CashEntries", {
                  name: "Cash Entries",
                  data: entryDetails,
                })
              }
            />
          ) : (
            <TransactionEmpty />
          )}
        </View>

        <View
          style={{
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
            onPress={() => navigation.navigate("CashEntries")}
            style={{
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(10),
              backgroundColor: "#0a5ac9",
              borderRadius: 6,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "#333",
                fontSize: 18,
                fontWeight: "900",
                color: "#fff",
              }}>
              Create Transaction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cashbook;
