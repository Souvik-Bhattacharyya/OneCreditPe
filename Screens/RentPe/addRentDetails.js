import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {Text} from "react-native-paper";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const addRentDetails = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
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
                // value={number}
                // onChangeText={onChangeNumber}
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
              // value={number}
              // onChangeText={onChangeNumber}
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
                00-00-0000
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
                00-00-0000
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
              // value={number}
              // onChangeText={onChangeNumber}
              keyboardType="numeric"
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
              // value={number}
              // onChangeText={onChangeNumber}
              placeholder="₹ Enter Amount"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("RentAgreement")}
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

export default addRentDetails;
