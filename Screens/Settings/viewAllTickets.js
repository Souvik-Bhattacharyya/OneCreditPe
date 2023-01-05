import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
const ViewAllTickets = () => {
  return (
    <>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}>
        <Text style={{fontSize: 17, fontWeight: "bold", color: "black"}}>
          Your Recent Tickets
        </Text>
      </View>
    </>
  );
};

export default ViewAllTickets;
