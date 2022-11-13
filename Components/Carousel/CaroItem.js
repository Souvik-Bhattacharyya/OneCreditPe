import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const CaroItem = ({ item }) => {
    return (
        <TouchableOpacity style={{
            width: '34%',
            height: 110,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
        }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 0, }}>
                <View style={{ height: 54, width: 54, backgroundColor: '#E7EFFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={item.iconName} color={'#0a5ac9'} size={36}/>
                </View>
                <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 5, color: '#464555', textAlign: 'center' }}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CaroItem;