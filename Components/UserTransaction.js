import {View, Text, StyleSheet} from "react-native";
import React from "react";
import metrics from "../Constants/metrics";
import {ToGet, ToPay} from "../Screens";
const UserTransaction = ({allTransaction}) => {
  return (
    <View style={styles.container}>
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
        {allTransaction.map((obj, index) =>
          obj.tns_type == "got" ? (
            <ToGet object={obj} key={index} />
          ) : (
            <ToPay object={obj} key={index} />
          ),
        )}
      </View>
    </View>
  );
};

export default UserTransaction;

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.verticalScale(15),
    backgroundColor: "#EEF3FF",
    flex: 1,
  },
});
