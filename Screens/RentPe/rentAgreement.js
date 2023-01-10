import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, Image, Alert} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import DocumentPicker, {types} from "react-native-document-picker";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {updateAgreement} from "../../Redux/Action/rentActions";

const RentAgreement = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const rent = useSelector(state => state.allDetailsOfRental);
  console.log(useSelector(state => state.addRent));
  const [picture, setPicture] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

  useEffect(() => {
    if (rent.agreement_image) {
      setSavedImage({
        name: rent.agreement_image,
        uri:
          "https://onepay.alsoltech.in/public/assets/user/profile_image/" +
          rent.agreement_image,
      });
    } else {
      setSavedImage(null);
    }
  }, [rent]);

  const uploadAgreement = () => {
    if (picture && savedImage) {
      dispatch(updateAgreement({agreement: picture}));
      navigation.navigate("RentPanUpload");
    } else if (!picture && savedImage) {
      navigation.navigate("RentPanUpload");
    } else {
      Alert.alert("Please Upload Agreement Or Skip");
    }
  };
  // -----------------------------------------------
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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <TouchableOpacity
          onPress={() => uploadImage()}
          style={{
            width: "90%",
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // borderRadius: 20,
            borderWidth: 1,
            borderColor: "#c6c6c6",
            backgroundColor: "#fff",
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
            <>
              <Icon name="file-plus" color={"#0A5AC9"} size={40} />
              <Text style={{fontSize: 20, fontWeight: "bold", padding: 10}}>
                Upload Agreement
              </Text>
            </>
          )}
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          <TouchableOpacity
            onPress={uploadAgreement}
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
            onPress={() => navigation.navigate("RentPanUpload")}
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
      </View>
    </>
  );
};

export default RentAgreement;
