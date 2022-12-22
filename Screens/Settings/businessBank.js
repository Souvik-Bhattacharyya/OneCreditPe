import React from "react";
import {
  View,
  // Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  // Provider,
  // // Portal,
  // Modal,
  KeyboardAvoidingView,
} from "react-native";
import {Modal, Portal, Text, Button, Provider} from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import UpdateIcon from "react-native-vector-icons/Feather";
const BusinessBank = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: "white", padding: 20};

  return (
    <>
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            justifyContent: "flex-start",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
            }}>
            Bank Info :
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>Bank Name</Text>
              <Text style={{fontSize: 14}}>xxx</Text>
            </View>
            <TouchableOpacity
              style={{color: "green", paddingVertical: 10}}
              onPress={() => showModal()}>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Bank IFSC code
              </Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
            <TouchableOpacity
              style={{color: "green", paddingVertical: 10}}
              onPress={() => navigation.navigate("BusinessBank")}>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Bank Account Number
              </Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
            <TouchableOpacity
              style={{color: "green", paddingVertical: 10}}
              onPress={() => navigation.navigate("BusinessBank")}>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              marginTop: 35,
              fontWeight: "bold",
            }}>
            Financial Info :
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Business Address
              </Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
            <TouchableOpacity
              style={{color: "green", paddingVertical: 10}}
              onPress={() => navigation.navigate("BusinessBank")}>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                Business Category
              </Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
            <TouchableOpacity
              style={{color: "green", paddingVertical: 10}}
              onPress={() => navigation.navigate("BusinessBank")}>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#b3b3b3",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>GSTIN</Text>
              <Text style={{fontSize: 16}}>xxx</Text>
            </View>
            <TouchableOpacity
              style={{color: "green", paddingVertical: 10}}
              onPress={() => navigation.navigate("BusinessBank")}>
              <UpdateIcon
                name="edit"
                color={"#12ce12"}
                size={16}
                style={{marginVertical: 3, marginRight: 6}}
              />
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <TextInput
              placeholder="Bank Name"
              //   value={userInfo.name}
              placeholderTextColor={"#aaa"}
              //   onChangeText={e => setUserInfo({...userInfo, name: e})}
              style={{
                color: "#464555",
                fontSize: 18,
                fontWeight: "500",
                width: "100%",
              }}
            />
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
            <TextInput
              //   value={userInfo.email}
              placeholder="Bank Ifsc Code"
              placeholderTextColor={"#aaa"}
              //   onChangeText={e => setUserInfo({...userInfo, email: e})}
              style={{
                color: "#464555",
                fontSize: 18,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>
          {/* <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                borderColor: "#c9c9c9",
                borderBottomWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <EmailIcon
                name="bank"
                color={"#464555"}
                size={22}
                style={{marginRight: 10, marginRight: 20}}
              />
              <TextInput
                placeholder="Bank Account No"
                value={userInfo.bank_account_no}
                placeholderTextColor={"#aaa"}
                onChangeText={e =>
                  setUserInfo({...userInfo, bank_account_no: e})
                }
                style={{
                  color: "#464555",
                  fontSize: 18,
                  fontWeight: "500",
                  width: "100%",
                }}
              />
            </View> */}
          {/* <View
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
            <TextInput
              placeholder="Bank Account No"
              //   value={userInfo.business_name}
              placeholderTextColor={"#aaa"}
              style={{
                color: "#464555",
                fontSize: 18,
                fontWeight: "500",
                width: "85%",
              }}
            /> */}
          {/* <TouchableOpacity
                  style={{color: "green"}}
                  onPress={() => navigation.navigate("BusinessBank")}>
                  <UpdateIcon
                    name="edit"
                    color={"#12ce12"}
                    size={16}
                    style={{marginVertical: 3, marginRight: 6}}
                  />
                </TouchableOpacity> */}
          {/* </View>
          <Text
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
              fontWeight: "bold",
            }}>
            Business_Bank Info :
          </Text>
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
            <TextInput
              placeholder="Business Address"
              //   value={userInfo.name}
              placeholderTextColor={"#aaa"}
              //   onChangeText={e => setUserInfo({...userInfo, name: e})}
              style={{
                color: "#464555",
                fontSize: 18,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View>
           */}
          {/* <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <TextInput
              placeholder="Business Category"
              //   value={userInfo.name}
              placeholderTextColor={"#aaa"}
              //   onChangeText={e => setUserInfo({...userInfo, name: e})}
              style={{
                color: "#464555",
                fontSize: 18,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View> */}
          {/* <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderColor: "#c9c9c9",
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <TextInput
              placeholder="GSTIN"
              //   value={userInfo.name}
              placeholderTextColor={"#aaa"}
              //   onChangeText={e => setUserInfo({...userInfo, name: e})}
              style={{
                color: "#464555",
                fontSize: 18,
                fontWeight: "500",
                width: "100%",
              }}
            />
          </View> */}
        </View>
      </ScrollView>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <TextInput
              placeholder="Details..."
              style={{
                backgroundColor: "#FFFFFF",
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderColor: "#C6C6C6",
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#3385ff",
                padding: 10,
                borderRadius: 50,
                marginTop: 15,
              }}>
              <Text style={{textAlign: "center", color: "white"}}>Update</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
};

export default BusinessBank;
