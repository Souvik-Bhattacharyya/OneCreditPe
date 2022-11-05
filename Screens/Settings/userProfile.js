import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import ProfileIcon from "react-native-vector-icons/FontAwesome5";

import CallIcon from "react-native-vector-icons/Ionicons";
import BusinessIcon from "react-native-vector-icons/MaterialIcons";
import RightIcon from "react-native-vector-icons/SimpleLineIcons";
import metrics from "../../Constants/metrics";
const width = Dimensions.get("window").width;
const UserProfile = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 16,
        }}>
        <TouchableOpacity
          style={{
            display: "flex",
            borderColor: "#464555",
            borderWidth: 3,
            borderRadius: 50,
            borderStyle: "dashed",
            width: 110,
            height: 110,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}>
          <Image
            source={require("../../Assets/profile.png")}
            style={{
              height: 105,
              width: 105,
              resizeMode: "contain",
              marginVertical: 13,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: "#464555",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: -20,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 2,
            }}>
            <Icon name="camera" size={14} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#c9c9c9",
          marginTop: 30,
          marginBottom: 1,
          width: "100%",
          paddingVertical: 10,
        }}>
        <Text style={{paddingLeft: 15}}>Personal Info</Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            // backgroundColor: "#ddd",
            alignItems: "center",
            borderColor: "#c9c9c9",
            borderBottomWidth: 1,
          }}>
          <ProfileIcon name="user-alt" size={20} style={{marginRight: 10}} />
          <TextInput
            placeholder="Enter Your Name"
            placeholderTextColor={"#333"}
            style={{color: "black", fontSize: 18}}
          />

          {/* <View style={{marginRight: 15, marginTop: -5}}>
            <TouchableOpacity
              style={{
                borderColor: "blue",
                borderWidth: 1,
                paddingHorizontal: 13,
                paddingVertical: 8,
                borderRadius: 40,
              }}>
              <Text style={{color: "blue"}}>Add Details</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <CallIcon name="call-outline" size={20} style={{marginLeft: 20}} />
          <View style={{position: "absolute", left: 50, top: 5}}>
            <View style={{marginVertical: -10}}>
              <Text style={{fontSize: 13}}>Registered number</Text>
              <Text style={{color: "black", fontSize: 18}}>8420198760</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <BusinessIcon name="business" size={20} style={{marginLeft: 20}} />
          <View style={{position: "absolute", left: 50}}>
            <View
              style={
                {
                  // backgroundColor: "pink",
                  // marginVertical: -14,
                  // paddingRight: 19,
                }
              }>
              <Text style={{fontSize: 13}}>Business name</Text>
              <TextInput
                value="My Business"
                style={{
                  color: "black",
                  fontSize: 18,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#c9c9c9",
          marginVertical: 30,
          width: "100%",
          paddingVertical: 10,
        }}>
        <Text style={{paddingLeft: 15}}>Personal Info</Text>
      </View>
      <View>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <ProfileIcon name="user" size={25} style={{marginLeft: 20}} />
          <View style={{position: "absolute", left: 65, top: 5}}>
            <View style={{marginVertical: -10}}>
              <Text style={{fontSize: 13}}>Details</Text>
              <Text style={{color: "black", fontSize: 18}}>3 staff</Text>
            </View>
          </View>
          <View style={{marginTop: 10, marginRight: 20}}>
            <TouchableOpacity>
              <RightIcon name="arrow-right" color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          width,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#f6f6f6",
          paddingHorizontal: 20,
          paddingVertical: 10,
          left: 0,
          marginTop: 10,
          // borderTopWidth: 1,
          borderColor: "#c9c9c9",
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CashEntries", {name: "Cash Entries"})
          }
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: "#0a5ac9",
            borderRadius: 6,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <Text
            style={{
              color: "#333",
              fontSize: 18,
              fontWeight: "900",
              color: "#fff",
            }}>
            Create Transaction
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;
