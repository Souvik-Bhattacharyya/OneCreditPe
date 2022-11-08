import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {List} from "react-native-paper";
import styles from "./styles";
import RightIcon from "react-native-vector-icons/SimpleLineIcons";

const Faq = ({navigation}) => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      qus: "How do i add a customer?",
      ans: "To add customer: \n Click on 'Add Customer' on Home if you want,you can add their contact number or select from your phone book,click save",
    },
    {
      id: 2,
      qus: "How do i add a customer?",
      ans: "To add customer: Click on 'Add Customer' on Home if you want,you can add their contact number or select from your phone book,click save",
    },
    {
      id: 3,
      qus: "How do i add a customer?",
      ans: "To add customer: Click on 'Add Customer' on Home if you want,you can add their contact number or select from your phone book,click save",
    },
    {
      id: 4,
      qus: "How do i add a customer?",
      ans: "To add customer: Click on 'Add Customer' on Home if you want,you can add their contact number or select from your phone book,click save",
    },
  ]);
  return (
    <View style={{height: "100%"}}>
      {faq.map(item => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("Ans", item)}>
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <Text style={{fontSize: 15, color: "black"}}>{item.qus}</Text>
              <RightIcon name="arrow-right" color="#0A5AC9" size={12} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Faq;
