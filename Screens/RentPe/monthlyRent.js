import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {Button, Divider, List} from "react-native-paper";
import Icon from "react-native-vector-icons/Octicons";
import EditIcon from "react-native-vector-icons/FontAwesome5";
import DeleteIcon from "react-native-vector-icons/AntDesign";

const MonthlyRent = () => {
  const ListOfBill = () => (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}>
        <View style={{display: "flex", flexDirection: "row"}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              paddingVertical: 5,
            }}>
            July 15,2022
          </Text>
          <View
            style={{
              backgroundColor: "green",
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginHorizontal: 15,
            }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                textAlign: "center",
              }}>
              Success
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 5,
          }}>
          <TouchableOpacity>
            <EditIcon
              name="edit"
              size={15}
              style={{
                color: "green",
                paddingHorizontal: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <DeleteIcon
              name="delete"
              size={15}
              style={{
                color: "red",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* End of section header */}

      <View style={styles.bills}>
        <Text>Home Rent</Text>
        <Text>₹4000</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.bills}>
        <Text>Electric Bill</Text>
        <Text>₹4000</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.bills}>
        <Text>Maintanance cost</Text>
        <Text>₹4000</Text>
      </View>
      <Divider style={styles.divider} />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            textAlign: "right",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          ₹10000
        </Text>
      </View>
      <Divider
        style={{borderWidth: 1, borderColor: "#0A5AC9", marginVertical: 20}}
      />
    </>
  );

  const ListOfMonth = id => (
    <List.Accordion
      title="july"
      id={id}
      description="2000"
      descriptionStyle={{
        display: "flex",
        flexDirection: "row",
      }}>
      <List.Section style={{backgroundColor: "#B6B6B6"}}>
        <Divider
          style={{
            borderWidth: 1,
            borderColor: "#0A5AC9",
            marginBottom: 20,
          }}
        />
        <ListOfBill />
        <ListOfBill />
      </List.Section>
    </List.Accordion>
  );

  return (
    <>
      <SafeAreaView style={{height: "90%"}}>
        <ScrollView>
          <View style={{paddingHorizontal: 15, paddingVertical: 15}}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <TouchableOpacity style={styles.button}>
                {/* <Icon
              name="filter"
              size={15}
              style={{paddingVertical: 3, paddingHorizontal: 8, color: "#fff"}}
            /> */}
                <Text style={{color: "#fff"}}>Sorted-by</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon
                  name="filter"
                  size={15}
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                    color: "#fff",
                  }}
                />
                <Text style={{color: "#fff"}}>Filter</Text>
              </TouchableOpacity>
            </View>

            <List.AccordionGroup>
              <ListOfMonth id="1" />
              <ListOfMonth id="2" />
              <ListOfMonth id="3" />
              <ListOfMonth id="4" />
              <ListOfMonth id="5" />
            </List.AccordionGroup>
          </View>
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity style={styles.newRent}>
        <Icon
          name="plus"
          color={"#fff"}
          size={16}
          style={{marginVertical: 8, paddingHorizontal: 5}}
        />
        <Text style={{color: "#fff"}}>New Rent Entry</Text>
      </TouchableOpacity>
    </>
  );
};

export default MonthlyRent;

const styles = StyleSheet.create({
  bills: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  divider: {borderWidth: 1, borderColor: "#c6c6c6", marginTop: 10},
  newRent: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#0A5AC9",
    marginHorizontal: "57%",
    // marginVertical: "70%",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#0A5AC9",
  },
});
