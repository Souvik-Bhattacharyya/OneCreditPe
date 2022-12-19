import {View, Text, StyleSheet} from "react-native";
import React, {useState, useEffect} from "react";
import metrics from "../Constants/metrics";
import {ToGet, ToPay} from "../Screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const UserTransaction = ({
  allTransaction,
  customersAllTransaction,
  customerType,
}) => {
  console.log("allTransaction", allTransaction);
  let totalAmount = 0;
  for (let i of allTransaction) {
    i.tns_type == "got" || i.tns_type == "advance"
      ? (totalAmount = totalAmount + i?.amount)
      : (totalAmount = totalAmount - i?.amount);
  }

  const Advance = () => (
    <View
      style={[styles.card, {borderColor: "#c6c6c6", backgroundColor: "#fff"}]}>
      <View style={styles.box}>
        <Text style={{fontSize: 20, color: "#12CE12", fontWeight: "900"}}>
          ₹ {totalAmount}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
          Total amount paid in advance
        </Text>
      </View>
      <View style={styles.box}>
        <Icon name="account-arrow-left" color={"#12CE12"} size={32} />
      </View>
    </View>
  );

  const Give = () => (
    <View
      style={[styles.card, {borderColor: "#c6c6c6", backgroundColor: "#fff"}]}>
      <View style={styles.box}>
        <Text style={{fontSize: 20, color: "#F31B24", fontWeight: "900"}}>
          ₹ {totalAmount}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
          Total amount you will give
        </Text>
      </View>
      <View style={styles.box}>
        <Icon name="account-arrow-left" color={"#12CE12"} size={32} />
      </View>
    </View>
  );

  const Purchase = () => (
    <View
      style={[styles.card, {borderColor: "#c6c6c6", backgroundColor: "#fff"}]}>
      <View style={styles.box}>
        <Text style={{fontSize: 20, color: "#F31B24", fontWeight: "900"}}>
          ₹ {totalAmount}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
          Total amount you have Purchase
        </Text>
      </View>
      <View style={styles.box}>
        <Icon name="account-arrow-right" color={"#F31B24"} size={32} />
      </View>
    </View>
  );

  const Got = () => (
    <View
      style={[styles.card, {borderColor: "#c6c6c6", backgroundColor: "#fff"}]}>
      <View style={styles.box}>
        <Text style={{fontSize: 20, color: "#12CE12", fontWeight: "900"}}>
          ₹ {totalAmount}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={{color: "#000", fontSize: 14, fontWeight: "700"}}>
          Total amount you will got
        </Text>
      </View>
      <View style={styles.box}>
        <Icon name="account-arrow-right" color={"#F31B24"} size={32} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {allTransaction.find(e => e.cus_type === "supplier")
        ? totalAmount > 0
          ? Advance()
          : Purchase()
        : totalAmount > 0
        ? Got()
        : Give()}

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
          trns.tns_type == "got" || trns.tns_type == "advance" ? (
            <ToGet
              trnsDetails={trns}
              key={index}
              customersAllTransaction={customersAllTransaction}
            />
          ) : (
            <ToPay
              trnsDetails={trns}
              key={index}
              customersAllTransaction={customersAllTransaction}
            />
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
