import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react';
import metrics from '../../../Constants/metrics';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomerHome = () => {
    const images = [
        {
            banner: require('./ images / banner1.png'),
            desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
            banner: require('./ images / banner2.png'),
            desc:
                'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
    ]

const sliderWindow = ({item})=>{
    <View>
        
    </View>
} 


    return (
        <>
            <View style={styles.container}>
                <View style={[styles.card, { paddingBottom: 10 }]}>
                    <View style={styles.cardBody}>
                        <View style={styles.boxOne}>
                            <Text style={{ fontSize: 24, color: '#1790FF', fontWeight: 'bold', fontFamily: 'Roboto' }}>₹ 0</Text>
                            <Text style={{ color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto' }}>Cash In Hand</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={{ fontSize: 24, color: '#12CE12', fontWeight: 'bold', fontFamily: 'Roboto' }}>₹ 0</Text>
                            <Text style={{ color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto' }}>Today's Income</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={styles.boxOne}>
                            <Text style={{ fontSize: 24, color: '#20409a', fontWeight: 'bold', fontFamily: 'Roboto' }}>₹ 0</Text>
                            <Text style={{ color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto' }}>Cash In Hand</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={{ fontSize: 24, color: '#20409a', fontWeight: 'bold', fontFamily: 'Roboto' }}>₹ 0</Text>
                            <Text style={{ color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto' }}>Today's Income</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cardBtn}>
                        <Text style={{
                            fontSize: 16, color: '#fff', fontWeight: '700', marginRight: 12, fontFamily: 'Poppins'
                        }}>Cashbook</Text>
                        <Icon name="doubleright" color={'#fff'} size={16} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, height: 130, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 6 }}>
                    <View style={{ width: '30%', justifyContent: "center", alignItems: 'center' }}>
                        <Image source={require('../../../Assets/loanSec.png')} />
                    </View>
                    <View style={{ width: '70%', paddingHorizontal: 20 }}>
                        <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}>Easy Loan</Text>
                        <Text style={{ color: '#828282' }}>Get easy loan without any paperwork</Text>
                        <TouchableOpacity style={{ marginTop: 10, justifyContent: 'center' }}>
                            <Text style={{ color: '#20409a', fontSize: 16 }}>Apply Now <Icon name="doubleright" color={'#20409a'} size={16} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, height: 130, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 6 }}>
                    <FlatList
                        data={images}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </>
    )
}

export default CustomerHome;

const color = { color: "#20409a" };

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: metrics.horizontalScale(20),
        backgroundColor: '#E8EEFF',
        paddingVertical: metrics.verticalScale(15),
        position: 'relative',
        flex: 1
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: metrics.verticalScale(10),
        borderRadius: 6,
        marginBottom: 20
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxOne: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        paddingVertical: metrics.verticalScale(15),
        borderRightWidth: 1,
        borderColor: '#A6B3D7'

    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: metrics.horizontalScale(40),
        paddingVertical: metrics.verticalScale(15)

    },
    cardBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'dodgerblue',
        paddingVertical: metrics.verticalScale(6),
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginTop: 10
    },
});