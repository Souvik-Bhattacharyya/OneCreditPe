import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../Constants/metrics";
import DatePickerIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-date-picker";

const CashEntries = () => {
  const [isActive, setIsActive] = useState("cash in");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter Amount"
          placeholderTextColor={"#828282"}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <Icon name="rupee" color={"#828282"} style={styles.icon} size={26} />
      </View>

      <View style={{ marginVertical: 15, }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
          onPress={() => setOpen(true)}>
          <DatePickerIcon
            name="date-range"
            color={"#828282"}
            style={{}}
            size={24}
          />
          <Text
            style={{
              color: "#828282",
              fontSize: 18,
              paddingHorizontal: 10,
              fontWeight: '800',
            }}>
            Select Date & Time
          </Text>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(15),
          width: '100%'
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash in" ? "#20409A" : "white",
            borderColor: isActive === "cash in" ? "#20409A" : "#c6c6c6",
            borderWidth: 1,
            width: '48%',
            borderRadius: 4,
          }}
          onPress={() => setIsActive("cash in")}>
          <Text
            style={[
              styles.btnTxt,
              { color: isActive === "cash in" ? "#fff" : "#20409A" },
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
            width: '48%',
            borderRadius: 4
          }}
          onPress={() => setIsActive("cash out")}>
          <Text
            style={[
              styles.btnTxt,
              { color: isActive === "cash out" ? "#fff" : "#20409A" },
            ]}>
            Cash Out
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          placeholder="Enter Payment Details"
          placeholderTextColor={"#828282"}
          style={[
            styles.textInput,
            { height: 200, textAlignVertical: "top", paddingHorizontal: 20 },
          ]}
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: metrics.verticalScale(20),
          alignSelf: "center",
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#fff",
            borderRadius: 50,
            width: '48%',
            borderColor: '#c9c9c9',
            borderWidth: 1,
            flexDirection: 'row'
          }}>
          <DatePickerIcon
            name="camera-alt"
            color={"#0a5ac9"}
            style={{ marginRight: 5 }}
            size={24}
          />
          <Text style={[styles.btnTxt, { color: "#0a5ac9" }]}>Attach Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#0a5ac9",
            borderRadius: 50,
            width: '48%'
          }}>
          <Text style={[styles.btnTxt, { color: "#fff" }]}>Save</Text>
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
    fontWeight: '800'
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
