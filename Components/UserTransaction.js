import {View, Text, StyleSheet} from "react-native";
import React from "react";
import metrics from "../Constants/metrics";
import {ToGet, ToPay} from "../Screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const UserTransaction = ({allTransaction}) => {
  return (
    <View style={styles.container}>
      {/* Card Started */}

      {/* get */}
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
            Total amount you will get
          </Text>
        </View>
        <View style={styles.box}>
          <Icon name="account-arrow-left" color={"#12CE12"} size={32} />
        </View>
      </View>

      {/* pay */}
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
            Total amount you have to pay
          </Text>
        </View>
        <View style={styles.box}>
          <Icon name="account-arrow-right" color={"#F31B24"} size={32} />
        </View>
      </View>

      {/* Card end */}

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 14, color: "#828282", fontWeight: "600"}}>
          Date
        </Text>
      </View>
      <View>
        {allTransaction.map((trns, index) =>
          trns.tns_type == "got" ? (
            <ToGet trnsDetails={trns} key={index} />
          ) : (
            <ToPay trnsDetails={trns} key={index} />
          ),
        )}
      </View>
    </View>
  );
};

export default UserTransaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF3FF",
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
    color: "#0a5ac9",
    textAlign: "center",
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
