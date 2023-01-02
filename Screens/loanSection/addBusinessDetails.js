import {View, Text, TextInput, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import CorrectIcon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
import {useDispatch, useSelector} from "react-redux";
import Api from "../../Services";
import {notify} from "../../Redux/Action/notificationActions";
import {updateBusiness} from "../../Redux/Action/authActions";
const AddBusinessDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.business);
  const [businessDetails, setBusinessDetails] = useState({
    bns_name: "My business",
    bns_address: null,
    bns_type: null,
    gstin_no: null,
  });
  useEffect(() => {
    setBusinessDetails({
      ...businessDetails,
      bns_address: userData.bns_address,
      bns_type: userData.bns_type,
      gstin_no: userData.gstin_no,
    });
  }, [userData]);

  const updateBusinessDetails = async () => {
    try {
      const formdata = new FormData();
      formdata.append("bns_name", businessDetails.bns_name);
      formdata.append("bns_address", businessDetails.bns_address);
      formdata.append("bns_type", businessDetails.bns_type);
      formdata.append("gstin_no", businessDetails.gstin_no);
      const response = await Api.postForm(
        `/auth/business/${route.params?.businessId}?_method=put`,
        formdata,
      );
      console.log(response.data);
      if (response.data.status == 200) {
        setBusinessDetails({
          ...businessDetails,
          bns_name: "My business",
          bns_address: null,
          bns_type: null,
          gstin_no: null,
        });
        const payload = {
          business: {
            id: response.data.bns_id,
            user_id: response.data.data.user_id,
            bns_name: response.data.data.bns_name,
            bns_type: response.data.data.bns_type,
            gstin_no: response.data.data.gstin_no,
            bns_address: response.data.data.bns_address,
          },
        };
        console.log("-------------------------------------->", payload);
        navigation.replace("BusinessBank");
        dispatch(updateBusiness(payload));
        dispatch(notify({message: response.data.message}));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#D2D2D2",
      }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
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
          Enter Your Business Details
        </Text>
        <TextInput
          value={businessDetails.bns_address}
          onChangeText={val =>
            setBusinessDetails({...businessDetails, bns_address: val})
          }
          placeholder="Business Address"
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

        <TextInput
          value={businessDetails.bns_type}
          onChangeText={val =>
            setBusinessDetails({...businessDetails, bns_type: val})
          }
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Business Type"
        />

        <TextInput
          value={businessDetails.gstin_no}
          onChangeText={val =>
            setBusinessDetails({...businessDetails, gstin_no: val})
          }
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="GSTIN
"
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
          }}>
          <CorrectIcon
            name="checkcircle"
            size={15}
            color="#0A5AC9"
            style={{marginTop: 14}}
          />
          <Text style={{fontSize: 13, padding: 12}}>
            Are you sure to update this info ?
          </Text>
        </View>
        <TouchableOpacity
          onPress={updateBusinessDetails}
          style={{
            width: "100%",
            backgroundColor: "#0A5AC9",
            marginTop: 10,
            marginBottom: 20,
            justifyContent: "center",
            borderRadius: 50,
            flexDirection: "row",
            position: "absolute",
            bottom: -9,
            alignSelf: "center",
          }}>
          <Text
            style={{
              fontSize: 15,

              color: "#FFFFFF",
              margin: 10,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBusinessDetails;
