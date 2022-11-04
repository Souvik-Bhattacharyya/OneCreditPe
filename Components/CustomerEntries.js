import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../Constants/metrics";
import DatePickerIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-date-picker";
import Api from "../Services";
const CashEntries = ({route}) => {
  const {user} = route.params;
  const [isActive, setIsActive] = useState("cash in");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [customerCashEntry, setCustomerCashEntry] = useState({
    amount: null,
    entryDate: "2022-11-01 07:08:29",
    tns_type: "get",
    paymentDetails: "",
    attachments: null,
  });

  // const payload = {
  //   amount: customerCashEntry.amount,
  //   date_time: customerCashEntry.entryDate,
  //   tns_type: customerCashEntry.tns_type,
  //   payment_details: customerCashEntry.paymentDetails,
  //   customer_id: user.id,
  //   attachments: customerCashEntry.attachments,
  // };
  const cashEntry = async () => {
    var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTRkYTIwMmVjYTY1NzFhNzdiZGY2YTZiMjJlNDBmZTgzN2Y1MTk2YjlkYTlkOGMxOTM4YjAzMjc5Njg2M2VjNWQ3Nzc5YWZlZThlOTA5MDciLCJpYXQiOjE2NjcwNTUzMDIuNzUwNDgyLCJuYmYiOjE2NjcwNTUzMDIuNzUwNDg4LCJleHAiOjE2OTg1OTEzMDIuNTk2ODgyLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.VY3QvEZwFp0Q7a1cNfIemdv369a8vePUOOh9jelJ4u0iseehmX-3zPrlmPesIn8et4g1F0Y803tDz815ZdlIPjTHYQD3JkvHJGK2tILBAX9BaG1Rq7JrhXY03dG0QIDc6vFj5Tsp0NFVrU9tSOxk5tHvvLA0UwpcDnFZl9a15LBSo9kvlTVdch8dureZt4SOz_-sgx-rHW_J_rjMthaUSufU56iOVe-TNKIpbnraBYGY33KBQp7YPLLp01MX-mkcQiwoD44YOcAJbzs1XLFb2fPDAP4c2keZB9_Nyteb0zWgK5nArJUSTLVbCfR5uuNjtgGIO277HMEr1Fqt6M1UyaxgRtQkfBrgWRKYIUybYF0_TFQKgqlD5V-NG_Y7rczW_CIy5HaEvrZxVm1qL2py-cn-bSgYrfdj7NvJVsi8mDoUEuPtq5pLFPhSIE6MULbKb83Eug-uWArMVzna2XcQAcHeRkCdYc3OwnflFOFB5e4NFpmR_SLLSfH2R_qV2HO_Ze5NTqXCbfAkSkDIp0sHPxaNP7aNI6_0cQGL6qkbB7mFzla6LjsdaTzu38LlyTI5EiscV-pShXMediK-JOChZwuMdl6knJQW_-DUYwfEXiKPjHEGzf2EgKvDmQVJyoxOzamBKpVY5UfxUL0sldiqeyv8SKxbkTfhnKChmxRb50U",
    );

    var formdata = new FormData();
    formdata.append("amount", customerCashEntry.amount);
    formdata.append("tns_type", customerCashEntry.tns_type);
    formdata.append("customer_id", user.id);
    // formdata.append("attachment", fileInput.files[0], "[PROXY]");
    formdata.append("date_time", customerCashEntry.entryDate);
    formdata.append("payment_details", customerCashEntry.paymentDetails);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    const response = await Api.postForm("/auth/transaction", formdata);
    console.log(response);
    // fetch("https://onepay.alsoltech.in/api/auth/transaction", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log("error", error));
    // console.log("******", user);
    // var formdata = new FormData();
    // formdata.append("amount", customerCashEntry.amount);
    // formdata.append("tns_type", customerCashEntry.tns_type);
    // formdata.append("customer_id", user.id);
    // formdata.append("attachment", fileInput.files[0], "[PROXY]");
    // formdata.append("date_time", customerCashEntry.entryDate);
    // formdata.append("payment_details", customerCashEntry.paymentDetails);

    //   try {
    //     const response = await Api.postForm("/auth/transaction", formdata);
    //     // if (response.status == 200) {
    //     console.log("====>", response.data);
    //     setCashDetails({
    //       ...cashDetails,
    //       amount: null,
    //       entryDate: "2022-11-01 07:08:29",
    //       tns_type: "get",
    //       paymentDetails: "",
    //       attachments: null,
    //     });

    //     navigation.navigate("userDetails");
    //     // }
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={customerCashEntry.amount}
          placeholder="Enter Amount"
          placeholderTextColor={"#828282"}
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={val =>
            setCustomerCashEntry({...customerCashEntry, amount: val})
          }
        />
        <Icon name="rupee" color={"#828282"} style={styles.icon} size={26} />
      </View>

      <View style={{marginVertical: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
          onPress={() => setOpen(true)}>
          <DatePickerIcon
            name="date-range"
            color={"#828282"}
            style={{}}
            size={24}
          />
          <Text
            style={{
              color: "#828282",
              fontSize: 18,
              paddingHorizontal: 10,
              fontWeight: "800",
            }}>
            Select Date & Time
          </Text>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(15),
          width: "100%",
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash in" ? "#12ce12" : "white",
            borderColor: isActive === "cash in" ? "#12ce12" : "#c9c9c9",
            borderWidth: 1,
            width: "48%",
            borderRadius: 4,
          }}
          onPress={() => {
            setIsActive("cash in");
            setCustomerCashEntry({...customerCashEntry, tns_type: "got"});
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash in" ? "#fff" : "#0a5ac9"},
            ]}>
            To Get
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(10),
            backgroundColor: isActive === "cash out" ? "#ED1C24" : "white",
            borderColor: isActive === "cash out" ? "#ED1C24" : "#c6c6c6",
            borderWidth: 1,
            width: "48%",
            borderRadius: 4,
          }}
          onPress={() => {
            setIsActive("cash out");
            setCustomerCashEntry({...customerCashEntry, tns_type: "give"});
          }}>
          <Text
            style={[
              styles.btnTxt,
              {color: isActive === "cash out" ? "#fff" : "#20409A"},
            ]}>
            To Pay
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          value={customerCashEntry.paymentDetails}
          placeholder="Enter Payment Details"
          placeholderTextColor={"#828282"}
          style={[
            styles.textInput,
            {height: 200, textAlignVertical: "top", paddingHorizontal: 20},
          ]}
          multiline={true}
          numberOfLines={10}
          onChangeText={val =>
            setCustomerCashEntry({...customerCashEntry, paymentDetails: val})
          }
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: metrics.verticalScale(20),
          alignSelf: "center",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#fff",
            borderRadius: 50,
            width: "48%",
            borderColor: "#c9c9c9",
            borderWidth: 1,
            flexDirection: "row",
          }}>
          <DatePickerIcon
            name="camera-alt"
            color={"#0a5ac9"}
            style={{marginRight: 5}}
            size={24}
          />
          <Text style={[styles.btnTxt, {color: "#0a5ac9"}]}>Attach Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: metrics.horizontalScale(20),
            paddingVertical: metrics.verticalScale(12),
            backgroundColor: "#0a5ac9",
            borderRadius: 50,
            width: "48%",
          }}
          onPress={cashEntry}>
          <Text style={[styles.btnTxt, {color: "#fff"}]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CashEntries;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.horizontalScale(15),
    paddingVertical: metrics.verticalScale(20),
    backgroundColor: "#E8EEFF",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: "#000",
    fontSize: 18,
    backgroundColor: "#fff",
    fontWeight: "800",
  },
  icon: {
    position: "absolute",
    top: "30%",
    left: 25,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "600",
    // color: "#fff",
    textAlign: "center",
  },
});
