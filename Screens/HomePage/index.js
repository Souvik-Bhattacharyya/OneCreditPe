import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/AntDesign";
import Carousel from "../../Components/Carousel/Carousel";
import Cashbook from "../Cashbook";
import {useNavigation} from "@react-navigation/native";
import CommonHeader from "../CommonHeader";

const CustomerHome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: "#E8EEFF"}}>
      <CommonHeader />
      <View style={styles.container}>
        <View style={[styles.card, styles.shadow, {paddingBottom: 10}]}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#12CE12",
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
                To Collect
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#ed1c24",
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
                To Pay
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadow]}>
          <View style={styles.cardBody}>
            <View style={styles.boxOne}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#20409a",
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
                  color: "#20409a",
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
            onPress={() => navigation.navigate("CashBook")}>
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontWeight: "700",
                marginRight: 12,
                fontFamily: "Poppins",
              }}>
              Cashbook
            </Text>
            <Icon name="doubleright" color={"#fff"} size={16} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.shadow,
            {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              height: 130,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 6,
              marginVertical: metrics.verticalScale(10),
              paddingVertical: metrics.verticalScale(10),
              paddingHorizontal: metrics.horizontalScale(10),
            },
          ]}>
          <Carousel />
        </View>

        <TouchableOpacity
          style={[
            styles.shadow,
            {
              flexDirection: "row",
              paddingHorizontal: 20,
              height: 130,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 6,
              marginVertical: metrics.verticalScale(10),
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
          <View style={{width: "70%", paddingHorizontal: 20}}>
            <Text style={{color: "#464555", fontSize: 18, fontWeight: "700"}}>
              Easy Loan
            </Text>
            <Text style={{color: "#828282"}}>
              Get easy loan without any paperwork
            </Text>
            <View style={{marginTop: 10, justifyContent: "center"}}>
              <Text style={{color: "#20409a", fontSize: 16, fontWeight: "600"}}>
                Apply Now
                <Icon name="doubleright" color={"#20409a"} size={16} />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomerHome;

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
    paddingTop: metrics.verticalScale(10),
    borderRadius: 6,
    marginVertical: metrics.verticalScale(10),
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
    paddingVertical: metrics.verticalScale(15),
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
    backgroundColor: "#20409a",
    paddingVertical: metrics.verticalScale(6),
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: metrics.verticalScale(10),
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
});
