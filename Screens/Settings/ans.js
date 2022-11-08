import { View, Text, TouchableOpacity, Linking, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const Ans = ({ route }) => {
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:${+917980222011}";
    } else {
      number = "tel:${+917980222011}";
    }
    Linking.openURL(number);
  };
  return (
    <>
      <ScrollView style={{backgroundColor:'#E8EEFF'}}>
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 30,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 19,
              color: "black",
              marginBottom: 10,
            }}>
            {route.params.qus}
          </Text>
          <Text style={{ marginBottom: 20, color: '#333' }}>{route.params.ans}</Text>
          <View style={{borderTopColor: '#c9c9c9', borderTopWidth: 1, paddingTop: 20, marginTop: 20}}>
            <Text style={{ textAlign: "center", marginBottom: 20, color: '#333', fontWeight: '800', fontSize: 16}}>
              Was this helpful?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 20,
              }}>
              <TouchableOpacity>
                <Icon
                  name="like1"
                  size={20}
                  style={{ paddingHorizontal: 15 }}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="dislike1"
                  size={20}
                  color="black"
                  style={{ paddingHorizontal: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              marginVertical: 20,
              fontSize: 15,
              fontWeight: '700'
            }}>
            Didn't find your question?
          </Text>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: '100%'
          }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#0A5AC9",
                paddingHorizontal: 10,
                paddingVertical: 10,
                width: "40%",
                flexDirection: "row",
                borderRadius: 5,
              }}
              onPress={() =>
                Linking.openURL("whatsapp://send?text=Hello&phone=+917980222011")
              }>
              <Icon
                name="message1"
                size={20}
                color="white"
              />
              <Text style={{ marginHorizontal: 5, color: "white", fontSize: 12 }}>
                CHAT WITH US
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#0A5AC9",
                paddingHorizontal: 10,
                paddingVertical: 10,
                width: "40%",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: 5,
              }}
              onPress={() => openDialScreen()}>
              <Icon name="phone" size={18} color="white" />
              <Text style={{ marginHorizontal: 5, color: "white" }}>CALL US</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Ans;
