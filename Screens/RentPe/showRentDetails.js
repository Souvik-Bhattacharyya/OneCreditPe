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
import Icon from "react-native-vector-icons/AntDesign";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import {showRentDetails} from "../../Requests/rent";

const ShowRentDetails = ({route}) => {
  const dispatch = useDispatch();
  const [rentalDetails, setRentalDetails] = useState({});

  useEffect(() => {
    showDetailsOfRental(route.params.rentalId);
  }, [route.params?.rentalId]);

  const showDetailsOfRental = async rentalId => {
    try {
      const response = await showRentDetails(rentalId);

      if (response && typeof response !== "string") {
        setRentalDetails(response.data);
      } else {
        dispatch(notify({message: response, type: "error"}));
      }
    } catch (error) {
      dispatch(notify({message: error.message, ype: "error"}));
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
      <SafeAreaView style={{paddingVertical: 20, paddingHorizontal: 15}}>
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

          <Divider style={styles.divider} />
        </ScrollView>
      </SafeAreaView>
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
