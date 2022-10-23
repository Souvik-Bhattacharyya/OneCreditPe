import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import metrics from '../Constants/metrics';

const TransactionEmpty = () => {
    return (

        <>
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "20%",
                    backgroundColor:'#ddd',
                }}>
                    <View>
                        <Image source={require('../Assets/Images/add-notes.png')} style={{ width: 220, height: 220, resizeMode: 'contain' }} />
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ color: '#333', fontSize: 22, fontWeight: '600', marginBottom: 5 }}>No Items Found</Text>
                            <Text style={{ color: '#aaa', fontSize: 18, fontWeight: '500' }}>Click Below to add some</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default TransactionEmpty;