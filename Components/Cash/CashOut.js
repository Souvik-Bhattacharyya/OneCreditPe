
import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";


const CashOut = () => {
  return (
    <View>
      <View style={{
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: metrics.horizontalScale(5),
        paddingVertical: metrics.verticalScale(10),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#c6c6c6',
        width: '100%'
      }}>
        <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
          <IconMat name="account-arrow-right" color={'#F31B24'} size={32} />
        </View>
        <View style={{ width: '20%' }}>
          <Text style={{ color: '#F31B24', fontSize: 18, fontWeight: '800', marginBottom: metrics.verticalScale(5) }}>₹ 1Lkh</Text>
          <Text style={{ color: '#000', fontSize: 12, fontWeight: '800' }}>Cash Out</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Text style={{ color: '#000', fontSize: 14, fontWeight: '600', marginBottom: metrics.verticalScale(5) }}>02 July 22 - 12:53 PM </Text>
          <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>Balance- Rs. 4,220</Text>
          <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>Details he/she has entried here this is a long long details</Text>
        </View>
        <View style={{ width: '10%' }}>
          <TouchableOpacity>
            <IconMat name="image" color={'#0a5ac9'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CashOut;
