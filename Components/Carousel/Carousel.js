import React from "react";
import {View, FlatList} from "react-native";
import CaroItem from "./CaroItem";

const data = [
  // {
  //   id: "1",
  //   title: "Request Money",
  //   iconName: "account-arrow-up-outline",
  // },
  // {
  //   id: "2",
  //   title: "Send Money",
  //   iconName: "account-arrow-down-outline",
  // },
  // {
  //   id: "1",
  //   title: "My QR",
  //   iconImage: require('../../Assets/MyQRCode.png'),
  // },
  // {
  //   id: "2",
  //   title: "Mobile Recharge",
  //   iconName: "cellphone-check",
  // },
  // {
  //   id: "3",
  //   title: "Utility Bill",
  //   iconName: "script-text",
  // },
  {
    id: "4",
    title: "My Reward",
    iconName: "gift",
    navigate: "",
  },
  {
    id: "5",
    title: "Rent Pay",
    iconName: "bank",
    navigate: "RentHome",
  },
  {
    id: "5",
    title: "My Wallet",
    iconName: "wallet",
    navigate: "AddMoney",
  },
];

const Welcome = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => <CaroItem item={item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_, i) => String(i)}
        numColumns={3}
      />
    </View>
  );
};

export default Welcome;
