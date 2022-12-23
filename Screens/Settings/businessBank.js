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
import Api from "../../Services";
const BusinessBank = ({navigation}) => {
  const UserDetails = useSelector(state => state.auth.user);
  // const BankDetails = useSelector(state => state.auth.business);
  const [bankDetails, setBankDetails] = useState();
  console.log("===============================>", UserDetails);
  useEffect(() => {
    getBankDetails();
  }, []);
  const getBankDetails = async () => {
    try {
      const response = await Api.get(`/auth/show-user/${UserDetails.id}`);
      console.log("bank response", response);
      if (response.data) {
        setBankDetails(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      // dispatch()
    }
  };
  console.log("bankDetails", bankDetails);
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
                {bankDetails.bank.bank_name}
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
                {bankDetails.bank.ifsc}
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
                {bankDetails.bank.account_no}
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
              onPress={() => navigation.navigate("AddBusinessDetails")}>
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
              <Text style={{fontSize: 16}}>
                {bankDetails.business.bns_address}
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
                Business Type
              </Text>
              <Text style={{fontSize: 16}}>
                {bankDetails.business.bns_type}
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
              <Text style={{fontSize: 16, fontWeight: "bold"}}>GSTIN</Text>
              <Text style={{fontSize: 16}}>
                {bankDetails.business.gstin_no}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BusinessBank;
