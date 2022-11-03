import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../Constants/metrics';
import { useNavigation } from "@react-navigation/native";

const ToPayUser = () => {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('UserDetails')}
                style={styles.contactBox}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '50%', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <View style={{ width: 42, height: 42, backgroundColor: '#c3e2ff', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
                        <Text style={{ fontSize: 24, fontWeight: '900', color: '#0A5AC9' }}>A</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>Asish Das</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#828282' }}>22 Aug 22 - 12:55PM</Text>
                    </View>
                </View>
                <View style={{ width: '40%', alignItems: 'flex-end', backgroundColor: '#fff' }}>
                    <Text style={{ fontSize: 18, fontWeight: '800', color: '#ED1C24' }}>₹100</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#828282' }}>To Pay</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default ToPayUser;

const styles = StyleSheet.create({
    contactBox: {
        flexDirection: 'row',
        paddingHorizontal: metrics.horizontalScale(15),
        paddingVertical: metrics.verticalScale(15),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: .5,
        borderColor: '#c6c6c6',
        width: '100%',
        justifyContent: 'space-between'
    }
});