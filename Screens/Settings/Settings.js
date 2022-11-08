import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconLow from "react-native-vector-icons/FontAwesome";
import Help from "react-native-vector-icons/Entypo";
import { List } from "react-native-paper";
import metrics from "../../Constants/metrics";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../Components/CommonHeader";
import InviteFriendModal from "../../Components/InviteFriendModal";

const Settings = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:+917980222011";
    } else {
      number = "tel:+917980222011";
    }
    Linking.openURL(number);
  };

  return (

    <>
      <CommonHeader />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: metrics.verticalScale(20),
              marginBottom: metrics.verticalScale(50),
            }}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 16,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("UserProfile")}
                style={{
                  display: "flex",
                  borderColor: "#464555",
                  borderWidth: 3,
                  borderRadius: 50,
                  borderStyle: "dashed",
                  width: 110,
                  height: 110,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}>
                <Image
                  source={require("../../Assets/profile.png")}
                  style={{
                    height: 105,
                    width: 105,
                    resizeMode: "contain",
                    marginVertical: 13,
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "#464555",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: -20,
                    borderRadius: 50,
                    borderColor: "#fff",
                    borderWidth: 2,
                  }}>
                  <Icon name="pen" size={14} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: "#0A5AC9",
                fontSize: 20,
                textAlign: "center",
                marginTop: 5,
                fontWeight: "700",
              }}>
              Business Name
            </Text>
            <Text style={{ textAlign: "center", fontSize: 16, color: "#828282" }}>
              +91 9192939495
            </Text>
          </View>

          <List.AccordionGroup>
            <List.Accordion
              style={styles.accordion}
              theme={{ colors: { text: "#464555", primary: "#333" } }}
              title="Settings"
              id="1"
              left={props => <Icon name="user-cog" size={20} color={"#464555"} />}>
              <List.Item
                title="Language Options"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => alert("In Progress")}
                left={props => (
                  <IconLow
                    name="language"
                    size={18}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <List.Item
                title="Log Out"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => {
                  navigation.navigate("login");
                }}
                left={props => (
                  <Help
                    name="log-out"
                    size={18}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
            </List.Accordion>

            <List.Accordion
              style={styles.accordion}
              theme={{ colors: { text: "#464555", primary: "#333" } }}
              title="Help & Support"
              id="2"
              left={props => (
                <Help name="help-with-circle" size={24} color={"#464555"} />
              )}>
              <List.Item
                title="FAQ Listing"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => navigation.navigate("faq")}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <List.Item
                title="FAQ Answer"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => alert("In progress")}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <List.Item
                title="Chat with us"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() =>
                  Linking.openURL("whatsapp://send?text=Hello&phone=+917980222011")
                }
                left={props => (
                  <Help
                    name="message"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <List.Item
                title="Call Us"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => openDialScreen()}
                left={props => (
                  <Icon
                    name="phone"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
            </List.Accordion>

            <List.Accordion
              style={styles.accordion}
              theme={{ colors: { text: "#464555", primary: "#333" } }}
              title="About Us"
              id="3"
              left={props => (
                <Icon name="info-circle" size={24} color={"#464555"} />
              )}>
              <List.Item
                title="Privacy Policy"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => {
                  navigation.navigate("Privacy And Policy");
                }}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <List.Item
                title="Terms And Conditions"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => {
                  navigation.navigate("Terms And Conditions");
                }}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <List.Item
                title="Invite Friends"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={showModal}
                left={props => (
                  <Icon
                    name="user-plus"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
                right={props => (
                  <Icon
                    name="arrow-right"
                    size={14}
                    color={"#464555"}
                    style={{ alignSelf: "center" }}
                  />
                )}
              />
              <InviteFriendModal
                visible={visible}
                hideModal={hideModal}
                setVisible={setVisible}
              />
            </List.Accordion>
          </List.AccordionGroup>
        </View>
      </ScrollView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    color: "#333",
  },
  accordion: {
    backgroundColor: "#fff",
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  items: {
    backgroundColor: "#F1F1F1",
    paddingVertical: metrics.verticalScale(15),
    justifyContent: "center",
    borderBottomColor: "#c9c9c9",
    borderBottomWidth: 1,
    paddingHorizontal: 40,
  },
});