import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import {Divider} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import {showRentDetails} from "../../Requests/rent";
import {useNavigation} from "@react-navigation/native";
import {
  addOrUpdateAgreement,
  addOrUpdateBank,
  addOrUpdateOwnerInfo,
  addOrUpdatePanDetails,
} from "../../Redux/Action/rentActions";
const ShowRentDetails = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [rentalDetails, setRentalDetails] = useState({});

  useEffect(() => {
    showDetailsOfRental(route.params.rentId);
  }, [route.params?.rentId]);

  const showDetailsOfRental = async rentId => {
    try {
      const response = await showRentDetails(rentId);

      if (response && typeof response !== "string") {
        setRentalDetails(response.data);
        dispatch(
          addOrUpdateOwnerInfo({
            name: response.data.name,
            address: response.data.address,
            mobile: response.data.mobile,
            rent_date: response.data.rent_date,
            rent_since: response.data.rent_since,
            deposit_amount: response.data.deposit_amount,
            advanced_amount: response.data.advanced_amount,
          }),
        );
        // if (response.data.agreement)
        //   dispatch(
        //     addOrUpdateAgreement({
        //       mimeType: response.data.agreement.type,
        //       uri: response.data.agreement.uri,
        //       name: response.data.agreement.name,
        //     }),
        //   );

        // if (response.data.pan_image) {
        //   dispatch(
        //     addOrUpdatePanDetails({
        //       pan_no: response.data.pan_no,
        //       mimeType: response.data.pan_image.type,
        //       uri: response.data.pan_image.uri,
        //       name: response.data.pan_image.name,
        //     }),
        //   );
        // }

        dispatch(
          addOrUpdateBank({
            bank_name: response.data.bank_name,
            branch_name: response.data.branch_name,
            ifsc_code: response.data.ifsc_code,
            account_holder_name: response.data.account_holder_name,
            account_no: response.data.account_no,
          }),
        );
      } else {
        dispatch(notify({message: response, type: "error"}));
      }
    } catch (error) {
      dispatch(notify({message: error.message, type: "error"}));
    }
  };

  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontSize: 17,
          fontWeight: "bold",
          color: "#0A5AC9",
          padding: 20,
          textDecorationLine: "underline",
        }}>
        Owener Info
      </Text>
      <SafeAreaView
        style={{height: "80%", paddingVertical: 10, paddingHorizontal: 15}}>
        <ScrollView>
          <Text style={styles.text}>Name</Text>
          <Text style={{paddingVertical: 5}}>{rentalDetails.name}</Text>
          <Divider style={styles.divider} />

          <Text style={styles.text}>Address</Text>
          <Text style={{paddingVertical: 5}}>{rentalDetails.address}</Text>
          <Divider style={styles.divider} />

          <Text style={styles.text}>Bank Details</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Bank Name :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              {rentalDetails.bank_name}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Branch :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              {rentalDetails.branch_name}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>IFSC No :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              {rentalDetails.ifsc_code}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Acc No :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              {rentalDetails.account_no}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Mobile No :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              {rentalDetails.mobile}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>Deposit Amount</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                ₹ {rentalDetails.deposit_amount}
              </Text>
            </View>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>* Advance Amount</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                ₹ {rentalDetails.advanced_amount}
              </Text>
            </View>
          </View>
          <Divider style={styles.divider} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>* Rent date</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                {rentalDetails.rent_date}
              </Text>
            </View>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>* Rented since</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                {rentalDetails.rent_since}
              </Text>
            </View>
          </View>
          <Divider style={styles.divider} />

          <Text style={styles.text}>* Add Agreement</Text>
          <Text
            style={{
              textAlign: "justify",
              //   paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            {rentalDetails.agreement
              ? rentalDetails.agreement
              : "No files are submitted"}
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.text}>* PAN Number</Text>
          <Text
            style={{
              textAlign: "justify",
              //   paddingHorizontal: 20,
              paddingBottom: 40,
            }}>
            {rentalDetails.pan_no}
          </Text>

          {/* <Divider style={styles.divider} /> */}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddRentDetails", {rentId: rentalDetails.id})
        }
        style={{
          backgroundColor: "#0A5AC9",
          width: "10%",
          display: "flex",
          alignItems: "center",
          marginHorizontal: "85%",
          marginBottom: 30,
          borderRadius: 10,
        }}>
        <Icon
          name="edit"
          color="#0A5AC9"
          size={20}
          style={{marginVertical: 8, color: "#fff"}}
        />
      </TouchableOpacity>
    </>
  );
};

export default ShowRentDetails;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0A5AC9",
    paddingTop: 10,
  },
  divider: {borderWidth: 1, borderColor: "#c6c6c6", marginTop: 10},
});
