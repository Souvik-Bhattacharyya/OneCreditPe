import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ListItem } from "@rneui/themed";
import setting from "../../Assets/settingIcon.png";
import question from "../../Assets/question.png";
import about from "../../Assets/aboutpng.png";
import RightIcon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";

const Settings = () => {
  const [expanded, setExpanded] = useState(false);
  const [list, setList] = useState([
    {
      title: "Settings",
      image: setting,
      name: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>Language Options</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,

      name2:
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: '#ddd',
          paddingVertical: 15
        }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>User Profile</Text>
          <RightIcon name="arrowright" color={'#464555'} size={16} />
        </View>,
      expanded: false,
      id: 1,
    },

    {
      title: "Help & Support",
      image: question,

      name: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>FAQ Listing</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,

      name2: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>FAQ Answer</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,

      name3: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>Chat with us (redirect to whatsapp business)</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,

      name4: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>Call Us</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,
      expanded: false,
      id: 2,
    },

    {
      title: "About Us",
      image: about,
      name: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>Privacy Policy</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,

      name2: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>Terms and Condition</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,

      name3: <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#ddd',
        paddingVertical: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#464555' }}>Invite friends</Text>
        <RightIcon name="arrowright" color={'#464555'} size={16} />
      </View>,
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
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginTop: metrics.verticalScale(20), marginBottom: metrics.verticalScale(50) }}>
        <View style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 16
        }}>
          <TouchableOpacity style={{
            display: 'flex',
            borderColor: '#464555',
            borderWidth: 3,
            borderRadius: 50,
            borderStyle: 'dashed',
            width: 110,
            height: 110,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
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
            <View style={{
              width: 36,
              height: 36,
              backgroundColor: '#464555',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: -20,
              borderRadius: 50,
              borderColor: '#fff',
              borderWidth: 2

            }}>
              <Icon
                name="pen"
                size={14}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: "#0A5AC9",
            fontSize: 20,
            textAlign: "center",
            marginTop: 5,
            fontWeight: '700'
          }}>
          Business Name
        </Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: '#828282' }}>+91 9192939495</Text>
      </View>

      <View>
        {list.map((l, i) => (
          <ListItem.Accordion
            bottomDivider
            key={l.id}
            content={
              <>
                <ListItem.Content
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                  {l.image && <Image source={l.image} />}
                  <ListItem.Title style={{ marginLeft: 10 }}>
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
                <TouchableOpacity>
                  <ListItem.Title>
                    {l.name}
                  </ListItem.Title>
                </TouchableOpacity>

                <TouchableOpacity>
                  <ListItem.Title>
                    {l.name2}
                  </ListItem.Title>
                </TouchableOpacity>

                <TouchableOpacity>
                  <ListItem.Title>
                    {l.name3}
                  </ListItem.Title>
                </TouchableOpacity>

                <TouchableOpacity>
                  <ListItem.Title>
                    {l.name4}
                  </ListItem.Title>
                </TouchableOpacity>
              </ListItem.Content>
            </ListItem>
          </ListItem.Accordion>
        ))}
      </View>
    </View>
  );
};

export default Settings;