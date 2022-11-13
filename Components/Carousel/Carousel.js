import React from "react";
import {
  View,
  FlatList,
} from "react-native";
import CaroItem from "./CaroItem";

const data = [
  {
    id: "1",
    title: "Request Money",
    iconName: "account-arrow-up-outline",
  },
  {
    id: "2",
    title: "Send Money",
    iconName: "account-arrow-down-outline",
  },
  // {
  //   id: "3",
  //   title: "My QR",
  //   iconName: require('../../Assets/MyQR.png'),
  // },
  {
    id: "4",
    title: "My Wallet",
    iconName: 'wallet',
  },
  {
    id: "5",
    title: "Rent Pay",
    iconName: "bank",
  },
];

const Welcome = () => {
  return (
    <View style={{
      flexDirection: 'row',
      width: '100%',

    }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CaroItem item={item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_ , i) => String(i)}
        numColumns={3}
      />
    </View>
  );
};


export default Welcome;