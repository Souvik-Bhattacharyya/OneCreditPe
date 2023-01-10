import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CorrectIcon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {addRentDetails, updateRentDetails} from "../../Requests/rent";
//Redux
import {useDispatch, useSelector} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import {removeRentDetails} from "../../Redux/Action/rentActions";

const RentPeMode = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rent = useSelector(state => state.addRent);
  const rentalAllDetails = useSelector(state => state.allDetailsOfRental);

  const [bankDetails, setBankDetails] = useState({
    bank_name: "",
    branch_name: "",
    ifsc_code: "",
    account_holder_name: "",
    account_no: null,
  });

  useEffect(() => {
    setBankDetails({
      ...bankDetails,
      bank_name: rentalAllDetails.bank_name,
      branch_name: rentalAllDetails.branch_name,
      ifsc_code: rentalAllDetails.ifsc_code,
      account_holder_name: rentalAllDetails.account_holder_name,
      account_no: rentalAllDetails.account_no,
    });
  }, [rentalAllDetails]);
  console.log("rent===>", rent);
  console.log("rentalAllDetails==================>", rentalAllDetails);

  const uploadBankDetails = () => {
    if (bankDetails.account_holder_name === "") {
      Alert.alert("Please Enter Holder Name");
    } else if (bankDetails.bank_name === "") {
      Alert.alert("Please Enter Bank Name");
    } else if (bankDetails.branch_name === "") {
      Alert.alert("Please Enter Branch Name");
    } else if (bankDetails.ifsc_code === "") {
      Alert.alert("Please Enter Bank IFSC code");
    } else if (
      bankDetails.account_no === null ||
      bankDetails.account_no === ""
    ) {
      Alert.alert("Please Enter Account Number");
    } else {
      makePayment();
    }
  };

  const makePayment = async () => {
    try {
      const formData = new FormData();
      formData.append("name", rent.rent_details.name);
      formData.append("address", rent.rent_details.address);
      formData.append("mobile", rent.rent_details.mobile);
      formData.append("rent_date", rent.rent_details.rent_date);
      formData.append("rent_since", rent.rent_details.rent_since);
      formData.append("deposit_amount", rent.rent_details.deposit_amount);
      formData.append("advanced_amount", rent.rent_details.advanced_amount);
      rent.agreement !== {} &&
        formData.append("agreement_image", rent.agreement);
      rent.pan_details !== {} &&
        formData.append("pan_no", rent.pan_details.pan_no);
      rent.pan_details !== {} &&
        formData.append("pan_image", rent.pan_details.pan_img);
      formData.append("account_holder_name", bankDetails.account_holder_name);
      formData.append("bank_name", bankDetails.bank_name);
      formData.append("branch_name", bankDetails.branch_name);
      formData.append("ifsc_code", bankDetails.ifsc_code);
      formData.append("account_no", bankDetails.account_no);
      console.log("formdata---->", formData);

      if (rentalAllDetails.id) {
        // console.log("-->", rentalAllDetails);
        const responseOfUpdateRent = await updateRentDetails(
          formData,
          rentalAllDetails.id,
        );
        if (typeof responseOfUpdateRent !== "string") {
          navigation.navigate("RentPeSuccess", {rentalId: rentalAllDetails.id});
          dispatch(removeRentDetails());
          dispatch(
            notify({message: responseOfUpdateRent.message, type: "success"}),
          );
        }

        if (typeof responseOfUpdateRent === "string") {
          dispatch(notify({message: responseOfUpdateRent, type: "error"}));
        }
      } else {
        const responseOfAddRent = await addRentDetails(formData);
        if (typeof responseOfAddRent !== "string") {
          navigation.navigate("RentPeSuccess", {rentalId: responseOfAddRent});
          dispatch(removeRentDetails());
          dispatch(
            notify({message: responseOfAddRent.message, type: "success"}),
          );
        }

        if (typeof responseOfAddRent === "string") {
          dispatch(notify({message: responseOfAddRent, type: "error"}));
        }
      }
    } catch (error) {
      dispatch(notify({message: error.message, type: "error"}));
    }
  };
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
              value={bankDetails.account_holder_name}
              onChangeText={val =>
                setBankDetails({...bankDetails, account_holder_name: val})
              }
              placeholder="Holder Name"
              style={styles.textInput}
            />
            <TextInput
              value={bankDetails.bank_name}
              onChangeText={val =>
                setBankDetails({...bankDetails, bank_name: val})
              }
              placeholder="Bank Name"
              style={styles.textInput}
            />

            <TextInput
              value={bankDetails.branch_name}
              onChangeText={val =>
                setBankDetails({...bankDetails, branch_name: val})
              }
              placeholder="Branch Name"
              style={styles.textInput}
            />

            <TextInput
              value={bankDetails.ifsc_code}
              onChangeText={val =>
                setBankDetails({...bankDetails, ifsc_code: val})
              }
              placeholder="Bank IFSC Code"
              style={styles.textInput}
            />

            <TextInput
              value={bankDetails.account_no}
              onChangeText={val =>
                setBankDetails({...bankDetails, account_no: val})
              }
              style={styles.textInput}
              placeholder="Bank Account Number
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
            onPress={uploadBankDetails}
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
