import {View, Text, Image, TouchableOpacity, Alert} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import metrics from "../../Constants/metrics";
import moment from "moment";
import Api from "../../Services";
import {notify} from "../../Redux/Action/notificationActions";
import {Modal, Portal, Provider} from "react-native-paper";

const CashIn = ({entryDetails, getTodayCashEntries, viewReport}) => {
  const dispatch = useDispatch();
  const date = moment(entryDetails?.date_time).format("Do MMM YY");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: "white"};

  const createTwoButtonAlert = () =>
    Alert.alert("Are you sure to delete this entry?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          deleteEntry(entryDetails?.id);
        },
      },
    ]);

  const deleteEntry = async id => {
    try {
      const response = await Api.delete(`/auth/cashbook/${id}`);
      if (response.status == 200) {
        getTodayCashEntries();
        viewReport();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      dispatch(notify({message: error.message}));
    }
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          // contentContainerStyle={containerStyle}
        >
          <Image
            source={{
              uri: `https://onepay.alsoltech.in/public${entryDetails.attachments}`,
            }}
          />
        </Modal>
      </Portal>

      <View>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            paddingHorizontal: metrics.horizontalScale(5),
            paddingVertical: metrics.verticalScale(10),
            alignItems: "center",
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderColor: "#c6c6c6",
            width: "100%",
          }}>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <IconMat name="account-arrow-left" color={"#12ce12"} size={32} />
          </View>
          <View style={{width: "20%"}}>
            <Text
              style={{
                color: "#12ce12",
                fontSize: 18,
                fontWeight: "600",
                marginBottom: metrics.verticalScale(5),
              }}>
              ̥₹{entryDetails?.amount}
            </Text>
            <Text style={{color: "#000", fontSize: 12, fontWeight: "400"}}>
              Cash In
            </Text>
          </View>
          <View style={{width: "45%"}}>
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontWeight: "400",
                marginBottom: metrics.verticalScale(5),
              }}>
              {date}
            </Text>
            <Text style={{color: "#000", fontSize: 12, fontWeight: "500"}}>
              Balance- Rs. {entryDetails?.amount}
            </Text>
            <Text style={{color: "#000", fontSize: 12, fontWeight: "500"}}>
              {entryDetails?.payment_details}
            </Text>
          </View>

          <View
            style={{
              width: "18%",
              flexDirection: "column",
              alignItems: "center",
              // backgroundColor: '#ddd',
              paddingHorizontal: 7,
            }}>
            {entryDetails?.attachments !== null && (
              <TouchableOpacity onPress={showModal}>
                <IconMat name="attachment" color={"#0a5ac9"} size={24} />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={createTwoButtonAlert}>
              <Icon
                name="delete"
                color={"red"}
                size={16}
                style={{marginVertical: 3}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Provider>
  );
};

export default CashIn;
