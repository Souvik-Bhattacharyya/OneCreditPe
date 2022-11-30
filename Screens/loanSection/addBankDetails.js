import {View, Text, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import CorrectIcon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
const AddBankDetails = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#D2D2D2",
      }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          height: "100%",
        }}>
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Enter Your Details
        </Text>
        <TextInput
          placeholder="Bank Name"
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <TextInput
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Bank IFSC Code"
        />
        <TextInput
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Bank Account Number
"
        />
        <TextInput
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Re-enter Bank Account Number
"
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
          }}>
          <CorrectIcon
            name="checkcircle"
            size={15}
            color="#0A5AC9"
            style={{marginTop: 14}}
          />
          <Text style={{fontSize: 13, paddingLeft: 9}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus mag {"\n"}na fringilla fdgg
            sdjgd urna....View More?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#0A5AC9",
            marginTop: 10,
            marginBottom: 20,
            justifyContent: "center",
            borderRadius: 50,
            flexDirection: "row",
            position: "absolute",
            bottom: -9,
            alignSelf: "center",
          }}>
          <Text
            style={{
              fontSize: 15,

              color: "#FFFFFF",
              margin: 10,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBankDetails;
