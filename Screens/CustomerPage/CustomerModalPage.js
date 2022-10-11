import {useFocusEffect} from "@react-navigation/native";
import React, {useEffect, useRef} from "react";
import {View} from "react-native";
import CustomerModal from "../../Components/CustomerModal";

const CustomerModalPage = ({navigation}) => {
  const ActionSheetRef = useRef(null);
  useFocusEffect(() => {
    if (ActionSheetRef.current) ActionSheetRef.current.show();
  });

  return (
    <View>
      <CustomerModal ActionSheetRef={ActionSheetRef} navigation={navigation} />
    </View>
  );
};

export default CustomerModalPage;
