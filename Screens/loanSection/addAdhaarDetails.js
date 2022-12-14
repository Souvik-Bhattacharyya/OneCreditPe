import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import React, {useEffect, useState} from "react";
import AddIcon from "react-native-vector-icons/Ionicons";
import {useSelector} from "react-redux";
import Api from "../../Services";
import DocumentPicker, {types} from "react-native-document-picker";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import {updateUser} from "../../Redux/Action/authActions";
const AddAdhaarDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state?.auth);

  const [aadhar, setAadhar] = useState(null);
  const [picture, setPicture] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

  useEffect(() => {
    if (user?.aadhar_image) {
      setSavedImage({
        name: user.aadhar_image,
        uri:
          "https://onepay.alsoltech.in/public/assets/user/aadhar_image/" +
          user.aadhar_image,
      });
      setAadhar(user.aadhar_no);
    } else {
      setSavedImage(null);
    }
  }, [user]);

  const UpdateAadharDetails = async () => {
    try {
      const formData = new FormData();
      formData.append("mobile", user.mobile);
      aadhar && formData.append("aadhar_no", aadhar);
      picture && formData.append("aadhar_image", picture);
      console.log("==========>", formData);
      const response = await Api.postForm(
        `/auth/user/${user.id}?_method=put`,
        formData,
      );
      console.log("=====================>", response);
      if (response.status === 200) {
        navigation.replace("AddDetails");
        setPicture(null);
        setSavedImage(null);
        setAadhar(null);
        dispatch(notify({message: response.data.message}));
        dispatch(updateUser({user: response.data.user}));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    try {
      const image = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.images],
      });
      setPicture({name: image[0].name, uri: image[0].uri, type: image[0].type});
      setSavedImage({
        name: image[0].name,
        uri: image[0].uri,
        type: image[0].type,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#F7FBFF",
      }}>
      <View
        style={{
          paddingHorizontal: 10,
          height: "100%",
        }}>
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Enter Your Aadhar number
        </Text>
        <TextInput
          placeholder="Enter Your Aaddhar number"
          onChangeText={text => setAadhar(text)}
          value={aadhar}
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Add Aadhar Image
        </Text>

        <TouchableOpacity
          onPress={() => uploadImage()}
          style={{
            marginTop: 10,
            borderRadius: 5,
            borderColor: "#c6c6c6",
            borderWidth: 1,
            alignItems: "center",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "dotted",
          }}>
          {savedImage ? (
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                zIndex: 100,
              }}
              progressiveRenderingEnabled={true}
              source={savedImage && {uri: savedImage.uri}}
            />
          ) : (
            <AddIcon name="add-circle" size={30} color="#349EFF" />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => UpdateAadharDetails()}
        style={{
          width: "95%",
          backgroundColor: "#0A5AC9",
          justifyContent: "center",
          borderRadius: 20,
          flexDirection: "row",
          position: "absolute",
          bottom: 10,
          alignSelf: "center",
        }}>
        <Text
          style={{
            fontSize: 15,
            color: "#FFFFFF",
            margin: 10,
          }}>
          Post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAdhaarDetails;
