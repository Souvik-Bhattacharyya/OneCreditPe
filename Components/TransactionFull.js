import { View, ScrollView, TouchableOpacity, StyleSheet, TextInput,Dimensions } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../Constants/metrics';
import CashIn from './Cash/CashIn'
import CashOut from './Cash/CashOut'

const width = Dimensions.get('window').width;

const TransactionFull = () => {
    const styles = StyleSheet.create({
        container: {
            height: metrics.verticalScale(450),
            // width,
            // flex:1,
            backgroundColor: '#E8EEFF',
            alignItems: 'center',
            justifyContent:'center',
            marginTop: metrics.verticalScale(10)
        },
        search: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: metrics.verticalScale(5),
            paddingHorizontal: metrics.horizontalScale(5),
            marginBottom: 15,
            borderColor: '#828282',
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: '#fff'
        }
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={"#828282"}
                        style={{
                            width,
                            fontSize: 16,
                            color: '#000',
                            fontWeight: '500',
                            position: 'relative',
                            paddingLeft: metrics.horizontalScale(20),
                            paddingVertical: metrics.verticalScale(5)
                        }}
                    />
                    <TouchableOpacity style={{ position: 'absolute', right: 20, alignSelf: 'center' }}>
                        <Icon name="search" color={'#333'} size={18} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width}}>
                    <CashOut />
                    <CashIn />
                    <CashIn />
                    <CashIn />
                    <CashIn />
                    <CashIn />
                    <CashIn />
                </ScrollView>
            </View>
        </>
    )
}

export default TransactionFull;