import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../Constants/metrics';
import { useNavigation } from "@react-navigation/native";

const ToGetUser = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('UserDetails')}
                style={styles.contactBox}>
                <View style={{ width: 42, height: 42, backgroundColor: '#c3e2ff', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
                    <Text style={{ fontSize: 24, fontWeight: '900', color: '#0A5AC9' }}>A</Text>
                </View>
                <View style={{ paddingHorizontal: metrics.horizontalScale(20) }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>Some One</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#828282' }}>Date Time</Text>
                </View>
                <View style={{ paddingHorizontal: metrics.horizontalScale(20) }}>
                    <Text style={{ fontSize: 18, fontWeight: '800', color: '#12CE12' }}>₹100</Text>
                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#828282' }}>To Get</Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', right: 15 }} >
                    <Icon name="account-cash" color={'#0A5AC9'} size={28} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default ToGetUser;

const styles = StyleSheet.create({
    contactBox: {
        flexDirection: 'row',
        paddingHorizontal: metrics.horizontalScale(20),
        paddingVertical: metrics.verticalScale(15),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#c6c6c6',
        width: '100%'
    }
});