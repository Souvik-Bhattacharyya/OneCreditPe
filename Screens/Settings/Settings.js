import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import DropdownIcon from "react-native-vector-icons/SimpleLineIcons";
import {Button, Menu, Divider, Provider} from "react-native-paper";

const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const openSecondMenu = () => setSecondVisible(true);
  const openThirdMenu = () => setThirdVisible(true);
  const closeMenu = () => setVisible(false);
  const closeSecondMenu = () => setSecondVisible(false);
  const closeThirdMenu = () => setThirdVisible(false);
  return (
    <Provider>
      <View>
        <View style={{backgroundColor: "#0A5AC9"}}>
          <Text
            style={{
              color: "black",
              fontSize: 17,
              marginVertical: 25,
              textAlign: "center",
              color: "#fff",
            }}>
            More Options
          </Text>
        </View>
        <View style={{borderBottomColor: "#C6C6C6", borderBottomWidth: 1}} />
        <View>
          <Image
            source={require("../../Assets/settingLogo.png")}
            style={{
              height: 90,
              width: 90,
              resizeMode: "contain",
              marginVertical: 13,
              alignSelf: "center",
            }}
          />
          <Icon
            name="edit"
            size={20}
            color="black"
            style={{alignSelf: "center", position: "absolute", bottom: -1}}
          />
        </View>
        <Text
          style={{
            color: "#0A5AC9",
            fontSize: 19,
            textAlign: "center",
            marginTop: 5,
          }}>
          Business Name
        </Text>
        <Text style={{textAlign: "center", fontSize: 13}}>+91 9192939495</Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
              paddingHorizontal: 20,
            }}>
            <Image source={require("../../Assets/settingIcon.png")} />
            <Text style={{position: "absolute", left: 70, color: "black"}}>
              Settings
            </Text>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Image source={require("../../Assets/arrowDown.png")} />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
          <View
            style={{
              borderBottomColor: "#C6C6C6",
              borderBottomWidth: 1,
              padding: 5,
              marginHorizontal: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingHorizontal: 20,
            }}>
            <Image source={require("../../Assets/question.png")} />
            <Text style={{position: "absolute", left: 70, color: "black"}}>
              Help & Support
            </Text>
            <Menu
              visible={secondVisible}
              onDismiss={closeSecondMenu}
              anchor={
                <TouchableOpacity onPress={openSecondMenu}>
                  <Image source={require("../../Assets/arrowDown.png")} />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
          <View
            style={{
              borderBottomColor: "#C6C6C6",
              borderBottomWidth: 1,
              padding: 5,
              marginHorizontal: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingHorizontal: 20,
            }}>
            <Image source={require("../../Assets/aboutpng.png")} />
            <Text style={{position: "absolute", left: 70, color: "black"}}>
              About Us
            </Text>
            <Menu
              visible={thirdVisible}
              onDismiss={closeThirdMenu}
              anchor={
                <TouchableOpacity onPress={openThirdMenu}>
                  <Image source={require("../../Assets/arrowDown.png")} />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Privacy Policy" />
              <Menu.Item onPress={() => {}} title="Terms and Condition" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Invite friends " />
            </Menu>
          </View>
          <View
            style={{
              borderBottomColor: "#C6C6C6",
              borderBottomWidth: 1,
              padding: 5,
              marginHorizontal: 10,
            }}
          />
        </View>
      </View>
    </Provider>
  );
};

export default Settings;
