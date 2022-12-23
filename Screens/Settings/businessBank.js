import React, {useEffect, useState} from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {Text} from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import UpdateIcon from "react-native-vector-icons/Feather";
import {useSelector} from "react-redux";
const BusinessBank = ({navigation}) => {
  const UserDetails = useSelector(state => state.auth);
  console.log("===============================>", UserDetails);
  return (
    <>
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            justifyContent: "flex-start",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}>
            <Text style={{fontWeight: "bold"}}>Bank Info :</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddBankDetails", {
                  businessId: UserDetails.business.id,
                })
              }>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>Bank Name</Text>
              <Text style={{fontSize: 14}}>
                xxx
                {/* {route.params?.bankData?.bank_name} */}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Bank IFSC code
              </Text>
              <Text style={{fontSize: 16}}>
                xxx
                {/* {route.params?.bankData?.ifsc} */}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Bank Account Number
              </Text>
              <Text style={{fontSize: 16}}>
                {/* {route.params?.bankData?.account_no} */}
                xxx
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 30,
            }}>
            <Text style={{fontWeight: "bold"}}>Financial Info :</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddBusinessDetails", {
                  businessId: UserDetails.business.id,
                })
              }>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Business Address
              </Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Business Type
              </Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>GSTIN</Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BusinessBank;
