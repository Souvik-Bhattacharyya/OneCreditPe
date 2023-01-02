import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import React, {useEffect, useState} from "react";
import AddIcon from "react-native-vector-icons/Ionicons";
import {useSelector} from "react-redux";
import Api from "../../Services";
import DocumentPicker, {types} from "react-native-document-picker";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Action/notificationActions";
import {updateUser} from "../../Redux/Action/authActions";
import {useNavigation} from "@react-navigation/native";

const RentPanUpload = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pan, setPan] = useState(null);
  const [picture, setPicture] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

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
    <>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Enter Your Pan number
        </Text>
        <TextInput
          placeholder="Enter Your Pan number"
          onChangeText={text => {
            setPan(text);
          }}
          value={pan}
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
          Add Pan Image
        </Text>

        <TouchableOpacity
          onPress={() => uploadImage()}
          style={{
            marginTop: 10,
            borderRadius: 5,
            borderColor: "#c6c6c6",
            borderWidth: 0.8,
            alignItems: "center",
            height: 200,
            // width: 400,
            justifyContent: "center",
            alignItems: "center",
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
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MonthPeDetails")}
          style={{
            width: "40%",
            borderRadius: 20,
            backgroundColor: "#0A5AC9",
            padding: 10,
            marginTop: 100,
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
            }}>
            Next
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MonthPeDetails")}
          style={{
            width: "40%",
            borderRadius: 20,
            backgroundColor: "#737171",
            padding: 10,
            marginTop: 100,
          }}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RentPanUpload;