import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, {useState} from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Button} from "./";

const option = [
  {id: 1, name: "Popular"},
  {id: 2, name: "Data Addon"},
  {id: 3, name: "Cricket Packs"},
  {id: 4, name: "Smartphone"},
];

const data = [
  {id: 5, name: "Popular", Validity: 28, Data: "2.5GB/Day", Price: "239"},
  {id: 6, name: "Data Addon", Validity: 1, Data: "1GB/Day", Price: "29"},
  {id: 11, name: "Data Addon", Validity: 1, Data: "1GB/Day", Price: "11"},
  {id: 7, name: "Cricket Packs", Validity: 30, Data: "1.5GB/Day", Price: "299"},
  {id: 8, name: "Smartphone", Validity: 28, Data: "2GB/Day", Price: "169"},
  {id: 9, name: "Popular", Validity: 28, Data: "2.5GB/Day", Price: "279"},
  {id: 10, name: "Popular", Validity: 28, Data: "2.5GB/Day", Price: "189"},
];

const MobileRecharge = () => {
  const [contactIcon, setContactIcon] = useState(true);
  const [rechargePlan, setRechargePlan] = useState(true);
  const [payNow, setPayNow] = useState(false);
  const [rechargeOption, setRechargeOption] = useState(false);
  const [list, setList] = useState(true);
  const [query, setQuery] = useState("");
  const [listItem, setListItem] = useState("Popular");

  return (
    <View style={[styles.container, rechargePlan && {height: 195}]}>
      {/* TextInput Section */}
      {rechargePlan && (
        <View>
          <TextInput
            onFocus={() => setContactIcon(!contactIcon)}
            placeholder="Enter Name or Mobile Number"
            style={styles.TextInput}
          />
          {contactIcon && (
            <AntDesign
              name="contacts"
              size={20}
              style={{marginLeft: 290, marginTop: -30}}
            />
          )}

          {/* Recharge Section */}
          <Text style={styles.rechargeHeadingSection}>Recharge Section</Text>

          <View style={styles.rechargeSection}>
            <View style={styles.rechargeFirstSection}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  marginLeft: 15,
                  marginTop: 2,
                  color: "rgba(70, 69, 85, 1)",
                }}>
                ₹200
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 12,
                  marginLeft: 15,
                  marginTop: -2,
                  color: "rgba(70, 69, 85, 1)",
                }}>
                10 Apr 2022, 07:20PM
              </Text>
            </View>
            <View style={styles.rechargeSecondHeading}>
              <View style={styles.rechargeSecondSectionHeading}>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    marginRight: 15,
                    marginTop: 4,
                    color: "rgba(70, 69, 85, 1)",
                  }}>
                  Recharge On
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  left: -10,
                  top: 25,
                  flexDirection: "row",
                }}>
                <MaterialIcon
                  name="mobile-friendly"
                  size={15}
                  color="#0A5AC9"
                />
                <Text
                  style={{
                    marginTop: -2,
                    fontSize: 15,
                    fontWeight: "500",
                    marginLeft: 5,
                  }}>
                  123456789
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Submit */}
      {rechargePlan && (
        <View style={{marginTop: 20}}>
          <Button
          paddingLeft={115}
            title="See Recharge Plan"
            handleClick={() => {
              setRechargePlan(false);
              setRechargeOption(true);
              setPayNow(false);
            }}
          />
        </View>
      )}

      {/* Recharge Option Section */}
      {rechargeOption && (
        <View style={{position: "relative"}}>
          {/* TextInput  */}
          <Feather
            name="search"
            size={20}
            style={{position: "absolute", left: 28, top: 29, zIndex: 1}}
          />
          <TextInput
            onChangeText={text => setQuery(text)}
            keyboardType={"numeric"}
            placeholder="Search a Plan"
            style={[styles.TextInput, {paddingLeft: 30}]}
          />
          <View style={{flexDirection: "row", marginTop: 25, marginLeft: 5}}>
            {option.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setList(item.id);
                  setListItem(item.name);
                }}>
                <Text
                  style={[
                    {
                      marginLeft: 10,
                      fontWeight: "400",
                      fontSize: 14,
                      color: "rgba(70, 69, 85, 1)",
                    },
                    list === item.id && styles.active,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <ScrollView style={{height: 100}}>
            {data
              .filter(
                item => item.name === listItem && item?.Price?.includes(query),
              )
              .map(({id, Validity, Data, Price}) => (
                <View key={id} style={styles.rechargeOptionContainer}>
                  <Text style={styles.Price}>₹{Number(Price)}</Text>

                  <View style={{marginLeft: 50}}>
                    <Text>Validity</Text>
                    <Text>{Validity} Days</Text>
                  </View>
                  <View style={{marginLeft: 50}}>
                    <Text>Data</Text>
                    <Text>{Data}</Text>
                  </View>
                </View>
              ))}
          </ScrollView>

          <View style={{marginTop: 20}}>
            <Button
            paddingLeft={115}
              title={"Recharge Now"}
              handleClick={() => {
                setRechargePlan(false);
                setRechargeOption(false);
                setPayNow(true);
              }}
            />
          </View>
        </View>
      )}

      {/* Pay Now */}
      {payNow && (
        <View style={styles.payNowContainer}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 38,
              marginLeft: 140,
              marginTop: 10,
            }}>
            239
          </Text>
          <MaterialIcons
            name="edit"
            size={20}
            color="#0A5AC9"
            style={{position: "absolute", left: 280, top: 25}}
          />
          <View style={styles.detailsContainer}>
            <Text style={{fontSize: 15, fontWeight: "400"}}>
              All the details provided here
            </Text>
          </View>

          <Button title={'Pay Now'} paddingLeft={145}/>
        </View>
      )}
    </View>
  );
};

export default MobileRecharge;

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 355,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 20,
  },
  TextInput: {
    backgroundColor: "rgba(246, 246, 246, 1)",
    height: 40,
    width: 300,
    marginLeft: 25,
    marginTop: 20,
  },
  rechargeHeadingSection: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0A5AC9",
    marginTop: 25,
    marginLeft: 25,
  },
  rechargeSection: {
    width: 300,
    height: 50,
    backgroundColor: "#EEF3FF",
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rechargeFirstSection: {
    marginTop: 2,
  },
  rechargeSecondHeading: {
    marginRight: 10,
  },
  rechargeSecondSectionHeading: {
    position: "relative",
  },
  active: {
    backgroundColor: "#0A5AC9",
    color: "white",
    paddingHorizontal: 5,
  },
  rechargeOptionContainer: {
    marginTop: 10,
    width: "100%",
    height: 70,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#C6C6C6",
    paddingTop: 10,
    flexDirection: "row",
  },
  Price: {
    fontSize: 25,
    fontWeight: "500",
    color: "#464555",
    marginLeft: 20,
  },
  payNowContainer: {
    position: "relative",
  },
  detailsContainer: {
    marginHorizontal: 50,
    backgroundColor: "#EEF3FF",
    height: 40,
    marginTop: 40,
    padding: 10,
    paddingLeft:40,
    borderRadius: 15,
    marginBottom:80
  },
});
