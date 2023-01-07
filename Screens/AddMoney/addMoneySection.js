import styles from "./styles";
import {View, Text, TouchableOpacity} from "react-native";
import {TextInput} from "react-native-paper";
import React from "react";
import {Button} from "./";

const addMoneySection = ({
  textValue,
  value,
  wallet,
  setValue,
  setTextValue,
  setTotal,
  addToWallet,
}) => {
  return (
    <View>
      {/* Heading Section */}
      <View
        style={{
          height: 200,
          width: 355,
          backgroundColor: "white",
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            color: "rgba(10, 90, 201, 1)",
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          Add Money To Wallet
        </Text>
        {/* Text Input */}
        <View style={{flexDirection: "row"}}>
          <TextInput
            keyboardType="numeric"
            onChangeText={e => setTextValue(e)}
            value={textValue}
            placeholder="Enter the Value"
            style={{
              backgroundColor: "rgba(246, 246, 246, 1)",
              height: 40,
              width: 300,
              marginLeft: 10,
              marginTop: 20,
            }}
          />
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "rgba(10, 90, 201, 1)",
              width: 40,
              paddingLeft: 5,
              paddingTop: 5,
            }}>
            <Text
              onPress={() => addToWallet()}
              style={{fontSize: 15, color: "white"}}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        {/* Money Icon Section */}
        <View style={{marginTop: 30, marginLeft: 20, flexDirection: "row"}}>
          <TouchableOpacity
            onPress={() => setValue(value + 1000)}
            style={{
              backgroundColor: "#F6F6F6",
              padding: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "rgba(70, 69, 85, 1)",
              }}>
              ₹1000
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 2000)}
            style={{
              backgroundColor: "#F6F6F6",
              padding: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "rgba(70, 69, 85, 1)",
              }}>
              ₹2000
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 5000)}
            style={{
              backgroundColor: "#F6F6F6",
              padding: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "rgba(70, 69, 85, 1)",
              }}>
              ₹5000
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{marginLeft: 20, marginTop: 15}}>
          Wallet Amount To Be Added: {wallet}
        </Text>
        <TouchableOpacity style={{marginLeft: 275, marginTop: -20}}>
          <Text
            onPress={() => {
              setTotal(0);
              setValue(0);
            }}>
            Reset
          </Text>
        </TouchableOpacity>

        {/* Pay Button */}
        <Button title="Proceed to Pay" paddingLeft={115} />
      </View>
    </View>
  );
};

export default addMoneySection;
