import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {Divider} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
import DocumentPicker, {types} from "react-native-document-picker";
import {useNavigation} from "@react-navigation/native";

const MonthPeDetails = () => {
  const navigation = useNavigation();
  const [addMore, setAddMore] = useState(0);
  const [picture, setPicture] = useState(null);
  const [savedImage, setSavedImage] = useState(null);
  const [billInfo, setBillInfo] = useState([{amount: 0, description: ""}]);
  console.log("==========>", billInfo);
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

  const MoreInfo = ({amount, description, id}) => (
    <>
      <Divider
        style={{
          borderWidth: 1,
          borderColor: "#7CACFE",
          marginHorizontal: 20,
          marginVertical: 30,
        }}
      />
      <View style={{marginHorizontal: 20, backgroundColor: "#fff"}}>
        <TextInput
          value={amount}
          placeholder="Amount (₹)"
          // onChangeText={val => {
          //   billInfo.forEach((bill, index) => {
          //     if (index === id) {
          //       bill.amount = val;
          //     }
          //   });
          //   setBillInfo(billInfo);
          // }}
          style={{
            borderWidth: 1,
            borderColor: "#c6c6c6",
            padding: 10,
            marginBottom: 10,
          }}
        />
        <TextInput
          value={description}
          placeholder="Description"
          // onChangeText={val => {
          //   const temp = billInfo.map((bill, index) => {
          //     if (index === id) {
          //       bill.description = val;
          //     }
          //     return bill;
          //   });
          //   setBillInfo(temp);
          // }}
          style={{
            borderWidth: 1,
            borderColor: "#c6c6c6",
            padding: 10,
          }}
        />
      </View>
    </>
  );
  return (
    <>
      <SafeAreaView style={{height: "78%", paddingVertical: 30}}>
        <ScrollView>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <TouchableOpacity
              onPress={() => uploadImage()}
              style={{
                width: "90%",
                paddingVertical: 45,
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
                  <Icon
                    name="cloud-upload-outline"
                    color={"#0A5AC9"}
                    size={40}
                  />
                  <Text style={{fontSize: 20, fontWeight: "bold", padding: 10}}>
                    Upload Bill (Opional)
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
          {billInfo.map((val, index) => (
            <MoreInfo
              amount={val.amount}
              description={val.description}
              id={index}
              key={index}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => setAddMore(addMore + 1)}
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "row",
          // paddingVertical: 5,
          paddingHorizontal: 10,
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: "#0A5AC9",
          marginHorizontal: "65%",
          marginVertical: 10,
        }}>
        <Icon2
          name="plus"
          color={"#fff"}
          size={16}
          style={{marginVertical: 8, paddingHorizontal: 5}}
        />
        <Text style={{color: "#fff"}}>Add More</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("RentPeMode")}
        style={{
          borderRadius: 20,
          backgroundColor: "#0A5AC9",
          padding: 10,
          // marginTop: 100,
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
    </>
  );
};

export default MonthPeDetails;
