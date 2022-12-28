import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconLow from "react-native-vector-icons/FontAwesome";
import Help from "react-native-vector-icons/Entypo";
import Faq from "react-native-vector-icons/MaterialCommunityIcons";
import { List } from "react-native-paper";
import metrics from "../../Constants/metrics";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../Components/CommonHeader";
import InviteFriendModal from "../../Components/InviteFriendModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Action/authActions";
import KycIcon from "react-native-vector-icons/Entypo";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Settings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:+917001312050";
    } else {
      number = "tel:+917001312050";
    }
    Linking.openURL(number);
  };

  return (
    <>
      <CommonHeader color="#0a5ac9" />
      <ScrollView>
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
                  source={
                    user.profile_image
                      ? {
                          uri:
                            "https://onepay.alsoltech.in/public/assets/user/profile_image/" +
                            user?.profile_image,
                        }
                      : require("../../Assets/blank-profile.png")
                  }
                  style={{
                    height: 105,
                    width: 105,
                    resizeMode: "cover",
                    marginVertical: 13,
                    alignSelf: "center",
                    borderRadius: 50,
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
                  <Icon name="pen" size={18} color="#fff" />
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
              {user.name}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 16, color: "#828282" }}>
              +91 {user.mobile}
            </Text>
          </View>

          <List.AccordionGroup>
            <List.Accordion
              style={styles.accordion}
              theme={{
                colors: {
                  text: "#464555",
                  primary: "#333",
                  background: "#F1f1f1",
                },
              }}
              title="Settings"
              id="1"
              left={props => (
                <Icon name="user-cog" size={20} color={"#464555"} />
              )}>
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
                  dispatch(logout());
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
              theme={{
                colors: {
                  text: "#464555",
                  primary: "#333",
                  background: "#F1f1f1",
                },
              }}
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
                left={props => (
                  <Faq
                    name="comment-question"
                    size={18}
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
                  Linking.openURL(
                    "whatsapp://send?text=Hello&phone=+917001312050",
                  )
                }
                left={props => (
                  <Help
                    name="message"
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
                title="Call Us"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => openDialScreen()}
                left={props => (
                  <Icon
                    name="phone"
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
              theme={{
                colors: {
                  text: "#464555",
                  primary: "#333",
                  background: "#F1f1f1",
                },
              }}
              title="About Us"
              id="3"
              left={props => (
                <Icon name="info-circle" size={24} color={"#464555"} />
              )}>
              <List.Item
                title="Privacy Policy"
                theme={{ colors: { text: "#464555" } }}
                style={[styles.items, { paddingLeft: 35 }]}
                onPress={() => {
                  navigation.navigate("Privacy And Policy");
                }}
                left={props => (
                  <Faq
                    name="file-account"
                    size={20}
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
                title="Terms And Conditions"
                theme={{ colors: { text: "#464555" } }}
                style={styles.items}
                onPress={() => {
                  navigation.navigate("Terms And Conditions");
                }}
                left={props => (
                  <Icon
                    name="file-contract"
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
          </List.AccordionGroup>

          <TouchableOpacity
            onPress={showModal}
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              marginTop: metrics.verticalScale(10),
              borderWidth: 1,
              borderColor: "#c9c9c9",
            }}>
            <Image
              source={require("../../Assets/Images/inviteFriends.webp")}
              style={{
                height: 80,
                width: 80,
                resizeMode: "contain",
                marginLeft: 10,
              }}
            />
            <View
              style={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                // alignItems:'center',
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "400",
                  color: "#333",
                }}>
                Invite your friends to use OneCPe
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0a5ac9",
                }}>
                Invite Friends
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AddDetails")}
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              marginVertical: metrics.verticalScale(10),
              borderWidth: 1,
              borderColor: "#c9c9c9",
              paddingVertical: 10
            }}>
            <Image
              source={require("../../Assets/Images/kyc.png")}
              style={{
                height: 60,
                width: 60,
                resizeMode: "contain",
                marginHorizontal: 10,
              }}
            />
            <View
              style={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                // alignItems:'center',
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "400",
                  color: "#333",
                }}>
                Submit your KYC Details
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0a5ac9",
                }}>
                Fillup Now
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: '#fff',
              height: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 65,
            }}>
            <Image
              source={require("../../Assets/Logos/darkLogo.png")}
              style={{
                height: 40,
                width: 100,
                resizeMode: "contain",
                marginBottom: 10,
                // backgroundColor:'#ddd'
              }}
            />
            <Text
              style={{
                color: "#aaa",
                fontSize: 16,
              }}>
              Powered By Bound Parivar Technology Private Limited
            </Text>
          </View>
        </View>
      </ScrollView>
      <InviteFriendModal
        visible={visible}
        hideModal={hideModal}
        setVisible={setVisible}
      />
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1f1f1",
    height: "100%",
  },
  text: {
    color: "#333",
  },
  accordion: {
    backgroundColor: "#fff",
    borderColor: "#c9c9c9",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
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
