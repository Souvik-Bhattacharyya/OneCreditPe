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
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import UserIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";

const width = Dimensions.get("window").width;
const CusSupProfile = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cusData, setCusData] = useState([]);

  useEffect(() => {
    setCusData(route.params.customerData.customer);
  }, []);
  console.log("cus profile", cusData);
  return (
    <>
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
                onPress={() => navigation.navigate("UserProfile")}
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
                marginBottom: 8,
              }}>
              <Text>Name</Text>
              <Text style={{marginTop: -1, color: "black"}}>
                {cusData.cus_name}
              </Text>
            </View>
            <Icon
              name="arrowright"
              size={14}
              color={"#464555"}
              style={{position: "absolute", right: 20, top: 25}}
            />
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

                marginBottom: 8,
              }}>
              <Text>Mobile Number</Text>
              <Text style={{marginTop: -1, color: "black"}}>
                {cusData.cus_mobile}
              </Text>
            </View>
            <Icon
              name="arrowright"
              size={14}
              color={"#464555"}
              style={{position: "absolute", right: 20, top: 25}}
            />
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
              size={20}
              color={"#464555"}
              style={{marginTop: 4}}
            />
            <View
              style={{
                paddingHorizontal: 20,

                marginBottom: 8,
              }}>
              <Text>Address</Text>
              <Text style={{marginTop: -1, color: "black"}}>
                {cusData.cus_address}
              </Text>
            </View>
            <Icon
              name="arrowright"
              size={14}
              color={"#464555"}
              style={{position: "absolute", right: 20, top: 25}}
            />
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

                marginBottom: 8,
              }}>
              <Text>Email</Text>
              <Text style={{marginTop: -1, color: "black"}}>
                Ankita@gmail.com
              </Text>
            </View>
            <Icon
              name="arrowright"
              size={14}
              color={"#464555"}
              style={{position: "absolute", right: 20, top: 25}}
            />
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
            <Icon
              name="arrowright"
              size={14}
              color={"#464555"}
              style={{position: "absolute", right: 20, top: 25}}
            />
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
                backgroundColor: "red",
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
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
