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
import {updateRentDetails} from "../../Redux/Action/rentActions";
import moment from "moment";
const dateType = {
  RENT_DATE: "RENT_DATE",
  RENT_SINCE: "RENT_SINCE",
};
const AddRentDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rent = useSelector(state => state.allDetailsOfRental);

  const [date, setDate] = useState(new Date());
  const [rentDetails, setRentDetails] = useState({
    name: "",
    mobile: null,
    address: "",
    rent_date: "2023-01-1",
    rent_since: "2023-01-1",
    deposit_amount: null,
    advanced_amount: null,
  });
  console.log("..............", rent);
  console.log(".......", rentDetails);

  useEffect(() => {
    const temp = {
      name: "",
      mobile: null,
      address: "",
      rent_date: "2023-01-1",
      rent_since: "2023-01-1",
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
    setRentDetails({
      ...rentDetails,
      ...temp,
    });
  }, [rent]);

  const uploadRentDetails = () => {
    if (rentDetails.name === "") {
      Alert.alert("Please Enter your name");
    } else if (rentDetails.mobile === null) {
      Alert.alert("Please Enter your mobile number");
    } else if (rentDetails.address === "") {
      Alert.alert("Please Enter your address");
    } else if (rentDetails.rent_date === "") {
      Alert.alert("Please Enter rent date");
    } else if (rentDetails.rent_since === "") {
      Alert.alert("Please Enter rent since");
    } else if (
      rentDetails.deposit_amount === null ||
      rentDetails.deposit_amount === ""
    ) {
      Alert.alert("Please Enter Deposit amount");
    } else if (
      rentDetails.advanced_amount === null ||
      rentDetails.advanced_amount === ""
    ) {
      Alert.alert("Please Enter Advanced amount");
    } else {
      dispatch(updateRentDetails({rentDetails}));
      navigation.navigate("RentAgreement");
    }
  };
  //Date picker-------------------------------------------------------------
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
      ? setRentDetails({
          ...rentDetails,
          rent_date: moment(selectedDate).format("YYYY-MM-DD"),
        })
      : setRentDetails({
          ...rentDetails,
          rent_since: moment(selectedDate).format("YYYY-MM-DD"),
        });
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
                value={rentDetails.name}
                onChangeText={val =>
                  setRentDetails({...rentDetails, name: val})
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
              value={rentDetails.mobile}
              onChangeText={val =>
                setRentDetails({...rentDetails, mobile: val})
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
              value={rentDetails.address}
              onChangeText={val =>
                setRentDetails({...rentDetails, address: val})
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
                  color: rentDetails.rent_date ? "black" : "#7C7C7D",
                }}>
                {rentDetails.rent_date ? rentDetails.rent_date : "00-00-0000"}
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
                  color: rentDetails.rent_since ? "black" : "#7C7C7D",
                }}>
                {rentDetails.rent_since ? rentDetails.rent_since : "00-00-0000"}
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
              value={rentDetails.deposit_amount}
              onChangeText={val =>
                setRentDetails({...rentDetails, deposit_amount: val})
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
              value={rentDetails.advanced_amount}
              onChangeText={val =>
                setRentDetails({...rentDetails, advanced_amount: val})
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
