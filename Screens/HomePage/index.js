import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import React, { useEffect } from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/AntDesign";
import Carousel from "../../Components/Carousel/Carousel";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../Components/CommonHeader";
// import {useDispatch} from "react-redux";
// import {logout} from "../../Redux/Action/authActions";

const CustomerHome = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const width = Dimensions.get('window').width;

  return (
    <>
      <CommonHeader />
      <View style={styles.container}>
        <View style={{ height: 50, backgroundColor: '#0a5ac9' }}></View>
        <View style={[styles.card, styles.shadow, { marginTop: -40 }]}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#12CE12",
                  fontWeight: "900",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "900",
                  fontFamily: "Roboto",
                }}>
                To Collect
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#ED1C24",
                  fontWeight: "900",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "900",
                  fontFamily: "Roboto",
                }}>
                To Pay
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => navigation.navigate("Cashbook", {
              screen: 'View Report'
            })}>
            <Text
              style={{
                fontSize: 16,
                color: "#0A5AC9",
                fontWeight: "700",
                marginRight: 12,
                fontFamily: "Poppins",
              }}>
              Parties
            </Text>
            <Icon name="doubleright" color={"#0A5AC9"} size={16} />
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadow]}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#0A5AC9",
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}>
                Cash In Hand
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#0A5AC9",
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}>
                ₹ 0
              </Text>
              <Text
                style={{
                  color: "#828282",
                  fontSize: 14,
                  fontWeight: "600",
                  fontFamily: "Roboto",
                }}>
                Today's Income
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => navigation.navigate("Cashbook", {
              screen: 'Cash Book'
            })}>
            <Text
              style={{
                fontSize: 16,
                color: "#0A5AC9",
                fontWeight: "700",
                marginRight: 12,
                fontFamily: "Poppins",
              }}>
              Cashbook
            </Text>
            <Icon name="doubleright" color={"#0A5AC9"} size={16} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.shadow,
            {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 6,
              marginVertical: metrics.verticalScale(10),
              paddingVertical: metrics.verticalScale(10),
              paddingHorizontal: metrics.horizontalScale(10),
              marginHorizontal: metrics.horizontalScale(15),
            },
          ]}>
          <Carousel />
        </View>

        <View
          style={[
            styles.shadow,
            {
              flexDirection: "row",
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(15),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 6,
              marginVertical: metrics.verticalScale(10),
              borderColor: "#c6c6c6",
              marginHorizontal: metrics.horizontalScale(15),
            },
          ]}>
          <View
            style={{
              width: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image source={require("../../Assets/loanSec.png")} />
          </View>
          <View style={{ width: "70%", paddingHorizontal: 20 }}>
            <Text style={{ color: "#464555", fontSize: 18, fontWeight: "800" }}>
              Easy Loan
            </Text>
            <Text style={{ color: "#828282", fontWeight: '400' }}>
              Get easy loan without any paperwork
            </Text>
            <TouchableOpacity style={{ marginTop: 10, justifyContent: "center" }}>
              <Text style={{ color: "#0A5AC9", fontSize: 16, fontWeight: "800" }}>
                Apply Now
                <Icon name="doubleright" color={"#0A5AC9"} size={16} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: metrics.horizontalScale(15),
    backgroundColor: "#E8EEFF",
    position: "relative",
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    marginVertical: metrics.verticalScale(10),
    marginHorizontal: metrics.horizontalScale(15),
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
    borderColor: "#A6B3D7",
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 3,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0a5ac9",
    textAlign: "center",
  },
  btnIcon: {
    width: 24,
    height: 24
  },
});
