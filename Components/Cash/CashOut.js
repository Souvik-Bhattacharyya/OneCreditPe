import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from '../../Constants/metrics';

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
                <View>
                    <IconMat name="account-arrow-right" color={'#ED1C24'} size={32} />
                </View>
                <View>
                    <Text style={{ color: '#ED1C24', fontSize: 18, fontWeight: '800', marginBottom: metrics.verticalScale(5) }}>₹ 22.00</Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '800' }}>Cash Out</Text>
                </View>
                <View>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '600', marginBottom: metrics.verticalScale(5) }}>02 July 22 - 12:53 PM </Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>Balance- Rs. 4,220</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="delete" color={'#ED1C24'} size={18} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CashOut;