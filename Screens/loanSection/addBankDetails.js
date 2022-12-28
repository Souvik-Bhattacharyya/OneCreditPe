import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import React, {useEffect, useState} from "react";
import CorrectIcon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
import Api from "../../Services";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
const AddBankDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [bankDetails, setBankDetails] = useState({
    bank_name: "",
    ifsc: "",
    account_no: null,
    confirm_acc_no: null,
  });
  console.log("----------->", route.params?.businessId);

  useEffect(() => {
    setBankDetails({
      ...bankDetails,
      bank_name: route.params.bankInfo.bank_name,
      ifsc: route.params.bankInfo.ifsc,
      account_no: route.params.bankInfo.account_no,
      confirm_acc_no: route.params.bankInfo.account_no,
    });
  }, [route.params?.bankInfo]);
  console.log(
    "------------------------------------------------------>",
    bankDetails,
  );
  const updateBank = async () => {
    try {
      const formdata = new FormData();
      formdata.append("bank_name", bankDetails.bank_name);
      formdata.append("account_holder_name", "holder name");
      formdata.append("ifsc", bankDetails.ifsc);

      if (bankDetails.account_no == bankDetails.confirm_acc_no) {
        formdata.append("account_no", bankDetails.confirm_acc_no);
        console.log(formdata);
        const response = await Api.postForm(
          `/auth/business-bank/${route.params?.businessId}?_method=put`,
          formdata,
        );
        console.log(response.data);

        if (response.data.status == 200) {
          setBankDetails({
            ...bankDetails,
            bank_name: "",
            ifsc: "",
            account_no: "",
            confirm_acc_no: "",
          });
          navigation.replace("BusinessBank");
          route.params?.getBankDetails();
          dispatch(notify({message: response.data.message}));
        }
      } else {
        Alert.alert("Confirm the account number");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#D2D2D2",
      }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          height: "100%",
        }}>
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Enter Your Bank Details
        </Text>
        <TextInput
          value={bankDetails.bank_name}
          placeholder="Bank Name"
          onChangeText={val => setBankDetails({...bankDetails, bank_name: val})}
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />

        <TextInput
          value={bankDetails.ifsc}
          onChangeText={val => setBankDetails({...bankDetails, ifsc: val})}
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Bank IFSC Code"
        />
        <TouchableOpacity onPress={() => navigation.navigate("FindIfsc")}>
          <Text
            style={{
              position: "absolute",
              right: 20,
              bottom: 15,
              fontSize: 12,
              color: "#0A5AC9",
            }}>
            Find IFSC
          </Text>
        </TouchableOpacity>
        <TextInput
          value={bankDetails.account_no}
          onChangeText={val =>
            setBankDetails({...bankDetails, account_no: val})
          }
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Bank Account Number
"
        />
        <TextInput
          value={bankDetails.confirm_acc_no}
          onChangeText={val =>
            setBankDetails({...bankDetails, confirm_acc_no: val})
          }
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
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
        <TouchableOpacity
          onPress={updateBank}
          style={{
            width: "100%",
            backgroundColor: "#0A5AC9",
            marginTop: 10,
            marginBottom: 20,
            justifyContent: "center",
            borderRadius: 50,
            flexDirection: "row",
            position: "absolute",
            bottom: -9,
            alignSelf: "center",
          }}>
          <Text
            style={{
              fontSize: 15,

              color: "#FFFFFF",
              margin: 10,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBankDetails;
