import {
  View,
  Text,
  StyleSheet,
  FlatList,
  PermissionsAndroid,
} from "react-native";
import React, {useEffect, useState} from "react";
import Contacts from "react-native-contacts";

const AddContact = () => {
  const [contacts, setContacts] = useState([]);

  const ListItem = ({item}) => {
    return (
      <View style={styles.contactCon}>
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
      </View>
    );
  };
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

  useEffect(() => {
    getContacts();
  }, []);
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
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700'
  },
  phoneNumber: {
    color: "#828282",
  },
});
