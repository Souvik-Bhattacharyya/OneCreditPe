import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import Contacts from "react-native-contacts";
import { useNavigation } from "@react-navigation/native";

const AddContact = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "Contacts",
      message: "This app would like to view your contacts.",
      buttonPositive: "Please accept bare mortal",
    })
      .then(res => {
        console.log("Permission: ", res);
        Contacts.getAll()
          .then(contacts => {
            // console.log(contacts);
            contacts.sort((a, b) => a.displayName.localeCompare(b.displayName));
            setContacts(contacts);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(error => {
        console.error("Permission error: ", error);
      });
  };

  const ListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetails")}
        style={styles.contactCon}>
        <View style={styles.imgCon}>
          <View style={styles.placeholder}>
            <Text style={styles.txt}>{item?.givenName[0]}</Text>
          </View>
        </View>
        <View style={styles.contactDat}>
          <Text style={styles.name}>
            {item?.givenName} {item?.middleName && item.middleName + " "}
            {item?.familyName}
          </Text>
          <Text style={styles.phoneNumber}>
            {item?.phoneNumbers[0]?.number}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={ListItem}
        keyExtractor={e => e.title}
      />
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },
  imgCon: {
    paddingRight: 10,
  },
  placeholder: {
    width: 45,
    height: 45,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#C3E2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0a5ac9",
  },
  name: {
    fontSize: 16,
    color: "#000",
    fontWeight: "700",
  },
  phoneNumber: {
    color: "#828282",
  },
});
