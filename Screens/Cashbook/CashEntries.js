import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import Icon2 from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";
import DatePickerIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import moment from "moment";
import DocumentPicker, {types} from "react-native-document-picker";
import Api from "../../Services";
import {CheckBox, Icon} from "@rneui/themed";
import {notify} from "../../Redux/Action/notificationActions";
import {useDispatch} from "react-redux";
const CashEntries = ({navigation}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isActive, setIsActive] = useState("cash in");
  const [date, setDate] = useState(null);
  const [file, setFile] = useState(null);
  const [online, setOnline] = useState(true);
  const [offline, setOffline] = useState(false);
  const dispatch = useDispatch();
  const [cashDetails, setCashDetails] = useState({
    amount: null,
    cb_tns_type: "in",
    paymentType: "online",
    paymentDetails: "",
  });

  const radioOnline = () => {
    setOnline(true);
    setOffline(false);
    setCashDetails({...cashDetails, paymentType: "online"});
  };

  const radioOffline = () => {
    setOnline(false);
    setOffline(true);
    setCashDetails({...cashDetails, paymentType: "cash"});
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
      value: date || new Date(),

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

  //Api integration

  const cashEntry = async () => {
    try {
      setIsDisabled(true);
      const formData = new FormData();
      formData.append("amount", cashDetails.amount);
      formData.append("date_time", moment(date).format("YYYY-MM-DD hh:mm:ss"));
      formData.append("cb_tns_type", cashDetails.cb_tns_type);
      formData.append("payment_details", cashDetails.paymentDetails);
      formData.append("payment_type", cashDetails.paymentType);
      file ? formData.append("attachments", file) : "";
      console.log({
        amount: cashDetails.amount,
        date_time: moment(date).format("YYYY-MM-DD hh:mm:ss"),
        cb_tns_type: cashDetails.cb_tns_type,
        payment_details: cashDetails.paymentDetails,
        payment_type: cashDetails.paymentType,
      });
      const response = await Api.postForm("/auth/cashbook", formData);
      if (response.status === 200) {
        dispatch(
          notify({
            message: "your entry has submitted successfully",
            notifyType: "success",
          }),
        );
      }

      setCashDetails({
        ...cashDetails,
        amount: null,
        cb_tns_type: "in",
        paymentType: "",
        paymentDetails: "",
      });
      setDate(new Date());
      setFile(null);
      setIsDisabled(false);

      navigation.navigate("Cash Book");
    } catch (error) {
      console.log(error.message);
      setIsDisabled(false);
    }
  };

  return (
    <View style={styles.container}>
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
            onPress={radioOnline}
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
            onPress={radioOffline}
          />
        </View>
      </View>

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
          value={cashDetails.amount}
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
          onChangeText={val => setCashDetails({...cashDetails, amount: val})}
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
            {date ? moment(date).format("DD MMM YYYY") : "Select Date"}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(15),
          marginTop: metrics.verticalScale(10),
          width: "100%",
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash in" ? "#12CE12" : "#f6f6f6",
            borderColor: isActive === "cash in" ? "transparent" : "#d6d6d6",
            borderBottomWidth: 2,
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
            {/* <Icon name='money' /> */}
            Amount In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash out" ? "#C91E25" : "#f6f6f6",
            borderColor: isActive === "cash out" ? "transparent" : "#d6d6d6",
            borderBottomWidth: 2,
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
            Amount Out
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
          value={cashDetails.paymentDetails}
          placeholder="Enter Payment Details"
          placeholderTextColor={"#828282"}
          style={{
            backgroundColor: "#fff",
            fontSize: 18,
            paddingHorizontal: 10,
            color: "#000",
            fontWeight: "600",
            width: "90%",
          }}
          onChangeText={val =>
            setCashDetails({...cashDetails, paymentDetails: val})
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
    backgroundColor: "#fff",
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 6,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: "#000",
    fontSize: 18,
    backgroundColor: "#fff",
    fontWeight: "600",
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
