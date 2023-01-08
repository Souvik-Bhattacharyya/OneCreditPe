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
import {allRentals} from "../../Redux/Action/rentActions";
import {updateUser} from "../../Redux/Action/authActions";
import {useSelector} from "react-redux";
import {allRentalsDetails, deleteRental} from "../../Requests/rent";
const RentHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const x = useSelector(state => state.allRentals);

  // const user = useSelector(state => state?.auth.user);
  const [allRentalsInfo, setAllRentalsInfo] = useState([]);
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    showAllRentals();
  }, []);

  const showAllRentals = async () => {
    try {
      const response = await allRentalsDetails();

      if (response && Array.isArray(response)) {
        setAllRentalsInfo(response);
        dispatch(allRentals(response));
      }
      if (typeof response === "string") {
        dispatch(notify({message: response, type: "error"}));
      }
    } catch (error) {
      dispatch(notify({message: error.message, type: "error"}));
    }
  };

  //Delete rental details

  const handleDelete = async id => {
    try {
      const response = await deleteRental(id);
      // console.log("---------------->", response.data);
      if (response.status === 200) {
        dispatch(notify({message: response.message}));
        showAllRentals();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Confirm Alert message

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

  const HomeRent = ({rental}) => (
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
      <View
        style={{
          // width: "80%",
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "pink",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}>
          {/* <Icon
          name="car"
          color={"#0A5AC9"}
          size={30}
          style={{marginVertical: 3}}
        /> */}
          <Icon
            name="bank"
            color={"#0A5AC9"}
            size={30}
            style={{marginVertical: 3}}
          />
          <View style={{paddingLeft: 5}}>
            <Text style={{fontSize: 15}}>{rental.name}</Text>
            <Text style={{fontSize: 12}}>rent type</Text>
          </View>
        </View>
        <View style={{display: "flex", flexDirection: "row"}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ShowRentDetails", {rentalId: rental.id})
            }>
            <Icon
              name="calendar"
              color="#0A5AC9"
              size={15}
              style={{marginVertical: 8}}
            />
          </TouchableOpacity>
          {showBox && <View></View>}
          <TouchableOpacity
            onPress={() => showConfirmDialog(rental.id)}
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
          {allRentalsInfo &&
            allRentalsInfo.map((rental, index) => (
              <HomeRent rental={rental} key={index} />
            ))}
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
