import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";
import { Calendar, CalendarList } from "react-native-calendars";
import CashIn from "../../Components/Cash/CashIn";
import CashOut from "../../Components/Cash/CashOut";
import moment from "moment";

const width = Dimensions.get('window').width;

const ViewReport = ({navigation}) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showDate1, setShowDate1] = useState(new Date());
  const [showDate2, setShowDate2] = useState(new Date());
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
        </View>

        <View>
          <View
            style={{
              marginTop: metrics.verticalScale(30),
              marginBottom: metrics.verticalScale(20),
              borderBottomWidth: 1.5,
              borderBottomColor: "#828282",
              paddingVertical: metrics.verticalScale(20),
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <TouchableOpacity onPress={() => setShowModal1(true)}
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "50%",
                borderRightColor: "#828282",
                borderRightWidth: 1,
              }}>
              <View>
                <Icon name="calendar" size={22} color={"#0A5AC9"} />
              </View>
              <View>
                <Text style={{ color: "#0A5AC9" }}>From Date</Text>
                <Text
                  style={{ color: "#0A5AC9", fontSize: 16, fontWeight: "700" }}>
                  {moment(showDate1).format("ll")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowModal2(true)}
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "50%",
                alignItems: "center",
              }}>
              <TouchableOpacity>
                <Icon name="calendar" size={22} color={"#349EFF"} />
              </TouchableOpacity>
              <View>
                <Text style={{ color: "#349EFF" }}>To Date</Text>
                <Text
                  style={{ color: "#349EFF", fontSize: 16, fontWeight: "700" }}>
                  {moment(showDate2).format("ll")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <CashOut />
          <CashIn />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width,
            position: "absolute",
            bottom: 20,
            paddingHorizontal: metrics.horizontalScale(10),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CashEntries')}
            style={[styles.cashBtn, { backgroundColor: "#EB707C" }]}>
            <Text style={styles.btnTxt}>Cash Out</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CashEntries')}
            style={[styles.cashBtn, { backgroundColor: "#85D098" }]}>
            <Text style={styles.btnTxt}>Cash In</Text>
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
              style={{ borderRadius: 10, width: "100%" }}
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
              style={{ borderRadius: 10, width: "100%" }}
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
    paddingHorizontal: metrics.horizontalScale(20),
    backgroundColor: "#E8EEFF",
    paddingVertical: metrics.verticalScale(15),
    position: "relative",
    flex: 1,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: metrics.verticalScale(10),
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
    borderRightWidth: 2,
    borderColor: "#ccc",
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
    marginTop: metrics.verticalScale(10)
  },
  cashBtn: {
    paddingVertical: 10,
    borderRadius: 50,
    width: '48%',
  },
  btnTxt: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    textAlign: 'center'
  },
});