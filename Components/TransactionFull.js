import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import CashIn from "./Cash/CashIn";
import CashOut from "./Cash/CashOut";
import {useSelector} from "react-redux";
import {Cashbook} from "../Screens";

const width = Dimensions.get("window").width;

const TransactionFull = ({todayEntryDetails}) => {
  const [value, setValue] = useState("");
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      position: "relative",
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

  return (
    <View style={styles.container}>
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
              paddingVertical: metrics.verticalScale(7),
            }}
            value={todayEntryDetails.payment_details}
            onChangeText={e => setValue(e)}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{width}}>
          {todayEntryDetails
            .filter(item => {
              if (!value) return true;
              if (
                item.payment_details.toLowerCase().includes(value.toLowerCase())
              ) {
                return true;
              }
            })
            .map((obj, index) =>
              obj.cb_tns_type == "in" ? (
                <CashIn object={obj} key={index} />
              ) : (
                <CashOut object={obj} key={index} />
              ),
            )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionFull;
