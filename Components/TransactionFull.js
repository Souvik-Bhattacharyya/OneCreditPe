import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../Constants/metrics';
import CashIn from './Cash/CashIn'
import CashOut from './Cash/CashOut'

const TransactionFull = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#E8EEFF',
            justifyContent: 'flex-start',
        },
        row: {
            alignItems: 'center',
            marginTop: '10%',
            paddingVertical: 0,
            paddingHorizontal: 20,
            paddingBottom: 40,
            borderRadius: 30,
            height: 400
        }
    });
    return (

        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, marginBottom: 10 }}>
                        <View style={{
                            flexDirection: 'row', width: '65%', borderWidth: 1, borderColor: '#ccc', borderRadius: 6
                        }}>
                            <TextInput
                                placeholder='Search'
                                placeholderTextColor={"#828282"}
                                style={{ width: '100%', color:'#333',position: 'relative', paddingLeft: metrics.horizontalScale(20), paddingVertical: metrics.verticalScale(5) }}
                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 10, alignSelf: 'center' }}>
                                <Icon name="search" color={'#333'} size={18} />
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