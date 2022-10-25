import React, {useState} from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import {Modal, Portal, Button, Provider} from "react-native-paper";
import DatePickerIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-date-picker";
import AppRadioButton from "./appRadioButton";
const SetDateModal = ({visible, hideModal}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
              <Text
                style={{
                  color: "black",
                  // textAlign: "center",
                  fontSize: 18,
                  fontWeight: "600",
                  // marginTop: 20,
                }}>
                Set a Date
              </Text>
              <Text style={{color: "#0A5AC9", position: "absolute", right: 10}}>
                Done
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: "row"}}>
                <AppRadioButton
                  label={"Select From Calender"}
                  value="calender"
                  onValueChange={value => setValue(value)}
                  isSelected={value === "calender"}
                />
                <TouchableOpacity onPress={() => setOpen(true)}>
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
                  <DatePickerIcon
                    name="date-range"
                    color="#0A5AC9"
                    style={{position: "absolute", left: 50}}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
              <AppRadioButton
                label={"Next Week"}
                value="week"
                onValueChange={value => setValue(value)}
                isSelected={value === "week"}
              />
              <AppRadioButton
                label={"Next Month"}
                value="month"
                onValueChange={value => setValue(value)}
                isSelected={value === "month"}
              />
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default SetDateModal;
