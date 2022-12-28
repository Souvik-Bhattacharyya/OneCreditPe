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
import DocumentPicker, {types} from "react-native-document-picker";
import UserIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Entypo";
import ProfileIcon from "react-native-vector-icons/FontAwesome5";
import EmailIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {Modal, Portal, Provider} from "react-native-paper";
import Api from "../../Services";
import {notify} from "../../Redux/Action/notificationActions";
const width = Dimensions.get("window").width;
const CusSupProfile = ({route}) => {
  const containerStyle = {backgroundColor: "white", padding: 20};
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cusData, setCusData] = useState([]);
  const [Pic, SetPic] = React.useState("");
  const [visible, setVisible] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    cus_name: "",
    cus_mobile: null,
    cus_address: "",
    cus_email: "",
    bank_account_no: null,
    customer_type: "customer",
  });

  useEffect(() => {
    if (route.params?.customerData) {
      setCusData(route.params?.customerData.customer);
      setProfileDetails({
        ...profileDetails,
        cus_name: route.params?.customerData?.customer.cus_name,
        cus_mobile: route.params?.customerData?.customer.cus_mobile,
        cus_address: route.params?.customerData?.customer.cus_address,
        cus_email: route.params?.customerData?.customer.cus_email,
        bank_account_no: route.params?.customerData?.customer.bank_account_no,
        customer_type: route.params?.customerData?.customer.customer_type,
      });
    }
  }, [route.params?.customerData]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  console.log("customer id-->", cusData.id);
  console.log("customer details===>", route.params?.customerData?.customer);
  console.log("profile==>", profileDetails);

  const updateCustomer = async () => {
    try {
      const formData = new FormData();
      formData.append("cus_name", profileDetails.cus_name);
      formData.append("cus_mobile", profileDetails.cus_mobile);
      formData.append("cus_email", profileDetails.cus_email);
      formData.append("cus_address", profileDetails.cus_address);
      formData.append("bank_account_no", profileDetails.bank_account_no);
      formData.append("customer_type", profileDetails.customer_type);
      console.log(formData);

      const response = await Api.postForm(
        `/auth/customer/${cusData.id}?_method=put`,
        formData,
      );
      if (response.status == 200) {
        // console.log("------------>", response.data.data.id);
        // navigation.replace("UserDetails", {customerId: cusData.id});
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "CustomerStack",
                state: {
                  index: 0,
                  routes: [
                    {
                      name: "Customer",
                    },
                    {
                      name: "UserDetails",
                      params: {customerId: cusData.id},
                    },
                  ],
                },
              },
            ],
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.images],
      });

      SetPic(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCustomer = async () => {
    try {
      const response = await Api.delete(`/auth/customer/${cusData.id}`);
      console.log("res==========>", response.data);
      if (response.data.status == "okay") {
        navigation.navigate("SupplierStack", {
          screen: "Supplier",
          initial: false,
        });
        // navigation.dispatch(
        //   CommonActions.reset({
        //     index: 0,
        //     routes: [
        //       {
        //         name: "Supplier",
        //       },
        //     ],
        //   }),
        // );
        dispatch(
          notify({
            message: response.data.message,
            notifyType: "success",
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
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
                height: 180,
              }}>
              {Pic.length > 0 ? (
                Pic.map((Is, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        display: "flex",
                        borderColor: "#464555",
                        borderWidth: 3,
                        borderRadius: 100,
                        borderStyle: "dashed",
                        width: 110,
                        height: 110,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}>
                      <Image
                        source={{uri: Is.uri}}
                        style={{
                          height: 100,
                          width: 100,
                          resizeMode: "cover",
                          marginVertical: 13,
                          alignSelf: "center",
                          borderRadius: 100,
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => uploadImage()}
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
                        <Icon name="camera" size={18} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <View
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
                  <TouchableOpacity
                    onPress={() => uploadImage()}
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
                    <Icon name="camera" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <ProfileIcon
              name="user-alt"
              color={"#464555"}
              size={20}
              style={{marginRight: 10, marginRight: 20}}
            />
            <TextInput
              placeholder="Name"
              value={profileDetails.cus_name}
              placeholderTextColor={"#aaa"}
              onChangeText={val =>
                setProfileDetails({...profileDetails, cus_name: val})
              }
              style={{
                color: "#464555",
                fontSize: 14,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <ProfileIcon
              name="phone"
              color={"#464555"}
              size={20}
              style={{marginRight: 10, marginRight: 20}}
            />
            <TextInput
              value={profileDetails.cus_mobile}
              placeholder="Mobile No"
              onChangeText={val =>
                setProfileDetails({...profileDetails, cus_mobile: val})
              }
              placeholderTextColor={"#aaa"}
              style={{
                color: "#464555",
                fontSize: 14,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <EntypoIcon
              name="location-pin"
              color={"#464555"}
              size={24}
              style={{marginRight: 10, marginRight: 20}}
            />
            <TextInput
              value={profileDetails.cus_address}
              placeholder="Your Address"
              onChangeText={val =>
                setProfileDetails({...profileDetails, cus_address: val})
              }
              placeholderTextColor={"#aaa"}
              style={{
                color: "#464555",
                fontSize: 14,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <MaterialIcon
              name="email"
              color={"#464555"}
              size={24}
              style={{marginRight: 10, marginRight: 20}}
            />
            <TextInput
              value={profileDetails.cus_email}
              placeholder="Your Email"
              onChangeText={val =>
                setProfileDetails({...profileDetails, cus_email: val})
              }
              placeholderTextColor={"#aaa"}
              style={{
                color: "#464555",
                fontSize: 14,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <MaterialIcon
              name="bank-outline"
              color={"#464555"}
              size={24}
              style={{marginRight: 10, marginRight: 20}}
            />
            <TextInput
              placeholder="Bank Account No"
              value={profileDetails.bank_account_no}
              onChangeText={val =>
                setProfileDetails({...profileDetails, bank_account_no: val})
              }
              placeholderTextColor={"#aaa"}
              style={{
                color: "#464555",
                fontSize: 14,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>

          <View
            style={{
              alignSelf: "center",
              width,
              flexDirection: "column",
              paddingHorizontal: 20,
              paddingTop: 20,
              left: 0,
            }}>
            <TouchableOpacity
              onPress={deleteCustomer}
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
                  fontSize: 14,
                  fontWeight: "900",
                }}>
                Delete
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={updateCustomer}
              style={{
                backgroundColor: "#0a5ac9",
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                marginBottom: 10,
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                }}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CusSupProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
