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
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: metrics.verticalScale(15),
            flex: 1,
            position: 'relative'
        },
        search: {
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: metrics.horizontalScale(10),
            borderColor: '#828282',
            borderWidth: 1,
            borderRadius: 46,
            backgroundColor: '#f6f6f6',
        }
    });

    return (
        <View style={styles.container}>
            <View style={{ borderBottomColor: '#c6c6c6', borderBottomWidth: 1}}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: "center", paddingBottom: 20, paddingHorizontal: metrics.horizontalScale(20) }}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"#828282"}
                            style={{
                                width: '100%',
                                fontSize: 16,
                                color: '#000',
                                fontWeight: '500',
                                position: 'relative',
                                paddingLeft: metrics.horizontalScale(10),
                                // backgroundColor:'#ddd',
                                paddingVertical: metrics.verticalScale(7)
                            }}
                        />
                        <TouchableOpacity style={{ position: 'absolute', right: 20, alignSelf: 'center' }}>
                            <Icon name="search" color={'#333'} size={22} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '20%', justifyContent: 'flex-end', alignItems: 'flex-end', paddingVertical: metrics.verticalScale(5), paddingHorizontal: metrics.horizontalScale(5),
                    }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '80%', borderWidth: 2, paddingVertical: 5, borderColor: '#0A5AC9', borderRadius: 6 }}>
                            <Text style={{ color: '#333', fontSize: 14, fontWeight: '900', color: '#0a5ac9' }}>PDF</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{ width}}>
                    <ToGet />
                    <ToGet />
                    <ToGet />
                    <ToGet />
                    <ToGet />
                    <ToGet />
                    <ToPay />
                    <ToPay />
                    <ToPay />
                    <ToPay />
                    <ToPay />
                </View>
            </ScrollView >
        </View>
    )
}

export default CustomerTransaction;