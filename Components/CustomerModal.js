import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Modal, StyleSheet, Text, Image, View } from "react-native";
import metrics from "../Constants/metrics";
import ActionSheet from "react-native-actions-sheet";

const CustomerModal = ({ navigation }) => {
  const ActionSheetRef = useRef(null);
  useState(() => {
    navigation.addListener("focus", () => {
      ActionSheetRef.current.show()
    });
  }, [navigation]);
  return (
    <View style={[styles.centeredView, { backgroundColor: '#E8EEFF' }]}>
      <ActionSheet ref={ActionSheetRef} closeOnTouchBackdrop={false}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('NewCustomer')}>
            <Image source={require('../Assets/add-user.png')} />
            <Text style={styles.text}>Manage Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image source={require('../Assets/manage-supplier.png')} />
            <Text style={styles.text}>Manage Supplier</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    width: '100%',
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: "center",
    // position: "absolute",
    // bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: metrics.verticalScale(25),
    paddingHorizontal: metrics.horizontalScale(25),
    width: '50%'
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center'
  }
});

export default CustomerModal;