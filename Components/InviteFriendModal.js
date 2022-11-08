import * as React from "react";
import {Image, View, TouchableOpacity} from "react-native";
import {Modal, Portal, Text, Button, Provider} from "react-native-paper";

const InviteFriendModal = ({visible, hideModal, setVisible}) => {
  const containerStyle = {
    backgroundColor: "white",
    borderRadius: 5,
    position: "absolute",
    bottom: 100,

    alignSelf: "center",

    paddingVertical: 45,
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Image
            source={require("../Assets/Friends.png")}
            style={{
              height: 100,
              width: 100,

              resizeMode: "contain",
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <Text style={{textAlign: "center", fontSize: 19, marginBottom: 10}}>
            Invite your friends to use {"\n"}OneCPe
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 11,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}>
            Lorem ipsum dolor sit amet consectetur. Mauris vel posuere elementum
            faucibus pharetra consectetur adipiscing.
          </Text>
          <View
            style={{
              backgroundColor: "#0A5AC9",
              marginHorizontal: 20,
              padding: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                }}>
                Invite Your Friends
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};
export default InviteFriendModal;
