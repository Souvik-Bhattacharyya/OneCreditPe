import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CorrectIcon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
const RentPeMode = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            style={[
              styles.paddingHorizontal,
              {
                height: 220,
                backgroundColor: "transparent",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              },
            ]}>
            <Image
              source={require("../../Assets/Images/kyc.png")}
              style={{resizeMode: "contain", width: "50%"}}
            />
          </View>
          <View style={{margin: 15}}>
            <Text style={{fontSize: 16, fontWeight: "bold", color: "#0A5AC9"}}>
              Owener Bank Details
            </Text>

            <TextInput
              // value={bankDetails.bank_name}
              placeholder="Bank Name"
              // onChangeText={val => setBankDetails({...bankDetails, bank_name: val})}
              style={styles.textInput}
            />

            <TextInput
              // value={bankDetails.bank_name}
              placeholder="Branch Name"
              // onChangeText={val => setBankDetails({...bankDetails, bank_name: val})}
              style={styles.textInput}
            />

            <TextInput
              // value={bankDetails.ifsc}
              // onChangeText={val => setBankDetails({...bankDetails, ifsc: val})}
              style={styles.textInput}
              placeholder="Bank IFSC Code"
            />

            <TextInput
              // value={bankDetails.account_no}
              // onChangeText={val =>
              // setBankDetails({...bankDetails, account_no: val})
              // }
              style={styles.textInput}
              placeholder="Bank Account Number
"
            />
            <TextInput
              // value={bankDetails.confirm_acc_no}
              // onChangeText={val =>
              //   setBankDetails({...bankDetails, confirm_acc_no: val})
              // }
              style={styles.textInput}
              placeholder="Re-enter Bank Account Number
"
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
              }}>
              <CorrectIcon
                name="checkcircle"
                size={15}
                color="#0A5AC9"
                style={{marginTop: 14}}
              />
              <Text style={{fontSize: 13, padding: 12}}>
                Are you sure to update this all info ?
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("RentPeSuccess")}
            style={{
              borderRadius: 20,
              marginHorizontal: 15,
              padding: 10,
              marginTop: 20,
              backgroundColor: "#0A5AC9",
            }}>
            <Text
              style={{textAlign: "center", color: "#fff", fontWeight: "bold"}}>
              Make Payment
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RentPeMode;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    paddingVertical: 7,
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
