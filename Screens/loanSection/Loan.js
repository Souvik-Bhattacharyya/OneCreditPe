import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
// import images from "../../Constants/images";
// import Header from "../../Components/CommonHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import metrics from "../../Constants/metrics";
import AntDesign from "react-native-vector-icons/AntDesign";

const Loan = () => {
  return (
    <>
      {/* <Header /> */}

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.getLoan}>
            <Image
              style={styles.image}
              source={require("../../Assets/Images/loan-svg.png")}
            />
            <Text
              style={{
                color: "#464555",
                marginBottom: 10,
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
              }}>
              Get loan up to ₹10,00,00
            </Text>
            <Text
              style={{
                color: "#828282",
                fontSize: 14,
                paddingHorizontal: 25,
                fontWeight: "500",
                textAlign: "center",
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.
            </Text>
          </View>

          <View style={styles.cards}>
            <View style={styles.box}>
              <Image
                source={require("../../Assets/Images/pay.png")}
                style={styles.icons}
              />
              <Text style={styles.iconText}>Pay Daily Installments</Text>
            </View>
            <View style={styles.box}>
              <Image
                source={require("../../Assets/Images/interest.png")}
                style={styles.icons}
              />
              <Text style={styles.iconText}>Pay Daily Installments</Text>
            </View>
            <View style={styles.box}>
              <Image
                source={require("../../Assets/Images/Notebook.png")}
                style={styles.icons}
              />
              <Text style={styles.iconText}>Pay Daily Installments</Text>
            </View>
          </View>

          <View style={styles.docs}>
            <Text
              style={{
                color: "#0A5AC9",
                fontFamily: "Poppins",
                fontSize: 20,
                fontWeight: "700",
              }}>
              Loan details
            </Text>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                marginTop: metrics.verticalScale(14),
                flexDirection: "row",
              }}>
              <View>
                <Text style={styles.cost}>Ammount</Text>
                <Text style={styles.subCost}>10,000-10,00,000</Text>
              </View>
              <View style={{alignItems: "flex-end"}}>
                <Text style={styles.cost}>Daily Installment(EDI)</Text>
                <Text style={styles.subCost}>up to ₹ 4,000</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 14,
                justifyContent: "space-between",
                marginTop: metrics.verticalScale(14),
                flexDirection: "row",
              }}>
              <View>
                <Text style={styles.cost}>Interest Rate</Text>
                <Text style={styles.subCost}>1.75% - 2.50% p/m</Text>
              </View>
              <View style={{alignItems: "flex-end"}}>
                <Text style={styles.cost}>Loan Duration</Text>
                <Text style={styles.subCost}>3 - 12 Months</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#349EFF",
              paddingVertical: metrics.verticalScale(5),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              flexDirection: "row",
              // marginTop: "auto",
              // marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFFFFF",
                margin: 10,
              }}>
              Get Loan
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Loan;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: metrics.horizontalScale(15),
    height: "100%",
    backgroundColor: "#EEF3FF",
    paddingBottom: 20,
  },
  getLoan: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: metrics.horizontalScale(10),
    paddingVertical: metrics.verticalScale(15),
    borderRadius: 6,
    marginTop: metrics.verticalScale(20),
  },
  image: {
    marginBottom: 15,
    marginTop: 10,
    // width:
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: metrics.verticalScale(20),
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
  iconText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#333",
    textAlign: "center",
  },
  cost: {
    color: "#464555",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "700",
  },
  subCost: {
    color: "#828282",
    fontSize: 16,
    fontWeight: "500",
  },
});
