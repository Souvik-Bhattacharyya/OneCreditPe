import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import metrics from '../Constants/metrics'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity>
          <AntDesign name="left" color="#464555" size={24} />
        </TouchableOpacity>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#464555',
    alignItems: "center",
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  topSection: {
    backgroundColor: '#fff',
    padding: metrics.horizontalScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  }
});