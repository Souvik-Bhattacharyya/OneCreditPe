import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import metrics from "../../Constants/metrics";
import CorrectIcon from "react-native-vector-icons/AntDesign";
const LoanDetails = ({navigation}) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#F7FBFF",
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
          }}>
          <Image source={require("../../Assets/loanDetails.png")} />
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 10,
            height: "100%",
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}>
          <Text style={{marginTop: 10, color: "#0A5AC9", fontSize: 16}}>
            Enter Business Details
          </Text>
          <TextInput
            placeholder="Business Name"
            style={{
              backgroundColor: "#F7FBFF",
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
              backgroundColor: "#F7FBFF",
              marginTop: 10,
              paddingVertical: 7,
              borderColor: "#C6C6C6",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            placeholder="Business Catagory"
          />
          <TextInput
            style={{
              backgroundColor: "#F7FBFF",
              marginTop: 10,
              paddingVertical: 7,
              borderColor: "#C6C6C6",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            placeholder="Business Sub-Catagory
"
          />
          <Text style={{marginTop: 10, color: "#0A5AC9", fontSize: 16}}>
            Enter Your Details
          </Text>
          <TextInput
            placeholder="Enter Your PAN number"
            style={{
              backgroundColor: "#F7FBFF",
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
              backgroundColor: "#F7FBFF",
              marginTop: 10,
              paddingVertical: 7,
              borderColor: "#C6C6C6",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            placeholder="Enter Your Shop/Office Pincode"
          />
          <TextInput
            style={{
              backgroundColor: "#F7FBFF",
              marginTop: 10,
              paddingVertical: 20,
              borderColor: "#C6C6C6",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            placeholder="Enter Your Business Address"
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              // justifyContent: "space-evenly",
            }}>
            <CorrectIcon name="checkcircle" size={15} color="#0A5AC9" />
            <Text style={{fontSize: 13, paddingLeft: 5, paddingHorizontal: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus mag {"\n"}na
              fringilla fdgg sdjgd urna....View More?
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#828282",
              marginTop: 10,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("AddDetails")}>
            <Text
              style={{
                fontSize: 15,

                color: "#FFFFFF",
                margin: 10,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoanDetails;
