import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";



const CaroItem = ({ item }) => {
    return (
        <TouchableOpacity style={{ width: 110, height: '100%' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                <View style={{ height: 54, width: 54, backgroundColor: '#20409a', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.image} style={{ resizeMode: 'contain', width: '100%' }} />
                </View>
                <Text style={{ fontSize: 14, fontWeight: '700', marginTop: 5, color: '#20409a', textAlign: 'center' }}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CaroItem;