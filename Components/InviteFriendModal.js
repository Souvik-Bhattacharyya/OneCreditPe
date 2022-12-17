import * as React from "react";
import { Image, View, TouchableOpacity, Dimensions, Linking } from "react-native";
import { Modal, Portal, Text, Provider } from "react-native-paper";

const height = Dimensions.get('window').height;

const InviteFriendModal = ({ visible, hideModal, setVisible }) => {
  const containerStyle = {
    backgroundColor: "white",
    borderRadius: 5,
    position: "absolute",
    bottom: '20%',
    alignSelf: "center",
    paddingVertical: 45,
    paddingHorizontal: 30,
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <TouchableOpacity onPress={hideModal} style={{ marginRight: 20, marginTop: -30 }}>
            <Text style={{ color: '#000', fontSize: 44, textAlign: 'right' }}>
              X
            </Text>
          </TouchableOpacity>
          <Image
            source={require("../Assets/Friends.png")}
            style={{
              height: 260,
              width: 200,
              resizeMode: "contain",
              alignSelf: "center",
              marginBottom: 20,
              // backgroundColor:'#ddd'
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 24, fontWeight: '800', marginBottom: 10, color: '#333' }}>
            Invite your friends to use OneCPe
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              marginBottom: 20,
              color: '#333'
            }}>
            Lorem ipsum dolor sit amet consectetur. Mauris vel posuere elementum
            faucibus pharetra consectetur adipiscing.
          </Text>
          <View
            style={{
              backgroundColor: "#0A5AC9",
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`whatsapp://send?text=Namaste 🙏, I am using India's no.1 business app - OneCPay, Powered By Bound Parivar Technology Private Limited.`)}
            >
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
