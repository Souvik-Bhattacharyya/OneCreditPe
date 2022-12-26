import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, {useEffect, useState} from "react";
import {CommonActions} from "@react-navigation/native";
import Icon2 from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import DocumentPicker, {types} from "react-native-document-picker";
import {CheckBox, Icon} from "@rneui/themed";
import moment from "moment";
import Api from "../Services";
import {useDispatch, useSelector} from "react-redux";
import {notify} from "../Redux/Action/notificationActions";

const CashEntries = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState("cash in");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [online, setOnline] = useState(true);
  const [offline, setOffline] = useState(false);
  const [transDetails, setTransDetails] = useState([]);
  // const [customerCashEntry, setCustomerCashEntry] = useState({
  //   amount: route.params.trnsDetails ? route.params.trnsDetails.amount : null,
  //   tns_type: route.params.trnsDetails
  //     ? route.params.trnsDetails.tns_type
  //     : route.params?.customerType === "customer"
  //     ? "got"
  //     : "advance",
  //   paymentDetails: route.params.trnsDetails
  //     ? route.params.trnsDetails.payment_details
  //     : "",
  //   tns_mode: "online",
  // });

  // console.log("trans detils", route.params.trnsDetails);
  // console.log("_________________>", customerCashEntry);
  // console.log("date", date);

  // useEffect(() => {
  //   setTransDetails(route.params.trnsDetails);
  //   if (route.params.trnsDetails) {
  //     if (route.params.trnsDetails.payment_type === "online") {
  //       radioOnline();
  //     } else {
  //       radioOffline();
  //     }
  //   }
  //   if (route.params.trnsDetails) {
  //     if (
  //       route.params.trnsDetails.tns_type === "got" ||
  //       route.params.trnsDetails.tns_type === "advance"
  //     ) {
  //       setIsActive("cash in");
  //     } else {
  //       setIsActive("cash out");
  //     }
  //   }
  // }, []);

  const [customerCashEntry, setCustomerCashEntry] = useState({
    amount: null,
    tns_type: route.params?.customerType === "customer" ? "got" : "advance",
    paymentDetails: "",
    tns_mode: "online",
  });

  console.log("trans detils", route.params.trnsDetails);
  console.log("_________________>", customerCashEntry);
  console.log("date", date);

  useEffect(() => {
    setTransDetails(route.params.trnsDetails);
    if (route.params.trnsDetails) {
      if (route.params.trnsDetails.payment_type === "online") {
        radioOnline();
      } else {
        radioOffline();
      }

      if (
        route.params.trnsDetails.tns_type === "got" ||
        route.params.trnsDetails.tns_type === "advance"
      ) {
        setIsActive("cash in");
      } else {
        setIsActive("cash out");
      }

      setCustomerCashEntry({
        ...customerCashEntry,
        amount: route.params.trnsDetails.amount,
        tns_type: route.params.trnsDetails.tns_type,
        paymentDetails: route.params.trnsDetails.payment_details,
      });
    }
  }, []);

  const radioOnline = () => {
    setOnline(true);
    setOffline(false);
    setCustomerCashEntry({...customerCashEntry, tns_mode: "online"});
  };

  const radioOffline = () => {
    setOnline(false);
    setOffline(true);
    setCustomerCashEntry({...customerCashEntry, tns_mode: "cash"});
  };
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
  // ---------------------------------------------------------------------------
  const newTransaction = async () => {
    try {
      setIsDisabled(true);
      const formData = new FormData();
      formData.append("amount", customerCashEntry.amount);
      formData.append("date_time", moment(date).format("YYYY-MM-DD hh:mm:ss"));
      formData.append("tns_type", customerCashEntry.tns_type);
      formData.append("payment_details", customerCashEntry.paymentDetails);
      formData.append("customer_id", route.params?.customerId);
      file && formData.append("attachment", file);
      formData.append("payment_type", customerCashEntry.tns_mode);

      const response = await Api.postForm("/auth/transaction", formData);
      console.log("new entry---->", response.data);

      if (response.status == 200) {
        setCustomerCashEntry({
          ...customerCashEntry,
          amount: null,
          tns_type:
            route.params?.customerType === "customer" ? "got" : "advance",
          paymentDetails: "",
          tns_mode: "online",
        });

        setDate(new Date());
        setFile(null);
        setIsActive("cash in");
        setOnline(true);
        setOffline(false);

        setIsDisabled(false);
        // navigation.replace("UserDetails", {
        //   customerId: route.params?.customerId,
        // });
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "CustomerStack",
                state: {
                  index: 0,
                  routes: [
                    {
                      name: "Customer",
                    },
                    {
                      name: "UserDetails",
                      params: {customerId: route.params?.customerId},
                    },
                  ],
                },
              },
            ],
          }),
        );
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

  const updateTransaction = async () => {
    console.log("update");
    try {
      setIsDisabled(true);
      const formData = new FormData();
      formData.append("amount", customerCashEntry.amount);
      formData.append("date_time", moment(date).format("YYYY-MM-DD hh:mm:ss"));
      formData.append("tns_type", customerCashEntry.tns_type);
      formData.append("payment_details", customerCashEntry.paymentDetails);
      formData.append("customer_id", route.params?.trnsDetails?.customer_id);
      file && formData.append("attachment", file);
      formData.append("payment_type", customerCashEntry.tns_mode);

      const response = await Api.postForm(
        `/auth/transaction/${route.params?.trnsDetails?.id}?_method=put`,
        formData,
      );
      console.log("updated--------------------->", response.data);
      if (response.status == 200) {
        setCustomerCashEntry({
          ...customerCashEntry,
          amount: null,
          tns_type:
            route.params?.trnsDetails?.cus_type === "customer"
              ? "got"
              : "advance",
          paymentDetails: "",
          tns_mode: "online",
        });

        setDate(new Date());
        setFile(null);
        setIsActive("cash in");
        setOnline(true);
        setOffline(false);

        setIsDisabled(false);
        // navigation.replace("UserDetails", {
        //   customerId: route.params?.trnsDetails?.customer_id,
        // });
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "CustomerStack",
                state: {
                  index: 0,
                  routes: [
                    {
                      name: "Customer",
                    },
                    {
                      name: "UserDetails",
                      params: {customerId: route.params?.trnsDetails?.customer_id,},
                    },
                  ],
                },
              },
            ],
          }),
        );
        dispatch(
          notify({
            message: response.message,
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

  const createTwoButtonAlert = () =>
    Alert.alert("Are you sure to delete this entry?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          deleteEntry(route.params?.trnsDetails?.id);
        },
      },
    ]);

  const deleteEntry = async id => {
    try {
      const response = await Api.delete(`/auth/transaction/${id}`);
      console.log("del entry", response);
      if (response.status == 200) {
        route.params?.customersAllTransaction(
          route.params?.trnsDetails?.customer_id,
        );
        // navigation.replace("UserDetails", {
        //   customerId: route.params?.trnsDetails
        //     ? route.params?.trnsDetails.customer_id
        //     : route.params?.customerId,
        // });
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "CustomerStack",
                state: {
                  index: 0,
                  routes: [
                    {
                      name: "Customer",
                    },
                    {
                      name: "UserDetails",
                      params: {customerId: route.params?.trnsDetails
                        ? route.params?.trnsDetails.customer_id
                        : route.params?.customerId},
                    },
                  ],
                },
              },
            ],
          }),
        );
        dispatch(notify({message: "Transaction deleted successfully"}));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      dispatch(notify({message: error.message}));
    }
  };
  const paymentMode = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: metrics.verticalScale(5),
        alignItems: "center",
        width: "100%",
        // backgroundColor: '#ddd',
        marginBottom: 15,
      }}>
      <View
        style={{
          width: "48%",
          borderRadius: 6,
          paddingVertical: 0,
          borderColor: "#c9c9c9",
          borderWidth: 1,
          borderRadius: 4,
        }}>
        <CheckBox
          style={{paddingVertical: 0}}
          title="Online Pay"
          checked={online}
          center
          textStyle={{fontSize: 18}}
          containerStyle={{paddingHorizontal: 0, paddingVertical: 5}}
          onPress={radioOnline}
          checkedIcon={
            <Icon
              name="radio-button-checked"
              type="material"
              color="#0a5ac9"
              size={25}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-unchecked"
              type="material"
              color="grey"
              size={25}
            />
          }
        />
      </View>
      <View
        style={{
          width: "48%",
          borderRadius: 6,
          borderColor: "#c9c9c9",
          borderWidth: 1,
          borderRadius: 4,
        }}>
        <CheckBox
          title="Cash Pay"
          checked={offline}
          center
          textStyle={{fontSize: 18}}
          containerStyle={{paddingHorizontal: 0, paddingVertical: 5}}
          onPress={radioOffline}
          checkedIcon={
            <Icon
              name="radio-button-checked"
              type="material"
              color="#0a5ac9"
              size={25}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-unchecked"
              type="material"
              color="grey"
              size={25}
            />
          }
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      {route.params?.customerType === "supplier" && paymentMode()}
      {route.params?.trnsDetails?.cus_type === "supplier" && paymentMode()}
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
        <Icon2
          name="rupee"
          color={"#828282"}
          style={{marginLeft: 20}}
          size={22}
        />
        <TextInput
          value={
            customerCashEntry.amount == null
              ? null
              : customerCashEntry.amount.toString()
          }
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
            setCustomerCashEntry({
              ...customerCashEntry,
              tns_type:
                route.params?.customerType === "customer" ||
                route.params?.trnsDetails?.cus_type === "customer"
                  ? "got"
                  : "advance",
            });
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash in" ? "#fff" : "#0a5ac9"},
            ]}>
            {route.params?.customerType === "customer" ||
            route.params?.trnsDetails?.cus_type === "customer"
              ? "Got"
              : "Advance"}
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
            setCustomerCashEntry({
              ...customerCashEntry,
              tns_type:
                route.params?.customerType === "customer" ||
                route.params?.trnsDetails?.cus_type === "customer"
                  ? "give"
                  : "purchase",
            });
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash out" ? "#fff" : "#20409A"},
            ]}>
            {route.params?.customerType === "customer" ||
            route.params?.trnsDetails?.cus_type === "customer"
              ? "Give"
              : "Purchase"}
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
        <Icon2
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
          flexDirection: "column",
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
          onPress={transDetails ? updateTransaction : newTransaction}>
          {transDetails ? (
            <Text style={[styles.btnTxt, {color: "#fff"}]}>Update</Text>
          ) : (
            <Text style={[styles.btnTxt, {color: "#fff"}]}>Save</Text>
          )}
        </TouchableOpacity>
        {transDetails && (
          <View
            style={{
              alignSelf: "center",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={createTwoButtonAlert}
              style={{
                paddingHorizontal: metrics.horizontalScale(20),
                paddingVertical: metrics.verticalScale(12),
                borderRadius: 50,
                width: "100%",
                backgroundColor: isDisabled ? "#808080" : "red",
              }}>
              <Text style={[styles.btnTxt, {color: "#fff"}]}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
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
