import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
  useWindowDimensions
} from "react-native";
import CaroItem from "./CaroItem";

const data = [
  {
    id: "1",
    title: "Request Money",
    image: require('../../Assets/ReqMoney.png'),
  },
  {
    id: "2",
    title: "Send Money",
    image: require('../../Assets/SendMoney.png'),
  },
  {
    id: "3",
    title: "My QR",
    image: require('../../Assets/MyQR.png'),
  },
  {
    id: "4",
    title: "My Wallet",
    image: require('../../Assets/MyWallet.png'),
  },
  {
    id: "5",
    title: "Rent Pay",
    image: require('../../Assets/RentPay.png'),
  },
];

const Welcome = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <FlatList
        data={data} renderItem={({ item }) => <CaroItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        bounces={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        on
      />
    </View>
  );
};


export default Welcome;