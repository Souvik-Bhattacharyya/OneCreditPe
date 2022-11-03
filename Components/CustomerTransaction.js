import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import ToPayUser from "./Cash/ToPayUser";
import ToGetUser from "./Cash/ToGetUser";
import Api from "../Services";

const width = Dimensions.get("window").width;

const CustomerTransaction = ({ customerType }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: metrics.verticalScale(15),
      flex: 1,
      position: "relative",
      borderColor: "#c6c6c6",
      borderWidth: 0.8,
    },
    search: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: metrics.horizontalScale(10),
      borderColor: "#c6c6c6",
      borderWidth: 0.8,
      borderRadius: 46,
      backgroundColor: "#f3f3f3",
    },
  });
  
  const [customerTransactionData, setCustomerTransactionData] = useState([]);
  useEffect(() => {
    customerType == "customer"
      ? customerTransactions()
      : supplierTransactions();
  }, []);
  
    const customerTransactions = async () => {
    try {
      const responce = await Api.get("/auth/get-transaction/customer");
      setCustomerTransactionData(responce.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const supplierTransactions = async () => {
    try {
      const responce = await Api.get("/auth/get-transaction/supplier");
      setCustomerTransactionData(responce.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
    return (
        <View style={styles.container}>
            <View style={{ borderBottomColor: '#c6c6c6', borderBottomWidth: .6 }}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: "center",
                    paddingBottom: 20,
                    paddingHorizontal: metrics.horizontalScale(20)
                }}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"#828282"}
                            style={{
                                width: '100%',
                                fontSize: 16,
                                color: '#000',
                                fontWeight: '500',
                                position: 'relative',
                                paddingLeft: metrics.horizontalScale(10),
                                // backgroundColor:'#ddd',
                                paddingVertical: metrics.verticalScale(7)
                            }}
                        />
                        <TouchableOpacity style={{ position: 'absolute', right: 20, alignSelf: 'center' }}>
                            <Icon name="search" color={'#333'} size={22} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '20%', justifyContent: 'flex-end', alignItems: 'flex-end', paddingVertical: metrics.verticalScale(5), paddingHorizontal: metrics.horizontalScale(5),
                    }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '80%', paddingVertical: 8, borderRadius: 6, backgroundColor: '#0A5AC9' }}>
                            <Text style={{ color: '#333', fontSize: 14, fontWeight: '900', color: '#fff' }}>PDF</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      <ScrollView>
        <View style={{ width }}>
          {customerTransactionData.map((obj, index) =>
            obj.tns_type == "got" ? (
              <ToGetUser object={obj} key={index} />
            ) : (
              <ToPayUser object={obj} key={index} />
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomerTransaction;
