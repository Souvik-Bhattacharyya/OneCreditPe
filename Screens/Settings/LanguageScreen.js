import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import metrics from '../../Constants/metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8EEFF",
        flex: 1,
        paddingHorizontal: metrics.horizontalScale(20),
        paddingVertical: metrics.verticalScale(20)
    },
    text: {
        color: '#333',
        fontSize: 20,
        textAlign: 'center',
        color: '#0a5ac9',
        fontWeight: '400'
    },
    btn: {
        backgroundColor: '#fff',
        paddingVertical: 25,
        borderRadius: 6,
        width: '100%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#c9c9c9'
    }
});

const LanguageScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <View>
                    <Text style={styles.text}>E</Text>
                </View>
                <Text style={styles.text} >English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View>
                    <Text style={styles.text}>हि</Text>
                </View>
                <Text style={styles.text}> हिन्दी </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View>
                    <Text style={styles.text}>বা</Text>
                </View>
                <Text style={styles.text} >বাংলা</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LanguageScreen;