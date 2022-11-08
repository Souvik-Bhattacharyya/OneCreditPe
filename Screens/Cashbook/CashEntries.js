import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import moment from "moment";
import Api from "../../Services";

const CashEntries = ({navigation}) => {
  const [isActive, setIsActive] = useState("cash in");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const onChange = (event, selectedDate, mode) => {
    if (mode === "date") {
      setDate(selectedDate);
    } else {
      setTime(selectedDate);
    }
  };

  const [cashDetails, setCashDetails] = useState({
    amount: null,
    cb_tns_type: "in",
    paymentType: "online",
    paymentDetails: "",
    attachments: null,
  });
  console.log(
    "time",
    moment(date)
      // .set("hour", moment(time).get("hour"))
      // .set("minute", moment(time).get("minute"))
      .format("YYYY-MM-DD hh:mm:ss"),
  );
  const cashEntry = async () => {
    try {
      const response = await Api.post("/auth/cashbook", {
        amount: cashDetails.amount,
        date_time: moment(date).format("YYYY-MM-DD hh:mm:ss"),
        cb_tns_type: cashDetails.cb_tns_type,
        payment_type: cashDetails.paymentType,
        payment_details: cashDetails.paymentDetails,
        // attachments: cashDetails.attachments,
      });
      if (response.status == 200) {
        console.log("====>", response.data);
        setCashDetails({
          ...cashDetails,
          amount: null,
          cb_tns_type: "in",
          paymentType: "online",
          paymentDetails: "",
          attachments: null,
        });

        navigation.navigate("Cash Book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };
  const showMode = currentMode => {
    let maximumDate = new Date();
    maximumDate.setFullYear(maximumDate.getFullYear());

    DateTimePickerAndroid.open({
      value: (currentMode === "date" ? date : time) || new Date(),

      onChange: (event, date) => onChange(event, date, currentMode),
      mode: currentMode,
      is24Hour: false,
      minimumDate: new Date(1950, 0, 1),
      maximumDate: maximumDate,
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={cashDetails.amount}
          placeholder="Enter Amount"
          placeholderTextColor={"#828282"}
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={val => setCashDetails({...cashDetails, amount: val})}
        />
        <Icon name="rupee" color={"#828282"} style={styles.icon} size={26} />
      </View>

      <View style={{marginTop: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
          onPress={showDatepicker}>
          <DatePickerIcon
            name="calendar"
            color={"#828282"}
            style={{}}
            size={24}
          />

          <Text
            placeholder="Select Date & Time"
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#000",
              paddingHorizontal: 10,
            }}>
            {date ? moment(date).format("D-M-Y") : "Select Date"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginVertical: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
          onPress={showTimepicker}>
          <DatePickerIcon
            name="clock"
            color={"#828282"}
            style={{}}
            size={24}
          />

          <Text
            placeholder="Select Time"
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#000",
              paddingHorizontal: 10,
            }}>
            {time ? moment(time).format("hh-mm a") : "Select Time"}
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
            backgroundColor: isActive === "cash in" ? "#20409A" : "white",
            borderColor: isActive === "cash in" ? "#20409A" : "#c6c6c6",
            borderWidth: 1,
            width: "48%",
            borderRadius: 4,
          }}
          onPress={() => {
            setIsActive("cash in");
            setCashDetails({...cashDetails, cb_tns_type: "in"});
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash in" ? "#fff" : "#20409A"},
            ]}>
            Cash In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash out" ? "#20409A" : "white",
            borderColor: isActive === "cash out" ? "#20409A" : "#c6c6c6",
            borderWidth: 1,
            width: "48%",
            borderRadius: 4,
          }}
          onPress={() => {
            setIsActive("cash out");
            setCashDetails({...cashDetails, cb_tns_type: "out"});
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash out" ? "#fff" : "#20409A"},
            ]}>
            Cash Out
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          value={cashDetails.paymentDetails}
          placeholder="Enter Payment Details"
          placeholderTextColor={"#828282"}
          style={[
            styles.textInput,
            {textAlignVertical: "top", paddingHorizontal: 20},
          ]}
          multiline={true}
          numberOfLines={2}
          onChangeText={val =>
            setCashDetails({...cashDetails, paymentDetails: val})
          }
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: metrics.verticalScale(20),
          alignSelf: "center",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#fff",
            borderRadius: 50,
            width: "48%",
            borderColor: "#c9c9c9",
            borderWidth: 1,
            flexDirection: "row",
          }}>
          <DatePickerIcon
            name="camera"
            color={"#0a5ac9"}
            style={{marginRight: 5}}
            size={24}
          />
          <Text style={[styles.btnTxt, {color: "#0a5ac9"}]}>Attach Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#0a5ac9",
            borderRadius: 50,
            width: "48%",
          }}
          onPress={cashEntry}>
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
    backgroundColor: "#E8EEFF",
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
    fontWeight: "800",
  },
  icon: {
    position: "absolute",
    top: "30%",
    left: 25,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },
});
