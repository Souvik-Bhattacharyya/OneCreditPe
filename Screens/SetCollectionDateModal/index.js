import {View, Image, TouchableOpacity} from "react-native";
import React from "react";
import {Modal, Portal, Text, Button, Provider} from "react-native-paper";
const SetCollectionDateModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
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
          <View>
            <View style={{alignItems: "center"}}>
              <Image
                source={require("../../Assets/modalImage.png")}
                style={{hieght: 70, width: 70, resizeMode: "contain"}}
              />
              <Text style={{fontWeight: "bold", fontSize: 17}}>
                Collect Money 3x Faster
              </Text>
            </View>
            <View style={{marginVertical: 40}}>
              <View style={{flexDirection: "row"}}>
                <Image
                  source={require("../../Assets/1.png")}
                  style={{height: 20, width: 20, resizeMode: "contain"}}
                />
                <Text style={{marginHorizontal: 7, fontSize: 15}}>
                  Set Collection Date
                </Text>
              </View>
              <View style={{flexDirection: "row", marginVertical: 25}}>
                <Image
                  source={require("../../Assets/2.png")}
                  style={{height: 20, width: 20, resizeMode: "contain"}}
                />
                <Text style={{marginHorizontal: 7, fontSize: 15}}>
                  Reminder is sent a day before
                </Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <Image
                  source={require("../../Assets/3.png")}
                  style={{height: 20, width: 20, resizeMode: "contain"}}
                />
                <Text style={{marginHorizontal: 7, fontSize: 15}}>
                  Collect money by sitting home
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#20409A",
                padding: 8,
              }}>
              <Text style={{textAlign: "center", color: "white"}}>
                Start Now
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};

export default SetCollectionDateModal;
