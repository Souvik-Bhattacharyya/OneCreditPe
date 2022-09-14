import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const TransactionEmpty = () => {
    return (

        <>
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                    backgroundColor: '#fff',
                    paddingVertical: 0,
                    paddingHorizontal: 20,
                    paddingBottom: 40,
                    borderRadius: 30,
                    height: 480
                }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ color: '#20409A', fontSize: 22, fontWeight: '600' }}>Today Transaction</Text>
                        <TouchableOpacity>
                            <Icon name="search1" color={'#ccc'}  size={24} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={require('../Assets/Images/add-notes.png')} />
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={{ color: '#333', fontSize: 22, fontWeight: '600' }}>No Items Found</Text>
                            <Text style={{ color: '#aaa', fontSize: 18, fontWeight: '500' }}>Click Below to add some</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default TransactionEmpty;