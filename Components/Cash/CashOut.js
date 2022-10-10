import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import metrics from '../../Constants/metrics';

const CashOut = () => {
    return (
        <View style={{
            marginHorizontal: metrics.horizontalScale(10),
            // justifySelf:'center',
            // alignSelf:'center'
        }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', width: '100%', alignItems: 'center', marginVertical: metrics.verticalScale(5), paddingVertical: metrics.verticalScale(5), borderRadius: 6 }}>
                <Image source={require('../../Assets/Images/red.png')} style={{ zIndex: 2, width: 14, height: 14 }} />
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