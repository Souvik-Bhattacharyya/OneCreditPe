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
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/Entypo";
import ProfileIcon from "react-native-vector-icons/FontAwesome5";
import EmailIcon from "react-native-vector-icons/MaterialCommunityIcons";
import UpdateIcon from "react-native-vector-icons/Feather";

import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../Redux/Action/authActions";
import {notify} from "../../Redux/Action/notificationActions";
import {Store} from "redux";
import DocumentPicker, {types} from "react-native-document-picker";
import Api from "../../Services";

const UserProfile = ({navigation}) => {
  const width = Dimensions.get("window").width;
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const [Pic, SetPic] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    business_name: "",
    bank_account_no: "",
    profile_image: "",
  });
  console.log("------------------>", user.user);
  useEffect(() => {
    if (user?.user?.mobile) {
      setUserInfo({
        name: user.user.name == null ? null : user.user.name,
        email: user.user.email == null ? null : user.user.email,
        business_name:
          user.user.business_name == null ? null : user.user.business_name,
        bank_account_no:
          user.user.bank_account_no == null ? null : user.user.bank_account_no,
        // profile_image:
        //   user.user.profile_image == null ? null : user.user.profile_image,
      });
      // user.user.profile_image &&
      //   SetPic({
      //     name: user.user.profile_image,
      //     uri:
      //       "https://onepay.alsoltech.in/public/assets/user/profile_image/" +
      //       user.user.profile_image,
      //   });
      user.user.profile_image &&
        setImage({
          name: user.user.profile_image,
          uri:
            "https://onepay.alsoltech.in/public/assets/user/profile_image/" +
            user.user.profile_image,
        });
    }
  }, [user]);
  const uploadImage = async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.images],
      });

      SetPic({
        name: response[0].name,
        uri: response[0].uri,
        type: response[0].type,
      });
      setImage({
        name: response[0].name,
        uri: response[0].uri,
        type: response[0].type,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserDetails = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userInfo.name);
      formData.append("email", userInfo.email);
      formData.append("mobile", user.user.mobile);
      formData.append("business_name", userInfo.business_name);
      formData.append("bank_account_no", userInfo.bank_account_no);
      Pic ? formData.append("profile_image", Pic) : null;
      console.log(formData);
      const response = await Api.postForm(
        `/auth/user/${user.user.id}?_method=put`,
        formData,
      );
      console.log(response.data);
      dispatch(updateUser({user: response.data.user}));
      dispatch(
        notify({
          message: response.data.message,
          notifyType: "success",
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

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
            source={
              image
                ? {uri: image.uri}
                : require("../../Assets/blank-profile.png")
            }
            style={{
              height: 105,
              width: 105,
              // resizeMode: "contain",
              marginVertical: 13,
              alignSelf: "center",
              borderRadius: 50,
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
                value={userInfo.name}
                placeholderTextColor={"#aaa"}
                onChangeText={e => setUserInfo({...userInfo, name: e})}
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
                paddingVertical: 20,
                // marginTop: 10
              }}>
              <ProfileIcon
                name="phone"
                color={"#464555"}
                size={20}
                style={{marginRight: 10, marginRight: 20}}
              />
              <Text
                style={{
                  color: "#464555",
                  opacity: 0.6,
                  fontSize: 18,
                  fontWeight: "500",
                  width: "100%",
                }}>
                {"+91 " + user.user.mobile}
              </Text>
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
                value={userInfo.email}
                placeholder="Email Id"
                placeholderTextColor={"#aaa"}
                onChangeText={e => setUserInfo({...userInfo, email: e})}
                style={{
                  color: "#464555",
                  fontSize: 18,
                  fontWeight: "500",
                  width: "100%",
                }}
              />
            </View>
            {/* <View
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
                value={userInfo.bank_account_no}
                placeholderTextColor={"#aaa"}
                onChangeText={e =>
                  setUserInfo({...userInfo, bank_account_no: e})
                }
                style={{
                  color: "#464555",
                  fontSize: 18,
                  fontWeight: "500",
                  width: "100%",
                }}
              />
            </View> */}
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
                value={userInfo.business_name}
                placeholderTextColor={"#aaa"}
                onChangeText={e => setUserInfo({...userInfo, business_name: e})}
                style={{
                  color: "#464555",
                  fontSize: 18,
                  fontWeight: "500",
                  width: "85%",
                }}
              />
              <TouchableOpacity
                style={{color: "green"}}
                onPress={() => navigation.navigate("BusinessBank")}>
                <UpdateIcon
                  name="edit"
                  color={"#12ce12"}
                  size={16}
                  style={{marginVertical: 3, marginRight: 6}}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={updateUserDetails}
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
