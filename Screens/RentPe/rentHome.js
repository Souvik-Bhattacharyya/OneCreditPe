import React, {useState, useEffect} from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {Text} from "react-native-paper";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const rentHome = () => {
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

  const homeRent = () => (
    <View
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        background: "#FFFFFF",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      }}>
      <View style={{width: "80%", display: "flex", flexDirection: "row"}}>
        <Icon
          name="bank"
          color={"#0A5AC9"}
          size={30}
          style={{marginVertical: 3}}
        />
        <View style={{paddingLeft: 5}}>
          <Text style={{fontSize: 15}}>Ankita</Text>
          <Text style={{fontSize: 12}}>Home rent</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          // backgroundColor: "#fff",
          paddingVertical: 5,
          alignItems: "center",
          borderRadius: 50,
        }}>
        {/* <DatePickerIcon name="calendar" color={"#828282"} size={24} /> */}
        <Icon
          name="calendar"
          color="#0A5AC9"
          size={16}
          style={{marginVertical: 8}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="delete"
          color={"red"}
          size={16}
          style={{marginVertical: 8}}
        />
      </TouchableOpacity>
    </View>
  );

  const carRent = () => (
    <View
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        background: "#FFFFFF",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      }}>
      <View style={{width: "80%", display: "flex", flexDirection: "row"}}>
        <Icon
          name="car"
          color={"#0A5AC9"}
          size={30}
          style={{marginVertical: 3}}
        />
        <View style={{paddingLeft: 5}}>
          <Text style={{fontSize: 15}}>Ankita</Text>
          <Text style={{fontSize: 12}}>Car rent</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          // backgroundColor: "#fff",
          paddingVertical: 5,
          alignItems: "center",
          borderRadius: 50,
        }}>
        {/* <DatePickerIcon name="calendar" color={"#828282"} size={24} /> */}

        <Icon
          name="calendar"
          color="#0A5AC9"
          size={16}
          style={{marginVertical: 8}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="delete"
          color={"red"}
          size={16}
          style={{marginVertical: 8}}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <View
        style={[
          styles.paddingHorizontal,
          {
            height: 180,
            backgroundColor: "transparent",
            justifyContent: "center",
          },
        ]}>
        <Image
          source={require("../../Assets/Images/carousel.jpg")}
          style={{resizeMode: "contain", width: "100%"}}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingHorizontal: 10,
          paddingVertical: 10,
          color: "#0A5AC9",
        }}>
        Pay for Rentals
      </Text>
      <SafeAreaView style={{height: "50%"}}>
        <ScrollView>
          {homeRent()}
          {homeRent()}
          {homeRent()}
          {carRent()}
          {carRent()}
          {carRent()}
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddRentDetails")}
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "row",
          // paddingVertical: 5,
          paddingHorizontal: 10,
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: "#0A5AC9",
          marginHorizontal: "57%",
          marginVertical: 10,
        }}>
        <Icon
          name="plus"
          color={"#fff"}
          size={16}
          style={{marginVertical: 8, paddingHorizontal: 5}}
        />
        <Text style={{color: "#fff"}}>Add Rent Details</Text>
      </TouchableOpacity>
    </>
  );
};

export default rentHome;
