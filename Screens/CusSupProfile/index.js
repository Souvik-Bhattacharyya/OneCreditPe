import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import UserIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {Modal, Portal, Provider} from "react-native-paper";

const width = Dimensions.get("window").width;
const CusSupProfile = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cusData, setCusData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    cus_name: "",
    cus_mobile: "",
    cus_address: "",
    cus_email: "",
    cus_accNo: "",
  });
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: "white", padding: 20};
  useEffect(() => {
    setProfileDetails(route.params.customerData.customer);
  }, []);
  console.log("profileDetails", profileDetails);
  return (
    <>
      <Provider>
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                marginTop: metrics.verticalScale(20),
                marginBottom: metrics.verticalScale(50),
              }}>
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
                    source={require("../../Assets/blank-profile.png")}
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
                    <EntypoIcon name="camera" size={18} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  color: "#0A5AC9",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "700",
                }}>
                Add photo
              </Text>

              <TouchableOpacity
                style={{
                  paddingVertical: metrics.verticalScale(10),
                  marginTop: 5,
                  // backgroundColor: "red",
                  borderRadius: 6,
                  borderColor: "green",
                  borderWidth: 1,
                  width: "42%",
                  flexDirection: "row",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                onPress={showModal}>
                <Text
                  style={{
                    color: "#333",
                    fontSize: 18,
                    fontWeight: "900",
                    color: "green",
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <UserIcon
                name="md-person-outline"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,
                  // marginBottom: 8,
                }}>
                <Text>Name</Text>
                <Text style={{marginTop: -1, color: "black"}}>
                  {profileDetails.cus_name}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Icon
                name="phone"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  // marginBottom: 8,
                }}>
                <Text>Mobile Number</Text>
                <Text style={{marginTop: -1, color: "black"}}>
                  {profileDetails.cus_mobile}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <EntypoIcon
                name="location-pin"
                size={22}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  // marginBottom: 8,
                }}>
                <Text>Address</Text>
                <Text style={{marginTop: -1, color: "black"}}>
                  {profileDetails.cus_address}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",

                backgroundColor: "#fff",

                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <MaterialIcon
                name="email"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  // marginBottom: 8,
                }}>
                <Text>Email</Text>
                <Text style={{marginTop: -1, color: "black"}}>
                  {profileDetails.cus_email}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",

                backgroundColor: "#fff",

                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <MaterialIcon
                name="bank-outline"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  marginBottom: 8,
                }}>
                <Text>Bank Account No</Text>
                <Text style={{marginTop: -1, color: "black"}}>632876986</Text>
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
                paddingVertical: 20,
                left: 0,
                borderTopWidth: 1,
                borderColor: "#c9c9c9",
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: metrics.horizontalScale(20),
                  paddingVertical: metrics.verticalScale(10),
                  borderColor: "#DC143C",
                  borderWidth: 1,
                  borderRadius: 6,
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                }}>
                <Text
                  style={{
                    color: "#DC143C",
                    fontSize: 18,
                    fontWeight: "900",
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View
              style={{
                flexDirection: "row",
                // paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <UserIcon
                name="md-person-outline"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,
                  // marginBottom: 8,
                }}>
                <Text>Name</Text>
                <TextInput
                  style={{marginTop: -15, paddingLeft: 1, color: "black"}}
                  placeholderTextColor="black"
                  value={profileDetails.cus_name}
                  placeholder="Your Name"
                  onChangeText={val =>
                    setProfileDetails({...profileDetails, cus_name: val})
                  }
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                // paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Icon
                name="phone"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  // marginBottom: 8,
                }}>
                <Text>Mobile Number</Text>
                <TextInput
                  style={{marginTop: -15, paddingLeft: 1, color: "black"}}
                  placeholderTextColor="black"
                  value={profileDetails.cus_mobile}
                  placeholder="Mobile No"
                  onChangeText={val =>
                    setProfileDetails({...profileDetails, cus_mobile: val})
                  }
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                // paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <EntypoIcon
                name="location-pin"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  // marginBottom: 8,
                }}>
                <Text>Address</Text>
                <TextInput
                  style={{marginTop: -15, paddingLeft: 1, color: "black"}}
                  placeholderTextColor="black"
                  value={profileDetails.cus_address}
                  placeholder="Your Address"
                  onChangeText={val =>
                    setProfileDetails({...profileDetails, cus_address: val})
                  }
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",

                backgroundColor: "#fff",

                // paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <MaterialIcon
                name="email"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  // marginBottom: 8,
                }}>
                <Text>Email</Text>
                <TextInput
                  style={{
                    color: "black",
                    marginTop: -15,
                    paddingLeft: 1,
                  }}
                  value={profileDetails.cus_email}
                  placeholderTextColor="black"
                  placeholder="Your Email"
                  onChangeText={val =>
                    setProfileDetails({...profileDetails, cus_email: val})
                  }
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",

                backgroundColor: "#fff",

                // paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <MaterialIcon
                name="bank-outline"
                size={20}
                color={"#464555"}
                style={{marginTop: 4}}
              />
              <View
                style={{
                  paddingHorizontal: 20,

                  marginBottom: 10,
                }}>
                <Text>Bank Account No</Text>
                <TextInput
                  style={{marginTop: -15, paddingLeft: 1, color: "black"}}
                  placeholderTextColor="black"
                  placeholder="Bank Account No"
                />
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
                paddingVertical: 20,
                left: 0,
                borderTopWidth: 1,
                borderColor: "#c9c9c9",
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: metrics.horizontalScale(20),
                  paddingVertical: metrics.verticalScale(10),
                  borderWidth: 1,
                  borderColor: "green",
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
                    color: "green",
                  }}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
};

export default CusSupProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // flex: 1,
  },
  text: {
    color: "#333",
  },
  accordion: {
    backgroundColor: "#fff",
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  items: {
    backgroundColor: "#F1F1F1",
    paddingVertical: metrics.verticalScale(15),
    justifyContent: "center",
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 1,
    paddingHorizontal: 40,
  },
});
