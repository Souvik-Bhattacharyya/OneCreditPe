import React, {useState} from "react";
import styles from "./style";
import {
  SafeAreaView,
  TextInput,
  onChangeText,
  Text,
  onChangeNumber,
  number,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import {Checkbox} from "react-native-paper";

const AddAccount = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <View style={styles.view}>
        <SafeAreaView>
          <Text
            style={{
              padding: 12,
              fontWeight: "bold",
            }}>
            Enter Your Details :
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Bank Name"
            // onChangeText={onChangeText}
            // value={text}
          />

          <TextInput
            style={styles.input}
            placeholder="Bank IFSC Code"
            keyboardType="numeric"
            inlineImageLeft="search_icon"
            // onChangeText={onChangeNumber}
            // value={number}
          />
          {/* <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("#");
            }}>
            Find IFSC
          </Text> */}

          <TextInput
            style={styles.input}
            placeholder="Bank Account Number"
            // onChangeText={onChangeNumber}
            // value={number}
          />
          <TextInput
            style={styles.input}
            placeholder="Conform Bank Account Number"
            // onChangeText={onChangeNumber}
            // value={number}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(true);
              }}
            />
            <Text style={styles.label}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              fdgg sdjgd urna....View More?
            </Text>
          </View>
        </SafeAreaView>

        <TouchableOpacity style={styles.nextBtn}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddAccount;
