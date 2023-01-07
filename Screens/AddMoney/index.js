import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import React, {useState} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import AddMoneySection from "./addMoneySection";
import MobileRecharge from "./mobileRecharge";
import Addbank from "./addBank";
import WalletIcon from "../../Assets/WalletSectionIcon.png";

const AddMoney = () => {
  const [value, setValue] = useState(0);
  const [textValue, setTextValue] = useState(null);
  const [total, setTotal] = useState(0);
  const [addMoneySection, setAddMoneySection] = useState(true);
  const [mobileRechargeSection, setMobileRechargeSection] = useState(false);
  const [addBankSection, setAddBankSection] = useState(false);

  const addToWallet = () => {
    setTotal(prev => prev + Number(textValue));
    setTextValue(0);
  };

  let wallet = total + value;
  return (
    <View style={{backgroundColor: "#EEF3FF", height: "100%"}}>

    {/* Image container */}
            <View style={styles.imageContainer}>
              <Image source={WalletIcon} style={{height:100,width:100,marginLeft:50}} />
            </View>
      {/* Wallet Section */}
      <View style={styles.walletContainer}>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 12,
            marginTop: 15,
            marginLeft: 20,
          }}>
          Wallet Balance
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 20,
            marginLeft: 20,
          }}>
          ₹ 500.00
        </Text>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <View style={{position: "relative"}}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setAddMoneySection(true);
              setMobileRechargeSection(false);
              setAddBankSection(false);
            }}>
            <View style={[styles.icon, {paddingLeft: 15, paddingTop: 8}]}>
              <FontAwesome name="rupee" size={40} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={{position: "absolute", top: 80, left: 15}}>
            Add Money
          </Text>
        </View>
        <View style={{position: "relative"}}>
          <TouchableOpacity
            onPress={() => {
              setMobileRechargeSection(true);
              setAddMoneySection(false);
              setAddBankSection(false);
            }}
            style={styles.iconContainer}>
            <View style={[styles.icon, {paddingLeft: 15, paddingTop: 2}]}>
              <FontAwesome name="mobile-phone" size={45} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={{position: "absolute", top: 80, left: 0}}>
            Mobile Recharge
          </Text>
        </View>

        <View style={{position: "relative"}}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setMobileRechargeSection(false);
              setAddMoneySection(false);
              setAddBankSection(true);
            }}>
            <View style={[styles.icon, {paddingLeft: 10, paddingTop: 8}]}>
              <FontAwesome name="bank" size={30} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={{position: "absolute", top: 80, left: 2}}>
            Add From Bank
          </Text>
        </View>
      </View>

      {/* Add Money Container */}
      {addMoneySection && (
        <AddMoneySection
          textValue={textValue}
          value={value}
          wallet={wallet}
          setValue={setValue}
          setTextValue={setTextValue}
          setTotal={setTotal}
          addToWallet={addToWallet}
        />
      )}

      {/* Mobile Recharge  */}
      {mobileRechargeSection && <MobileRecharge />}

      {/* Add from Bank Section */}
      {addBankSection && <Addbank />}
    </View>
  );
};

export const Button = ({title, handleClick,paddingLeft}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={handleClick}
        style={{
          height: 50,
          width: 360,
          backgroundColor: "#0A5AC9",
          borderRadius: 10,
          paddingLeft: paddingLeft,
          marginTop: 20,
          paddingTop: 15,
        }}>
        <Text style={{fontWeight: "500", fontSize: 16, color: "white"}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMoney;
