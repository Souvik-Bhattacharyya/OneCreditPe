import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {ListItem} from "@rneui/themed";
import setting from "../../Assets/settingIcon.png";
import question from "../../Assets/question.png";
import about from "../../Assets/aboutpng.png";
import RightIcon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
import {List} from "react-native-paper";
const Settings = () => {
  const [expanded, setExpanded] = useState(false);
  const [list, setList] = useState([
    {
      title: "Settings",
      image: setting,
      // name: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       Language Options
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name: "Language Options",

      // name2: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       User Profile
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name2: "User Profile",
      expanded: false,
      id: 1,
    },

    {
      title: "Help & Support",
      image: question,

      // name: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       FAQ Listing
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name: "FAQ Listing",
      // name2: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       FAQ Answer
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name2: "FAQ Answer",
      // name3: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       Chat with us (redirect to whatsapp business)
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name3: "Chat with us (redirect to whatsapp business)",
      // name4: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       Call Us
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name4: "Call Us",
      expanded: false,
      id: 2,
    },

    {
      title: "About Us",
      image: about,
      // name: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       Privacy Policy
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name: "Privacy Policy",
      // name2: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       Terms and Condition
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name2: "Terms and Condition",
      // name3: (
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       backgroundColor: "#ddd",
      //       paddingVertical: 15,
      //     }}>
      //     <Text style={{fontSize: 16, fontWeight: "500", color: "#464555"}}>
      //       Invite friends
      //     </Text>
      //     <RightIcon name="arrowright" color={"#464555"} size={16} />
      //   </View>
      // ),
      name3: "Invite friends",
      expanded: false,
      id: 3,
    },
  ]);

  const log = () => console.log("this is an example method");
  const expandMenu = id => {
    const data = list.map(item => {
      if (item.id === id) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = false;
      }
      return item;
    });
    setList(data);
  };
  return (
    <View style={{backgroundColor: "#fff", flex: 1}}>
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
        <Text style={{textAlign: "center", fontSize: 16, color: "#828282"}}>
          +91 9192939495
        </Text>
      </View>

      <View>
        {list.map((l, i) => (
          <List.AccordionGroup>
            {l.image && <Image source={l.image} />}
            <List.Accordion title={l.title} id="1">
              <List.Item
                title={l.name}
                right={props => <List.Icon {...props} icon="folder" />}
              />
              <List.Item title={l.name2} />
              <List.Item title={l.name3} />
            </List.Accordion>
            {/* <List.Accordion title="Accordion 2" id="2">
            <List.Item title="Item 2" />
          </List.Accordion>
          <View>
            <List.Accordion title="Accordion 3" id="3">
              <List.Item title="Item 3" />
            </List.Accordion>
          </View> */}
          </List.AccordionGroup>
        ))}
      </View>
    </View>
  );
};

export default Settings;
