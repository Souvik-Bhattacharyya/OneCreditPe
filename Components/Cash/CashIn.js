import { View, Text,Image} from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import metrics from '../../Constants/metrics';

const CashIn = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginVertical: metrics.verticalScale(20),paddingHorizontal: metrics.horizontalScale(20) }}>
                <Image source={require('../../Assets/Images/green.png')} style={{ zIndex: 2 }} />
                <View>
                    <Text style={{ color: '#12CE12', fontSize: 24, fontWeight: '600', marginBottom: metrics.verticalScale(5) }}>₹ 22.00</Text>
                    <Text style={{ color: '#828282', fontSize: 18, fontWeight: '500' }}>Cash In</Text>
                </View>
                <View>
                    <Text style={{ color: '#828282', fontSize: 14, fontWeight: '600', marginBottom: metrics.verticalScale(5) }}>02 July 22 - 12:53 PM </Text>
                    <Text style={{ color: '#828282', fontSize: 12, fontWeight: '500' }}>Balance- Rs. 4,220</Text>
                </View>
            </View>
        </View>
    )
}

export default CashIn;