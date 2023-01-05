import {View, Text, TouchableOpacity, TextInput} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/Feather";
const SelectLoanAmountAndInterest = ({navigation}) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count >= 1) setCount(count - 1);
  };
  return (
    <View style={{backgroundColor: "#F7FBFF", height: "100%"}}>
      <View
        style={{
          marginTop: 30,
          backgroundColor: "white",
          height: "100%",
        }}>
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            color: "#0A5AC9",

            marginLeft: 10,
          }}>
          Enter Amount
        </Text>
        <TextInput
          placeholder="₹ 50,355"
          placeholderTextColor={"black"}
          style={{
            width: "95%",
            fontSize: 20,
            paddingLeft: 10,
            marginTop: 10,
            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: "#808080",
            marginLeft: 10,
          }}
        />
        <View style={{flexDirection: "row", marginTop: 30, marginLeft: 10}}>
          <Text style={{color: "#0A5AC9", fontSize: 15}}>Select tenure</Text>
          <Text
            style={{
              color: "#808080",
              fontSize: 12,
              marginLeft: 3,
              marginTop: 2,
            }}>
            (Select tenture from 1 month - 24 month)
          </Text>
        </View>
        <View
          style={{
            width: "95%",
            padding: 10,
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 0.5,
            borderRadius: 0.5,
            marginLeft: 10,
            borderStyle: "dashed",
          }}>
          <TouchableOpacity onPress={incrementCount}>
            <Icon
              name="plus"
              color="#0A5AC9"
              size={20}
              style={{
                backgroundColor: "#E0FFFF",
                borderColor: "#87CEFA",
                borderWidth: 1,

                paddingVertical: 5,
                paddingHorizontal: 5,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              color: "black",
              marginTop: 8,
            }}>
            {count} Months
          </Text>
          <TouchableOpacity onPress={decrementCount}>
            <Icon
              name="minus"
              color="#0A5AC9"
              size={20}
              style={{
                backgroundColor: "#E0FFFF",
                borderColor: "#87CEFA",
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            color: "#0A5AC9",
            marginLeft: 10,
          }}>
          Interest Details
        </Text>
        <View
          style={{borderBottomWidth: 0.5, marginTop: 10, opacity: 0.2}}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            padding: 10,
          }}>
          <Text>Rate of interest</Text>
          <Text style={{paddingRight: 10}}>2.5% per month</Text>
        </View>
        <View style={{borderBottomWidth: 0.5, opacity: 0.2}}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            padding: 10,
          }}>
          <Text>Repayment Amount</Text>
          <Text style={{paddingRight: 10}}>₹5,355</Text>
        </View>
        <View style={{borderBottomWidth: 0.5, opacity: 0.2}}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            padding: 10,
          }}>
          <Text>Daily installment (EDI)</Text>
          <Text style={{paddingRight: 10}}>₹105</Text>
        </View>
        <View style={{borderBottomWidth: 0.5, opacity: 0.2}}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            padding: 10,
          }}>
          <Text>No. of EDIs</Text>
          <Text style={{paddingRight: 10}}>51</Text>
        </View>
        <View style={{borderBottomWidth: 0.5, opacity: 0.2}}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Success");
          }}
          style={{
            width: "95%",
            backgroundColor: "#0A5AC9",
            justifyContent: "center",
            borderRadius: 20,
            flexDirection: "row",
            position: "absolute",
            bottom: 50,
            alignSelf: "center",
          }}>
          <Text
            style={{
              fontSize: 15,
              color: "#FFFFFF",
              margin: 10,
            }}>
            Confirm Application
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectLoanAmountAndInterest;
