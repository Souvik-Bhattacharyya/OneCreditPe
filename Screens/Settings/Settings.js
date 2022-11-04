import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {ListItem} from "@rneui/themed";
import setting from "../../Assets/settingIcon.png";
import question from "../../Assets/question.png";
import about from "../../Assets/aboutpng.png";
import RightIcon from "react-native-vector-icons/AntDesign";
const Settings = () => {
  const [expanded, setExpanded] = useState(false);
  const [list, setList] = useState([
    {
      title: "Settings",
      image: setting,
      name: "name1",
      name2: "name1",
      name3: "name1",
      expanded: false,
      id: 1,
    },
    {
      title: "Help & Support",
      image: question,
      name: "name2",
      name2: "name2",
      name3: "name2",
      expanded: false,
      id: 2,
    },
    {
      title: "About Us",
      image: about,
      name: "Privacy Policy",
      name2: "Terms and Condition",
      name3: "Invite friends",
      expanded: false,
      id: 3,
    },
  ]);

  const log = () => console.log("this is an example method");
  const expandMenu = id => {
    const data = list.map(item => {
      if (item.id === id) {
        item.expanded = true;
      } else {
        item.expanded = false;
      }
      return item;
    });
    setList(data);
  };
  return (
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
        {list.map((l, i) => (
          <ListItem.Accordion
            bottomDivider
            key={l.id}
            content={
              <>
                <ListItem.Content
                  style={{flexDirection: "row", justifyContent: "flex-start"}}>
                  {l.image && <Image source={l.image} />}
                  <ListItem.Title style={{marginLeft: 10}}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={l.expanded}
            onPress={() => {
              expandMenu(l.id);
            }}>
            <ListItem key={i} onPress={log} bottomDivider>
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    marginVertical: 8,
                  }}>
                  {l.name}
                </ListItem.Title>
                <View style={{position: "absolute", right: 20, top: 10}}>
                  <RightIcon name="arrowright" />
                </View>
                <ListItem.Title
                  style={{
                    marginVertical: 8,
                  }}>
                  {l.name2}
                  <View>
                    <RightIcon name="arrowright" />
                  </View>
                </ListItem.Title>
                <ListItem.Title
                  style={{
                    marginVertical: 8,
                  }}>
                  {l.name3}
                  <View>
                    <RightIcon name="arrowright" />
                  </View>
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </ListItem.Accordion>
        ))}
      </View>
    </View>
  );
};

export default Settings;
