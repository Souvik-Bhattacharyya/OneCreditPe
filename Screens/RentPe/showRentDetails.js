import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import {Divider} from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

const ShowRentDetails = () => {
  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontSize: 17,
          fontWeight: "bold",
          color: "#0A5AC9",
          padding: 20,
          textDecorationLine: "underline",
        }}>
        Owener Info
      </Text>
      <SafeAreaView style={{paddingVertical: 20, paddingHorizontal: 15}}>
        <ScrollView>
          <Text style={styles.text}>Name</Text>
          <Text style={{paddingVertical: 5}}>Ankita Santra</Text>
          <Divider style={styles.divider} />

          <Text style={styles.text}>Address</Text>
          <Text style={{paddingVertical: 5}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
          <Divider style={styles.divider} />

          <Text style={styles.text}>Bank Details</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Bank Name :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              SBI
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Branch :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              Kolkata
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>IFSC No :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              00123456789
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Acc No :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              00123456789
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: "600"}}>Mobile No :</Text>
            <Text style={{textAlign: "justify", paddingHorizontal: 5}}>
              00123456789
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>Deposit Amount</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                ₹ 1000
              </Text>
            </View>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>* Advance Amount</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                ₹ 1000000
              </Text>
            </View>
          </View>
          <Divider style={styles.divider} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>* Rent date</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                01-01-2023
              </Text>
            </View>
            <View style={{width: "50%"}}>
              <Text style={styles.text}>* Rented since</Text>
              <Text style={{textAlign: "justify", paddingVertical: 5}}>
                01-01-2023
              </Text>
            </View>
          </View>
          <Divider style={styles.divider} />

          <Text style={styles.text}>* Add Agreement</Text>
          <Text
            style={{
              textAlign: "justify",
              //   paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            No files are submitted
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.text}>* PAN Number</Text>
          <Text
            style={{
              textAlign: "justify",
              //   paddingHorizontal: 20,
              paddingBottom: 40,
            }}>
            01234567809
          </Text>

          <Divider style={styles.divider} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ShowRentDetails;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0A5AC9",
    paddingTop: 10,
  },
  divider: {borderWidth: 1, borderColor: "#c6c6c6", marginTop: 10},
});
