import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import metrics from "../../Constants/metrics";
import CheckIcon from "react-native-vector-icons/Fontisto";
import EditIcon from "react-native-vector-icons/Feather";
const AddDetails = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: "#EEF3FF",
        marginVertical: 15,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <View
        style={{
          width: "46%",
          marginHorizontal: 10,
          height: "25%",
          borderWidth: 1,
          borderColor: "#C6C6C6",
          borderRadius: 5,
          padding: 5,
        }}>
        <View
          style={{
            backgroundColor: "#EEF3FF",
            flex: 1,
            alignItems: "center",
          }}>
          <View
            style={{
              // marginTop: -50,
              alignItems: "center",
            }}>
            <Image
              source={require("../../Assets/bank.png")}
              style={{height: 50, width: 50}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("AddBankDetails")}>
              <Text
                style={{
                  color: "#0A5AC9",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: 14,
                }}>
                Add Bank Account
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 9}}>Add your bank details here to</Text>
            <Text style={{fontSize: 9}}>transfer the money</Text>
            <Text
              style={{
                position: "absolute",
                bottom: -65,
                color: "#349EFF",
                fontSize: 12,
              }}>
              Add Now?
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "46%",
          height: "25%",
          borderWidth: 1,
          borderColor: "#C6C6C6",
          borderRadius: 5,
          padding: 5,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}>
          <Image
            source={require("../../Assets/pan.png")}
            style={{height: 50, width: 50}}
          />
          <Text
            style={{
              color: "#0A5AC9",
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 14,
            }}>
            Add PAN Details
          </Text>
          <Text style={{fontSize: 9}}>Add your bank details here to</Text>
          <Text style={{fontSize: 9}}>transfer the money</Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            flexDirection: "row",
            // justifyContent: "space-around",
          }}>
          <View
            style={{
              paddingLeft: 30,
            }}>
            <CheckIcon name="checkbox-active" color="#00F100" />
          </View>
          <View
            style={{
              paddingLeft: 80,
            }}>
            <EditIcon name="edit" color="#349EFF" size={14} />
          </View>
        </View>
      </View>

      <View
        style={{
          width: "46%",
          marginHorizontal: 10,
          marginVertical: 10,
          borderColor: "#C6C6C6",
          borderRadius: 5,
          borderWidth: 1,
          height: "25%",
          padding: 5,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}>
          <View
            style={{
              // marginTop: -50,
              alignItems: "center",
            }}>
            <Image
              source={require("../../Assets/adhaar.png")}
              style={{height: 50, width: 80}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("AddAdhaarDetails")}>
              <Text
                style={{
                  color: "#0A5AC9",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: 14,
                }}>
                Add Aaddhar Details
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 9}}>Add your bank details here to</Text>
            <Text style={{fontSize: 9}}>transfer the money</Text>
            <Text
              style={{
                position: "absolute",
                // bottom: -45,
                bottom: -65,
                color: "#349EFF",
                fontSize: 12,
              }}>
              Add Now?
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "25%",

          padding: 5,
          width: "46%",

          marginVertical: 10,
          borderColor: "#C6C6C6",
          borderRadius: 5,
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}>
          <Image
            source={require("../../Assets/shop.png")}
            style={{height: 50, width: 50}}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Picture")}>
            <Text
              style={{
                color: "#0A5AC9",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 14,
              }}>
              Add A Picture
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 9}}>Add your bank details here to</Text>
          <Text style={{fontSize: 9}}>transfer the money</Text>
          <Text
            style={{
              position: "absolute",
              bottom: 2,
              color: "#349EFF",
              fontSize: 12,
            }}>
            Add Now?
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "46%",
          height: "25%",
          marginHorizontal: 10,
          padding: 5,
          borderColor: "#C6C6C6",
          borderRadius: 5,
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}>
          <Image
            source={require("../../Assets/camera.png")}
            style={{height: 50, width: 50}}
          />
          <TouchableOpacity onPress={() => navigation.navigate("AddPicture")}>
            <Text
              style={{
                color: "#0A5AC9",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 14,
              }}>
              Add A Picture
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 9}}>Add your bank details here to</Text>
          <Text style={{fontSize: 9}}>transfer the money</Text>
          <Text
            style={{
              position: "absolute",
              bottom: 2,
              color: "#349EFF",
              fontSize: 12,
            }}>
            Add Now?
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          backgroundColor: "#0A5AC9",
          // marginTop: 10,
          // marginBottom: 20,
          // justifyContent: "center",
          borderRadius: 50,
          // flexDirection: "row",
          position: "absolute",
          // bottom: -155,
          alignItems: "center",
          bottom: 25,
          marginLeft: 19,
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
    // </View>
  );
};

export default AddDetails;
