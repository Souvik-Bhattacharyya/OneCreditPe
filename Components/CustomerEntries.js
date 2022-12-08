import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import DocumentPicker, {types} from "react-native-document-picker";
import moment from "moment";
import Api from "../Services";
import {useDispatch} from "react-redux";
import {notify} from "../Redux/Action/notificationActions";

const CashEntries = ({navigation, route}) => {
  const dispatch = useDispatch();
  // const {customerId} = route.params;
  const [isActive, setIsActive] = useState("cash in");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [customerCashEntry, setCustomerCashEntry] = useState({
    amount: null,
    tns_type: "got",
    paymentDetails: "",
  });

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

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

  const handleDocumentSelection = () => {
    DocumentPicker.pick({
      type: [types.pdf, types.images],
    })
      .then(async response => {
        setFile({
          name: response[0].name,
          uri: response[0].uri,
          type: response[0].type,
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  // const payload = {
  //   amount: customerCashEntry.amount,
  //   date_time: customerCashEntry.entryDate,
  //   tns_type: customerCashEntry.tns_type,
  //   payment_details: customerCashEntry.paymentDetails,
  //   customer_id: user.id,
  //   attachments: customerCashEntry.attachments,
  // };

  // const newTransaction = async () => {
  //   try {
  //     setIsDisabled(true);
  //     const response = await Api.post("/auth/transaction", {
  //       amount: customerCashEntry.amount,
  //       date_time: moment(date).format("YYYY-MM-DD hh:mm:ss"),
  //       tns_type: customerCashEntry.tns_type,
  //       payment_details: customerCashEntry.paymentDetails,
  //       customer_id: userData.customer_id,
  //       // attachments: customerCashEntry.attachments,
  //     });

  //     if (response.data.status == 200) {
  //       setCustomerCashEntry({
  //         ...customerCashEntry,
  //         amount: null,
  //         entryDate: moment(date).format("YYYY-MM-DD hh:mm:ss"),
  //         tns_type: "get",
  //         paymentDetails: "",
  //         attachments: null,
  //       });

  //       navigation.navigate("UserDetails", {customerId: customerId});
  //     }
  //     setDate(new Date());
  //     setFile(null);
  //     setIsDisabled(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const newTransaction = async () => {
    try {
      setIsDisabled(true);
      const formData = new FormData();
      formData.append("amount", customerCashEntry.amount);
      formData.append("date_time", moment(date).format("YYYY-MM-DD hh:mm:ss"));
      customerCashEntry.tns_type &&
        formData.append("tns_type", customerCashEntry.tns_type);
      formData.append("payment_details", customerCashEntry.paymentDetails);
      formData.append("customer_id", route.params?.customerId);
      file && formData.append("attachment", file);

      console.log("file-->", file);
      const response = await Api.postForm("/auth/transaction", formData);
      console.log(response);
      if (response.status == 200) {
        setCustomerCashEntry({
          ...customerCashEntry,
          amount: null,
          tns_type: "got",
          paymentDetails: "",
        });
        setDate(new Date());
        setFile(null);
        setIsDisabled(false);
        navigation.navigate("UserDetails", {
          customerId: route.params?.customerId,
        });
        dispatch(
          notify({
            message: "Your entry has been submitted successfully",
            notifyType: "success",
          }),
        );
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderColor: "#d6d6d6",
          borderRadius: 6,
          paddingVertical: 2,
          paddingRight: 20,
        }}>
        <Icon
          name="rupee"
          color={"#828282"}
          style={{marginLeft: 20}}
          size={22}
        />
        <TextInput
          value={customerCashEntry.amount}
          placeholder="Enter Amount"
          placeholderTextColor={"#757575"}
          style={{
            backgroundColor: "#fff",
            fontSize: 18,
            paddingHorizontal: 10,
            color: "#000",
            fontWeight: "600",
            width: "90%",
          }}
          keyboardType="numeric"
          onChangeText={val =>
            setCustomerCashEntry({...customerCashEntry, amount: val})
          }
        />
      </View>

      <View
        style={{
          marginVertical: 15,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#d6d6d6",
            borderBottomWidth: 1,
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 15,
            width: "100%",
          }}
          onPress={showDatepicker}>
          <DatePickerIcon name="calendar" color={"#828282"} size={24} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#000",
              paddingHorizontal: 10,
            }}>
            {moment(date).format("DD MMM YYYY")}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(15),
          width: "100%",
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash in" ? "#12CE12" : "#f6f6f6",
            borderColor: isActive === "cash in" ? "#12ce12" : "#c9c9c9",
            borderBottomWidth: 2,
            width: "48%",
            borderRadius: 4,
          }}
          onPress={() => {
            setIsActive("cash in");
            setCustomerCashEntry({...customerCashEntry, tns_type: "advance"});
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash in" ? "#fff" : "#0a5ac9"},
            ]}>
            Advance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash out" ? "#C91E25" : "#f6f6f6",
            borderColor: isActive === "cash out" ? "#ED1C24" : "#c6c6c6",
            borderBottomWidth: 2,
            width: "48%",
            borderRadius: 4,
          }}
          onPress={() => {
            setIsActive("cash out");
            setCustomerCashEntry({...customerCashEntry, tns_type: "purchase"});
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash out" ? "#fff" : "#20409A"},
            ]}>
            Purchase
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderColor: "#d6d6d6",
          borderRadius: 6,
          paddingRight: 20,
        }}>
        <Icon
          name="file-text-o"
          color={"#828282"}
          style={{marginLeft: 20}}
          size={18}
        />
        <TextInput
          value={customerCashEntry.paymentDetails}
          placeholder="Enter Payment Details (optional)"
          placeholderTextColor={"#828282"}
          style={{
            backgroundColor: "#fff",
            fontSize: 17,
            paddingHorizontal: 10,
            color: "#000",
            fontWeight: "600",
            width: "90%",
          }}
          onChangeText={val =>
            setCustomerCashEntry({...customerCashEntry, paymentDetails: val})
          }
        />
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(15),
            backgroundColor: "#fff",
            borderRadius: 6,
            width: "100%",
            borderColor: "#c9c9c9",
            borderBottomWidth: 1,
            flexDirection: "row",
          }}
          onPress={() => {
            handleDocumentSelection();
          }}>
          <DatePickerIcon
            name="camera"
            color={"#0a5ac9"}
            style={{marginRight: 5}}
            size={24}
          />
          <Text style={[styles.btnTxt, {color: "#0a5ac9"}]}>
            {file?.name || "Attach Bill"}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: metrics.verticalScale(10),
          alignSelf: "center",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
          disabled={isDisabled}
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            // backgroundColor: "#0a5ac9",
            borderRadius: 50,
            width: "100%",
            backgroundColor: isDisabled ? "#808080" : "#0a5ac9",
          }}
          onPress={newTransaction}>
          <Text style={[styles.btnTxt, {color: "#fff"}]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CashEntries;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.horizontalScale(15),
    paddingVertical: metrics.verticalScale(20),
    backgroundColor: "#fff",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: "#000",
    fontSize: 18,
    backgroundColor: "#fff",
    fontWeight: "600",
  },
  icon: {
    position: "absolute",
    top: "30%",
    left: 25,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "600",
    // color: "#fff",
    textAlign: "center",
  },
});
