import { View, ScrollView, TouchableOpacity, StyleSheet, TextInput, Dimensions,Text } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../Constants/metrics';
import CashIn from './Cash/CashIn'
import CashOut from './Cash/CashOut'

const width = Dimensions.get('window').width;

const TransactionFull = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            position: 'relative'
        },
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ width }}>
                    <CashOut/>
                    <CashOut/>
                    <CashOut/>
                    <CashOut/>
                    <CashOut/>
                    <CashOut/>
                    <CashIn/>
                    <CashIn/>
                    <CashIn/>
                    <CashIn/>
                    <CashIn/>
                </View>
            </ScrollView >
        </View>
    )
}

export default TransactionFull;