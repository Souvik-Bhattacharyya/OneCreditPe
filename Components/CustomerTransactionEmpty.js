import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import metrics from '../Constants/metrics';

const CustomerTransactionEmpty = () => {
    return (

        <>
            <View style={{
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: metrics.verticalScale(15),
                flex: 1,
                position: "relative",
                borderColor: "#c6c6c6",
                borderWidth: 0.8,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: metrics.verticalScale(20)
                    // backgroundColor:'#ddd',
                }}>
                    <View>
                        <Image source={require('../Assets/Images/add-notes.png')} style={{ width: 220, height: 220, resizeMode: 'contain', marginTop: '-20%'}} />
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ color: '#464555', fontSize: 22, fontWeight: '800', marginBottom: 5 }}>No Items Found</Text>
                            <Text style={{ color: '#aaa', fontSize: 18, fontWeight: '500', marginBottom: 5}}>Click below to add some</Text>
                            <Icon name='arrowdown' color={'#aaa'} size={24}/>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default CustomerTransactionEmpty;