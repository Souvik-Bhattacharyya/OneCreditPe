import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import React from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import CustomerTransaction from "../../Components/CustomerTransaction"

const width = Dimensions.get('window').width;

const Customer = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={[styles.card, { borderColor: "#12CE12", backgroundColor: '#D4FFD4' }]}>
                    <View style={styles.box}>
                        <Text
                            style={{ fontSize: 18, color: "#12CE12", fontWeight: "900", }}>
                            ₹ 4,242.00
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ color: "#000", fontSize: 12, fontWeight: "700", }}>
                            Total amount purchase for June
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name="account-arrow-left" color={'#12CE12'} size={32} />
                    </View>
                </View>
                <View style={[styles.card, { borderColor: "#F31B24", backgroundColor: '#FFEEEE' }]}>
                    <View style={styles.box}>
                        <Text
                            style={{ fontSize: 18, color: "#F31B24", fontWeight: "900", }}>
                            ₹ 3,560.00
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={{ color: "#000", fontSize: 12, fontWeight: "700", }}>
                            Total amount you have to pay
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name="account-arrow-right" color={'#F31B24'} size={32} />
                    </View>
                </View>

                <CustomerTransaction />

                <View
                    style={{
                        width: '100%',
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                        alignItems:'flex-end'
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NewCustomer')}>
                        <Icon name="plus-circle" color={'#20409A'} size={64} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Customer;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: metrics.horizontalScale(20),
        backgroundColor: "#E8EEFF",
        paddingVertical: metrics.verticalScale(15),
        position: "relative",
        flex: 1
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: metrics.horizontalScale(20),
        paddingVertical: metrics.verticalScale(15),
        borderRadius: 6,
        borderWidth: 2,
        marginBottom: 15
    },
    box: {
        width: '38%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
