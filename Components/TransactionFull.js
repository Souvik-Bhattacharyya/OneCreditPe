import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import metrics from '../Constants/metrics';
import CashIn from './Cash/CashIn'
import CashOut from './Cash/CashOut'

const TransactionFull = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#E8EEFF',
            justifyContent: 'flex-start'
        },
        row: {
            alignItems: 'center',
            marginTop: '10%',
            backgroundColor: '#fff',
            paddingVertical: 0,
            paddingHorizontal: 20,
            paddingBottom: 40,
            borderRadius: 30,
            height: 480
        }
    });
    return (

        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ color: '#20409A', fontSize: 20, fontWeight: '600' }}>Today Transaction</Text>
                        <View style={{
                            flexDirection: 'row', width: '50%', borderWidth: 1, borderColor: '#ccc', borderRadius: 100
                        }}>
                            <TextInput
                                placeholder='Search'
                                placeholderTextColor={"#333"}
                                style={{ width: '100%', position: 'relative', paddingLeft: metrics.horizontalScale(20), paddingVertical: metrics.verticalScale(10) }}
                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 10, alignSelf: 'center' }}>
                                <Icon name="search" color={'#ccc'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <CashOut />
                    <CashIn />
                </View>
            </View>
        </>
    )
}

export default TransactionFull;