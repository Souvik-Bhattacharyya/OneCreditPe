import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../Constants/metrics';

const ToGet = () => {
    return (
        <View style={{ marginHorizontal: metrics.horizontalScale(10) }}>
            <View style={styles.contactBox}>
                <View style={{ width: 42, height: 42, backgroundColor: '#c3e2ff', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
                    <Text style={{ fontSize: 24, fontWeight: '900', color: '#20409a' }}>A</Text>
                </View>
                <View style={{ paddingHorizontal: metrics.horizontalScale(20) }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Asish Kr Das</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#828282' }}>+91-6502545585</Text>
                </View>
                <View style={{ paddingHorizontal: metrics.horizontalScale(20) }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#F31B24' }}>₹1000</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#828282' }}>To Pay</Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', right: 15 }} >
                    <Icon name="account-cash" color={'#20409a'} size={28} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ToGet;

const styles = StyleSheet.create({
    contactBox: {
        flexDirection: 'row',
        paddingHorizontal: metrics.horizontalScale(20),
        paddingVertical: metrics.verticalScale(15),
        marginVertical: metrics.verticalScale(10),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 6
    }
});