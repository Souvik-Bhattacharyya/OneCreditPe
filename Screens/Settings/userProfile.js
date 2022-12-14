import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import ProfileIcon from "react-native-vector-icons/FontAwesome5";
import EmailIcon from "react-native-vector-icons/MaterialCommunityIcons";
import KycIcon from "react-native-vector-icons/Entypo";
import {useDispatch, useSelector} from "react-redux";
import DocumentPicker, {types} from "react-native-document-picker";

const UserProfile = ({navigation}) => {
  const width = Dimensions.get("window").width;
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [Pic, SetPic] = React.useState("");

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
  console.log("user", user);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        // justifyContent:'space-between'
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
      <ScrollView>
        <View
          style={{
            // backgroundColor: '#f6f6f6',
            marginVertical: 20,
            height: 450,
            justifyContent: "flex-start",
          }}>
          <KeyboardAvoidingView>
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
                placeholder="Your Name"
                value={user.username}
                placeholderTextColor={"#aaa"}
                style={{
                  color: "#464555",
                  fontSize: 18,
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
                // marginTop: 10
              }}>
              <ProfileIcon
                name="phone"
                color={"#464555"}
                size={20}
                style={{marginRight: 10, marginRight: 20}}
              />
              <TextInput
                value={"+91 " + user.mobile}
                placeholderTextColor={"#aaa"}
                style={{
                  color: "#464555",
                  fontSize: 18,
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
                // marginTop: 10
              }}>
              <EmailIcon
                name="email"
                color={"#464555"}
                size={22}
                style={{marginRight: 10, marginRight: 20}}
              />
              <TextInput
                value={user.email}
                placeholder="Email Id"
                placeholderTextColor={"#aaa"}
                style={{
                  color: "#464555",
                  fontSize: 18,
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
              <EmailIcon
                name="bank"
                color={"#464555"}
                size={22}
                style={{marginRight: 10, marginRight: 20}}
              />
              <TextInput
                placeholder="Bank Account No"
                // value={user.name}
                placeholderTextColor={"#aaa"}
                style={{
                  color: "#464555",
                  fontSize: 18,
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

                // marginTop: 10
              }}>
              <ProfileIcon
                name="building"
                color={"#464555"}
                size={20}
                style={{marginRight: 10, marginRight: 20}}
              />
              <TextInput
                placeholder="Business Name"
                value={user.name}
                placeholderTextColor={"#aaa"}
                style={{
                  color: "#464555",
                  fontSize: 18,
                  fontWeight: "500",
                  width: "100%",
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",

                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
              <KycIcon
                name="v-card"
                color={"#464555"}
                size={24}
                style={{marginRight: 10, marginRight: 20}}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("AddDetails")}>
                <Text
                  style={{
                    color: "#464555",
                    fontSize: 18,
                    fontWeight: "500",
                    width: "100%",
                  }}>
                  KYC
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "#0a5ac9",
          paddingVertical: 15,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
          marginBottom: 10,
          marginTop: "auto",
        }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
