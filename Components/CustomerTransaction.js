import { View, ScrollView, TouchableOpacity, StyleSheet, TextInput, Dimensions, Text } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../Constants/metrics';
import ToPay from './Cash/ToPay'
import ToGet from './Cash/ToGet'

const width = Dimensions.get('window').width;

const CustomerTransaction = () => {
    const styles = StyleSheet.create({
        container: {
            height: metrics.verticalScale(450),
            backgroundColor: '#E8EEFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: metrics.verticalScale(10)
        },
        search: {
            flexDirection: 'row',
            width: '75%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: metrics.verticalScale(5),
            paddingHorizontal: metrics.horizontalScale(5),
            borderColor: '#828282',
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: '#fff'
        }
    });

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: "center", marginBottom: 15 }}>
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
                    <View style={{width: '25%', justifyContent: 'flex-end', alignItems: 'flex-end', paddingVertical: metrics.verticalScale(5), paddingHorizontal: metrics.horizontalScale(5),
                    }}>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
                            <Icon name="file-pdf-o" color={'#333'} size={22} />
                            <Text style={{ color: '#333', fontSize: 18 }}>PDF</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{ width }}>
                    <ToPay />
                    <ToGet />
                </ScrollView>
            </View>
        </>
    )
}

export default CustomerTransaction;