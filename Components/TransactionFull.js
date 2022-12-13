import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
  Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import CashIn from "./Cash/CashIn";
import CashOut from "./Cash/CashOut";
import {useSelector} from "react-redux";
import {Cashbook} from "../Screens";
import {Modal, Portal, Provider} from "react-native-paper";
const width = Dimensions.get("window").width;

const TransactionFull = ({
  todayEntryDetails,
  getTodayCashEntries,
  viewReport,
  handleUpdate,
}) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    alignSelf: "center",
  };
  const [itemSelected, setItemSelected] = useState({});
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      position: "relative",
      height: "100%",
    },
    search: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: metrics.horizontalScale(10),
      borderColor: "#c6c6c6",
      borderWidth: 1,
      borderRadius: 46,
      backgroundColor: "#f6f6f6",
    },
  });
  console.log("getTodayCashEntries", getTodayCashEntries);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: metrics.horizontalScale(20),
          backgroundColor: "#fff",
          borderBottomColor: "#c6c6c6",
          borderBottomWidth: 1,
        }}>
        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"#828282"}
            style={{
              width: "100%",
              fontSize: 16,
              color: "#000",
              fontWeight: "500",
              position: "relative",
              paddingLeft: metrics.horizontalScale(10),
              paddingVertical: metrics.verticalScale(7),
            }}
            value={todayEntryDetails.payment_details}
            onChangeText={e => setValue(e)}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{width}}>
          {todayEntryDetails
            .filter(item => {
              if (!value) return true;
              if (
                item.payment_details.toLowerCase().includes(value.toLowerCase())
              ) {
                return true;
              }
            })
            .map((entry, index) =>
              entry.cb_tns_type == "in" ? (
                <CashIn
                  entryDetails={entry}
                  key={index}
                  getTodayCashEntries={getTodayCashEntries}
                  viewReport={viewReport}
                  showModal={() => {
                    setVisible(true);
                    setItemSelected(entry);
                  }}
                  handleUpdate={handleUpdate}
                />
              ) : (
                <CashOut
                  entryDetails={entry}
                  key={index}
                  getTodayCashEntries={getTodayCashEntries}
                  viewReport={viewReport}
                  handleUpdate={handleUpdate}
                />
              ),
            )}
        </View>
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <View style={{backgroundColor: "black"}}>
                <Image
                  source={{
                    uri: `https://onepay.alsoltech.in/public/assets/cashbook/attachments/${itemSelected.attachments}`,
                  }}
                  style={{
                    height: 170,
                    width: 150,
                  }}
                />
              </View>
            </Modal>
          </Portal>
        </Provider>
      </ScrollView>
    </View>
  );
};

export default TransactionFull;
