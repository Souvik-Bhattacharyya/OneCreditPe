import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Touchable,
    Image,
} from "react-native";
import React from "react";
import metrics from "../Constants/metrics";
import MatIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function OldCustomer() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.contactBox}>
                <View
                    style={{
                        width: 42,
                        height: 42,
                        backgroundColor: "#c3e2ff",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 4,
                    }}>
                    <Text
                        style={{ fontSize: 28, fontWeight: "700", color: "#0A5AC9" }}>
                        A
                    </Text>
                </View>
                <View style={{ paddingHorizontal: metrics.horizontalScale(20) }}>
                    <Text style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
                        Asish Kr Das
                    </Text>
                    <Text
                        style={{ fontSize: 14, fontWeight: "400", color: "#828282" }}>
                        Add Date Here
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 20,
                        backgroundColor: "#0A5AC9",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        right: 20,
                    }}>
                    <MatIcon name="chevron-right" color={"#fff"} size={18} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    contactBox: {
        flexDirection: "row",
        paddingHorizontal: metrics.horizontalScale(20),
        paddingVertical: metrics.verticalScale(15),
        // marginVertical: metrics.verticalScale(10),
        alignItems: "center",
        // borderRadius: 6,
        borderColor: '#c6c6c6',
        borderBottomWidth: 1
    },
});
