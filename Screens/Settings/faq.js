import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Faq = ({ navigation }) => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      qus: "How do I add a customer?",
      ans: "To add customer: \n \nClick on 'Add Customer' on Home  \n \nIf you want, you can add their contact number or select from your phone book, click SAVE \n \nOn the next screen click on 'To Pay/To Get' to add a transaction for this customer.",
    },
    {
      id: 2,
      qus: "How do I add a customer?",
      ans: "To add customer: \n \nClick on 'Add Customer' on Home  \n \nIf you want, you can add their contact number or select from your phone book, click SAVE \n \nOn the next screen click on 'To Pay/To Get' to add a transaction for this customer.",
    },
    {
      id: 3,
      qus: "How do I add a customer?",
      ans: "To add customer: \n \nClick on 'Add Customer' on Home  \n \nIf you want, you can add their contact number or select from your phone book, click SAVE \n \nOn the next screen click on 'To Pay/To Get' to add a transaction for this customer.",
    },
    {
      id: 4,
      qus: "How do I add a customer?",
      ans: "To add customer: \n \nClick on 'Add Customer' on Home  \n \nIf you want, you can add their contact number or select from your phone book, click SAVE \n \nOn the next screen click on 'To Pay/To Get' to add a transaction for this customer.",
    },
  ]);
  return (
    <View style={{ height: "100%" }}>
      {faq.map(item => {
        return (
          <TouchableOpacity
            style={{ borderColor: '#c9c9c9', borderBottomWidth: 1 }}
            onPress={() => navigation.navigate("Ans", item)}>
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <Text style={{ fontSize: 15, color: "black" }}>{item.qus}</Text>
              <Icon
                name="arrow-right"
                size={14}
                color={"#464555"}
                style={{ alignSelf: "center" }}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Faq;
