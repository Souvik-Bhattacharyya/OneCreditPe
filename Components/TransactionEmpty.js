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
                    marginTop: metrics.verticalScale(20)
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: metrics.verticalScale(5),
                        paddingHorizontal: metrics.horizontalScale(5),
                        marginBottom: 15,
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        backgroundColor: '#fff'
                    }}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"#828282"}
                            style={{
                                width:'100%',
                                fontSize: 16,
                                color: '#000',
                                fontWeight: '500',
                                position: 'relative',
                                paddingLeft: metrics.horizontalScale(20),
                                paddingVertical: metrics.verticalScale(5)
                            }}
                        />
                        <TouchableOpacity style={{ position: 'absolute', right: 20, alignSelf: 'center'}}>
                            <Icon name="search1" color={'#333'} size={28} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={require('../Assets/Images/add-notes.png')} style={{width:220,height:220,resizeMode:'contain'}} />
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ color: '#333', fontSize: 22, fontWeight: '600', marginBottom: 5}}>No Items Found</Text>
                            <Text style={{ color: '#aaa', fontSize: 18, fontWeight: '500' }}>Click Below to add some</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default TransactionEmpty;