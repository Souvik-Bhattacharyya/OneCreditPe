import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import React, {useState, useEffect} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";
import {Calendar} from "react-native-calendars";
import TransactionFull from "../../Components/TransactionFull";
import moment from "moment";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import TransactionEmpty from "../../Components/TransactionEmpty";
const width = Dimensions.get("window").width;
import Api from "../../Services";

const ViewReport = ({navigation, route}) => {
  const {todayEntryDetails, viewResult} = route.params || {};
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateFrom, setDateFrom] = useState(new Date());

  const onChange = (event, selectedDate, type) => {
    const currentDate = selectedDate;
    if (type == "from") {
      setDateFrom(currentDate);
    } else {
      setDate(currentDate);
    }
  };
  const showDatepicker = type => {
    showMode("date", type);
  };
  const showMode = (currentMode, type) => {
    let maximumDate = new Date();
    maximumDate.setFullYear(maximumDate.getFullYear());

    DateTimePickerAndroid.open({
      value: date || new Date(),
      onChange: (event, selectedDate) => onChange(event, selectedDate, type),
      mode: currentMode,
      is24Hour: true,
      minimumDate: new Date(1950, 0, 1),
      maximumDate: maximumDate,
    });
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
                ₹{viewResult.cash_in_hands}
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
                ₹{viewResult.todays_income}
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
        </View>

        <View style={{backgroundColor: "#fff", marginTop: 15}}>
          <View
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: "#c6c6c6",
              paddingVertical: metrics.verticalScale(20),
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "50%",
                borderRightColor: "#c6c6c6",
                borderRightWidth: 1,
              }}
              onPress={() => showDatepicker("from")}>
              <Icon name="calendar" size={22} color={"#0A5AC9"} />

              <View>
                <Text style={{color: "#0A5AC9"}}>From Date</Text>
                <Text
                  style={{color: "#0A5AC9", fontSize: 16, fontWeight: "700"}}>
                  {moment(dateFrom).format("ll")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "50%",
                alignItems: "center",
              }}
              onPress={() => showDatepicker("to")}>
              <Icon name="calendar" size={22} color={"#349EFF"} />

              <View>
                <Text style={{color: "#349EFF"}}>To Date</Text>
                <Text
                  style={{color: "#349EFF", fontSize: 16, fontWeight: "700"}}>
                  {moment(date).format("ll")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {todayEntryDetails?.length ? (
          <TransactionFull todayEntryDetails={todayEntryDetails} />
        ) : (
          <TransactionEmpty />
        )}

        <View
          style={{
            // position: "absolute",
            // bottom: metrics.verticalScale(0),
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
            style={{
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(15),
              backgroundColor: "#0a5ac9",
              borderRadius: 6,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "#333",
                fontSize: 16,
                fontWeight: "900",
                color: "#fff",
              }}>
              Download PDF
            </Text>
          </TouchableOpacity>
        </View>

        <Modal visible={showModal1} transparent animationType="fade">
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#000000aa",
            }}>
            <Calendar
              style={{borderRadius: 10, width: "100%"}}
              onDayPress={date => {
                setShowDate1(date);
                setShowModal1(false);
              }}
              enableSwipeMonths={true}
            />
          </View>
        </Modal>
        <Modal visible={showModal2} transparent animationType="fade">
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              backgroundColor: "#000000aa",
            }}>
            <Calendar
              style={{borderRadius: 10, width: "100%"}}
              onDayPress={date => {
                setShowDate2(date);
                setShowModal2(false);
              }}
              enableSwipeMonths={true}
            />
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ViewReport;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EEFF",
    paddingTop: metrics.verticalScale(15),
    position: "relative",
    flex: 1,
  },
  card: {
    width: "95%",
    backgroundColor: "#fff",
    paddingVertical: metrics.verticalScale(10),
    marginHorizontal: metrics.horizontalScale(10),
    borderRadius: 6,
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxOne: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    paddingVertical: metrics.verticalScale(15),
    borderRightWidth: 1,
    borderColor: "#c6c6c6",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: metrics.horizontalScale(40),
    paddingVertical: metrics.verticalScale(15),
    // backgroundColor: '#ccc'
  },
  cardBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "dodgerblue",
    paddingVertical: metrics.verticalScale(6),
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: metrics.verticalScale(10),
  },
  cashBtn: {
    paddingVertical: 10,
    borderRadius: 50,
    width: "48%",
  },
  btnTxt: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
