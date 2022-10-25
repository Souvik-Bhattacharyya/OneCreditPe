import React from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";

import {Modal, Portal, Button, Provider} from "react-native-paper";
const SetDateModal = ({visible, hideModal}) => {
  const containerStyle = {
    backgroundColor: "pink",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 8,
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={{backgroundColor: "yellow"}}>
            <Text style={{color: "black"}}>Set a Date</Text>
          </View>
        </Modal>
      </Portal>
      {/* <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button> */}
    </Provider>
  );
};

export default SetDateModal;
