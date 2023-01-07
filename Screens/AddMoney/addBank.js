import {Text, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import KotakBank from "../../Assets/kotak-mahindra-bank.png";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const Addbank = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  return (
    <>
      {loading && (
        <TouchableOpacity
          onPress={() => {
            setLoading(false);
            setSuccess(true);
            setFailure(false);
          }}
          style={{
            height: 250,
            width: 355,
            backgroundColor: "white",
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <Image source={KotakBank} style={{marginLeft: 90}} />
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 90}}>
            Verifying Your Mobile
          </Text>
        </TouchableOpacity>
      )}
      {success && (
        <TouchableOpacity
          onPress={() => {
            setLoading(false);
            setSuccess(false);
            setFailure(true);
          }}
          style={{
            height: 250,
            width: 355,
            backgroundColor: "white",
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <Image source={KotakBank} style={{marginLeft: 90}} />
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 70}}>
            Mobile Number Verified Successfully
          </Text>
          <AntDesign name="checkcircle" size={90} color='green' style={{marginLeft:130,marginTop:10}}/>
        </TouchableOpacity>
      )}

      {failure && (
        <TouchableOpacity
          style={{
            height: 250,
            width: 355,
            backgroundColor: "white",
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <Image source={KotakBank} style={{marginLeft: 90}} />
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 30}}>
            Does't found any account with these mobile number
          </Text>
          <Entypo name="circle-with-cross" size={100} color='red' style={{marginLeft:130,marginTop:10}}/>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Addbank;
