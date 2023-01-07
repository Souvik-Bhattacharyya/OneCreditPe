import React, {useState, useEffect} from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import {Text} from "react-native-paper";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import Api from "../../Services";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import {updateUser} from "../../Redux/Action/authActions";
import {useSelector} from "react-redux";
const RentHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const user = useSelector(state => state?.auth.user);
  const [rentals, setRentals] = useState([]);
  const [showBox, setShowBox] = useState(true);
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
  const rentalsDetails = async () => {
    try {
      const response = await Api.get(`/auth/rent-owner`);

      if (response.status === 200) {
        setRentals(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async id => {
    try {
      const response = await Api.delete(`/auth/rent-owner/${id}`);

      if (response.status === 200) {
        dispatch(notify({message: response.data.message}));
        rentalsDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    rentalsDetails();
  }, []);

  const showConfirmDialog = id => {
    return Alert.alert("", "Are you sure you want to delete this entry?", [
      {
        text: "Yes",
        onPress: () => handleDelete(id),
      },

      {
        text: "No",
      },
    ]);
  };
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: 300,
      height: 300,
      backgroundColor: "red",
      marginBottom: 30,
    },
    text: {
      fontSize: 30,
    },
  });
  console.log("rentals", rentals);
  const HomeRent = () => (
    <View
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        background: "#FFFFFF",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
      }}>
      {rentals.map(r => {
        return (
          <>
            <View
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-around",
              }}>
              <Icon
                name="bank"
                color={"#0A5AC9"}
                size={30}
                style={{marginVertical: 3}}
              />
              <View style={{paddingLeft: 5}}>
                <Text style={{fontSize: 15}}>{r.name}</Text>
                <Text style={{fontSize: 12}}>{r.rent_type}</Text>
              </View>
              <View style={{flexDirection: "row", left: 180}}>
                <TouchableOpacity>
                  <Icon
                    name="calendar"
                    color="#0A5AC9"
                    size={15}
                    style={{marginVertical: 8}}
                  />
                </TouchableOpacity>
                {showBox && <View></View>}
                <TouchableOpacity
                  onPress={() => showConfirmDialog(r.id)}
                  style={{paddingLeft: 10}}>
                  <Icon
                    name="delete"
                    color={"red"}
                    size={16}
                    style={{marginVertical: 8}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
      })}
    </View>
  );

  // const CarRent = () => (
  //   <View
  //     style={{
  //       width: "95%",
  //       display: "flex",
  //       flexDirection: "row",
  //       justifyContent: "space-around",
  //       paddingHorizontal: 5,
  //       paddingVertical: 10,
  //       marginHorizontal: 10,
  //       borderRadius: 10,
  //       background: "#FFFFFF",
  //       boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
  //     }}>
  //     <View style={{width: "80%", display: "flex", flexDirection: "row"}}>
  //       <Icon
  //         name="car"
  //         color={"#0A5AC9"}
  //         size={30}
  //         style={{marginVertical: 3}}
  //       />
  //       <View style={{paddingLeft: 5}}>
  //         {rentals.map(r => {
  //           return (
  //             <>
  //               <Text style={{fontSize: 15}}>{r.name}</Text>
  //               <Text style={{fontSize: 12}}>{r.rent_type}</Text>
  //             </>
  //           );
  //         })}
  //       </View>
  //     </View>

  //     <TouchableOpacity
  //     // style={{
  //     //   height: 40,
  //     //   width: 40,
  //     //   // backgroundColor: "#fff",
  //     //   paddingVertical: 5,
  //     //   alignItems: "center",
  //     //   borderRadius: 50,
  //     // }}
  //     >
  //       <Icon
  //         name="calendar"
  //         color="#0A5AC9"
  //         size={15}
  //         style={{marginVertical: 8}}
  //       />
  //     </TouchableOpacity>
  //     {showBox && <View></View>}
  //     <TouchableOpacity onPress={showConfirmDialog}>
  //       <Icon
  //         name="delete"
  //         color={"red"}
  //         size={16}
  //         style={{marginVertical: 8}}
  //       />
  //     </TouchableOpacity>
  //   </View>
  // );
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
          <HomeRent />
          {/* <HomeRent />
          <CarRent />
          <CarRent />
          <HomeRent /> */}
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddRentDetails")}
        // onPress={() => navigation.navigate("MonthlyRent")}
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

export default RentHome;
