import { View, Text, StyleSheet} from 'react-native'
import React from 'react';
import metrics from '../Constants/metrics';
import { ToGet, ToPay} from '../Screens';
const UserTransaction = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 18, color: "#808282", fontWeight: "900", }}>Date / Time</Text>
            </View>
            <View>
                <ToGet />
                <ToPay />
            </View>
        </View>
    )
}

export default UserTransaction;

const styles = StyleSheet.create({
    container: {
      paddingTop: metrics.verticalScale(15),
      backgroundColor: "#E8EEFF",
      flex: 1,
    },
  });
  