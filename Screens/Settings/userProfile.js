import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import ProfileIcon from "react-native-vector-icons/FontAwesome5";

const width = Dimensions.get("window").width;
const UserProfile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20, paddingHorizontal: 15 }}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 16,
          flex: .2
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
            <Icon name="camera" size={14} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderColor: "#c9c9c9",
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <ProfileIcon name="user-alt" color={"#464555"} size={20} style={{ marginRight: 10, marginRight: 20 }} />
          <TextInput
            placeholder="Your Name"
            placeholderTextColor={"#aaa"}
            style={{
              color: "#464555", fontSize: 18,
              fontWeight: '500', width: '100%'
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              display: 'none'
            }}>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "900",
                color: "#0a5ac9",
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderColor: "#c9c9c9",
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            // marginTop: 10
          }}>
          <ProfileIcon name="phone" color={"#464555"} size={20} style={{ marginRight: 10, marginRight: 20 }} />
          <TextInput
            value="810123523"
            placeholderTextColor={"#aaa"}
            style={{
              color: "#464555", fontSize: 18,
              fontWeight: '500', width: '100%'
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              display: 'none'
            }}>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "900",
                color: "#0a5ac9",
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderColor: "#c9c9c9",
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            // marginTop: 10
          }}>
          <ProfileIcon name="building" color={"#464555"} size={20} style={{ marginRight: 10, marginRight: 20 }} />
          <TextInput
            placeholder="Your Name"
            value="Business Name"
            placeholderTextColor={"#aaa"}
            style={{
              color: "#464555", fontSize: 18,
              fontWeight: '500', width: '100%'
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              display: 'none'
            }}>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "900",
                color: "#0a5ac9",
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderColor: "#c9c9c9",
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            // marginTop: 10
          }}>
          <ProfileIcon name="users" color={"#464555"} size={20} style={{ marginRight: 10, marginRight: 20 }} />
          <TextInput
            placeholder="Stuff Count"
            value=""
            placeholderTextColor={"#aaa"}
            style={{
              color: "#464555", fontSize: 18,
              fontWeight: '500', width: '100%'
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              display: 'none'
            }}>
            <Text
              style={{
                color: "#333",
                fontSize: 14,
                fontWeight: "900",
                color: "#0a5ac9",
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
