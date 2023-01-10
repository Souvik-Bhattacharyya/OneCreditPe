import React, {useState, useEffect} from "react";
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
import {
  addOrUpdateOwnerInfo,
  updateRentDetails,
} from "../../Redux/Action/rentActions";
import moment from "moment";
const dateType = {
  RENT_DATE: "RENT_DATE",
  RENT_SINCE: "RENT_SINCE",
};

const AddRentDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rent = useSelector(state => state.rent);

  const [date, setDate] = useState(new Date());
  const [ownerDetails, setOwnerDetails] = useState({
    name: "",
    mobile: null,
    address: "",
    rent_date: null,
    rent_since: null,
    deposit_amount: null,
    advanced_amount: null,
  });

  useEffect(() => {
    const temp = {
      name: "",
      mobile: null,
      address: "",
      rent_date: null,
      rent_since: null,
      deposit_amount: null,
      advanced_amount: null,
    };
    if (rent.name) temp.name = rent.name;
    if (rent.mobile) temp.mobile = rent.mobile;
    if (rent.address) temp.address = rent.address;
    if (rent.rent_date) temp.rent_date = rent.rent_date;
    if (rent.rent_since) temp.rent_since = rent.since;
    if (rent.deposit_amount) temp.deposit_amount = rent.deposit_amount;
    if (rent.advanced_amount) temp.advanced_amount = rent.advanced_amount;
    setOwnerDetails({
      ...ownerDetails,
      ...temp,
    });
  }, [rent]);

  const uploadRentDetails = () => {
    if (!ownerDetails.name) {
      Alert.alert("Please Enter your name");
    } else if (!ownerDetails.mobile) {
      Alert.alert("Please Enter your mobile number");
    } else if (!ownerDetails.address) {
      Alert.alert("Please Enter your address");
    } else if (!ownerDetails.rent_date) {
      Alert.alert("Please Enter rent date");
    } else if (!ownerDetails.rent_since) {
      Alert.alert("Please Enter rent since");
    } else if (!ownerDetails.deposit_amount) {
      Alert.alert("Please Enter Deposit amount");
    } else if (!ownerDetails.advanced_amount) {
      Alert.alert("Please Enter Advanced amount");
    } else {
      dispatch(addOrUpdateOwnerInfo(ownerDetails));
      navigation.navigate("RentAgreement");
    }
  };

  const showDatepicker = dateType => {
    showMode("date", dateType);
  };

  const showMode = (currentMode, dateType) => {
    let maximumDate = new Date();
    maximumDate.setFullYear(maximumDate.getFullYear());

    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, date) => onChange(event, date, dateType),
      mode: currentMode,
      is24Hour: false,
      minimumDate: new Date(1950, 0, 1),
      maximumDate: maximumDate,
    });
  };
  const onChange = (event, selectedDate, date_type) => {
    date_type === dateType.RENT_DATE
      ? setOwnerDetails({
          ...ownerDetails,
          rent_date: moment(selectedDate).format("YYYY-MM-DD"),
        })
      : setOwnerDetails({
          ...ownerDetails,
          rent_since: moment(selectedDate).format("YYYY-MM-DD"),
        });
    setDate(selectedDate);
  };

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
                placeholder="Enter Owner Name"
                value={ownerDetails.name}
                onChangeText={val =>
                  setOwnerDetails({...ownerDetails, name: val})
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
              placeholder="Enter Owner Name"
              value={ownerDetails.mobile}
              onChangeText={val =>
                setOwnerDetails({...ownerDetails, mobile: val})
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
              placeholder="Enter Owner Address"
              value={ownerDetails.address}
              onChangeText={val =>
                setOwnerDetails({...ownerDetails, address: val})
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
                  color: ownerDetails.rent_date ? "black" : "#7C7C7D",
                }}>
                {ownerDetails.rent_date
                  ? moment(ownerDetails.rent_date).format("YYYY--MM--DD")
                  : "0000-00-00"}
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
                onPress={() => showDatepicker(dateType.RENT_DATE)}>
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
                  color: ownerDetails.rent_since ? "black" : "#7C7C7D",
                }}>
                {ownerDetails.rent_since
                  ? moment(ownerDetails.rent_since).format("YYYY--MM--DD")
                  : "0000-00-00"}
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
                onPress={() => showDatepicker(dateType.RENT_SINCE)}>
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
              value={ownerDetails.deposit_amount}
              onChangeText={val =>
                setOwnerDetails({...ownerDetails, deposit_amount: val})
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
              value={ownerDetails.advanced_amount}
              onChangeText={val =>
                setOwnerDetails({...ownerDetails, advanced_amount: val})
              }
            />
          </View>

          <TouchableOpacity
            onPress={uploadRentDetails}
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
