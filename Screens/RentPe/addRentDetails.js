import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {Text} from "react-native-paper";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {updateRentalDetails} from "../../Redux/Action/rentActions";
const AddRentDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rent = useSelector(state => state.rentDetails);

  const [date, setDate] = useState(new Date());
  const [rentalDetails, setRentalDetails] = useState({
    name: "",
    mobile: null,
    address: "",
    rent_date: "2023-01-1",
    rent_since: "2023-01-1",
    deposit_amount: null,
    advanced_amount: null,
  });
  console.log("date", date);

  console.log("=========================>", rentalDetails);
  console.log("===========>", rent);
  const uploadRentalDetails = () => {
    if (rentalDetails.name === "") {
      Alert.alert("Please Enter your name");
    } else if (rentalDetails.mobile === null) {
      Alert.alert("Please Enter your mobile number");
    } else if (rentalDetails.address === "") {
      Alert.alert("Please Enter your address");
    } else if (rentalDetails.rent_date === "") {
      Alert.alert("Please Enter rent date");
    } else if (rentalDetails.rent_since === "") {
      Alert.alert("Please Enter rent since");
    } else if (rentalDetails.deposit_amount === null) {
      Alert.alert("Please Enter Deposit amount");
    } else if (rentalDetails.advanced_amount === null) {
      Alert.alert("Please Enter Advanced amount");
    } else {
      dispatch(updateRentalDetails({rentalDetails}));
      navigation.navigate("RentAgreement");
    }
  };
  //Date picker-------------------------------------------------------------
  const showDatepicker = () => {
    showMode("date");
  };

  const showMode = currentMode => {
    let maximumDate = new Date();
    maximumDate.setFullYear(maximumDate.getFullYear());

    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, date) => onChange(event, date, currentMode),
      mode: currentMode,
      is24Hour: false,
      minimumDate: new Date(1950, 0, 1),
      maximumDate: maximumDate,
    });
  };
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };
  //---------------------------------------------------------------

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{margin: 12}}>
            <Text>Name </Text>
            <View
              style={{
                height: 40,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#7C7C7D",
                marginTop: 10,
              }}>
              <TextInput
                style={{
                  width: "90%",
                  paddingHorizontal: 10,
                }}
                placeholder="Enter Owener Name"
                value={rentalDetails.name}
                onChangeText={val =>
                  setRentalDetails({...rentalDetails, name: val})
                }
              />
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "center",
                  borderRadius: 50,
                }}>
                <Icon name="contacts" color={"#0A5AC9"} size={16} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{margin: 12}}>
            <Text>Mobile </Text>

            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#7C7C7D",
                paddingHorizontal: 12,
                marginTop: 10,
              }}
              placeholder="Enter Owener Name"
              value={rentalDetails.mobile}
              onChangeText={val =>
                setRentalDetails({...rentalDetails, mobile: val})
              }
            />
          </View>

          <View style={{margin: 12}}>
            <Text>Address</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#7C7C7D",
                paddingHorizontal: 10,
                marginTop: 10,
              }}
              placeholder="Enter Owener Address"
              value={rentalDetails.address}
              onChangeText={val =>
                setRentalDetails({...rentalDetails, address: val})
              }
            />
          </View>

          <View style={{margin: 12}}>
            <Text>Rent Date</Text>
            <View
              style={{
                height: 40,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#7C7C7D",
                marginTop: 10,
              }}>
              <Text
                style={{
                  width: "90%",
                  paddingHorizontal: 10,
                  color: "#7C7C7D",
                }}>
                {rentalDetails.rent_date
                  ? rentalDetails.rent_date
                  : "00-00-0000"}
              </Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  // backgroundColor: "#fff",
                  paddingVertical: 5,
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={showDatepicker}>
                <DatePickerIcon name="calendar" color={"#828282"} size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{margin: 12}}>
            <Text>Rented Since</Text>
            <View
              style={{
                height: 40,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#7C7C7D",
                marginTop: 10,
              }}>
              <Text
                style={{
                  width: "90%",
                  paddingHorizontal: 10,
                  color: "#7C7C7D",
                }}>
                {rentalDetails.rent_since
                  ? rentalDetails.rent_since
                  : "00-00-0000"}
              </Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  // backgroundColor: "#fff",
                  paddingVertical: 5,
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={showDatepicker}>
                <DatePickerIcon name="calendar" color={"#828282"} size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{margin: 12}}>
            <Text>Deposit Amount</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#7C7C7D",
                padding: 10,
                marginTop: 10,
              }}
              placeholder="₹ Enter Amount"
              keyboardType="numeric"
              value={rentalDetails.deposit_amount}
              onChangeText={val =>
                setRentalDetails({...rentalDetails, deposit_amount: val})
              }
            />
          </View>

          <View style={{margin: 12}}>
            <Text>Advance Amount</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#7C7C7D",
                padding: 10,
                marginTop: 10,
              }}
              placeholder="₹ Enter Amount"
              keyboardType="numeric"
              value={rentalDetails.advanced_amount}
              onChangeText={val =>
                setRentalDetails({...rentalDetails, advanced_amount: val})
              }
            />
          </View>

          <TouchableOpacity
            onPress={uploadRentalDetails}
            style={{
              borderRadius: 20,
              backgroundColor: "#0A5AC9",
              padding: 10,
              marginVertical: 20,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddRentDetails;
