import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
const RaiseTicket = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              backgroundColor: "#fff",
            }}>
            <Text style={{fontSize: 17, fontWeight: "bold", color: "black"}}>
              Your Recent Tickets
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewAllTickets")}>
              <Text style={{color: "#0A5AC9"}}>view all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              // backgroundColor: "#D7D1D1",
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 17, fontWeight: "bold", color: "black"}}>
              Describe Your Issue
            </Text>
            <Text style={{fontSize: 13, paddingVertical: 5}}>
              Write us something about your issue
            </Text>
            <TextInput
              placeholder="Write here something"
              multiline={true}
              style={{
                borderWidth: 1,
                borderColor: "#A5A1A1",
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#A5A1A1",
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 10,
                borderRadius: 20,
                backgroundColor: "#0A5AC9",
              }}>
              <Text style={{textAlign: "center", color: "#fff"}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RaiseTicket;
