import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import metrics from "../../Constants/metrics";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel from "../../Components/Carousel/Carousel";
import {useNavigation} from "@react-navigation/native";
import CommonHeader from "../../Components/CommonHeader";
import Api from "../../Services";

const CustomerHome = ({route}) => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const width = Dimensions.get("window").width;

  const [viewResult, setViewResult] = useState({});
  const [cusTransaction, setCusTransaction] = useState([]);
  const [suppTransaction, setSuppTransaction] = useState([]);
  const [cusGive, setCusGive] = useState("");
  useEffect(() => {
    navigation.addListener("focus", () => {
      viewReport();
      customerTransaction();
      supplierTransaction();
    });
  }, [navigation]);

  const viewReport = async () => {
    try {
      const response = await Api.get("/auth/view_reports");
      if (response.data) {
        setViewResult(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const customerTransaction = async () => {
    try {
      const response = await Api.get("/auth/user-all-customers-transactions");
      console.log("cus trans", response);
      if (response.data) {
        setCusTransaction(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const supplierTransaction = async () => {
    try {
      const response = await Api.get("/auth/user-all-customers-transactions");
      console.log("supp trans", response);
      if (response.data) {
        setSuppTransaction(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cusGot = cusTransaction
    .filter(item => item.aggsum > 0)
    .reduce((accumulator, object) => {
      return accumulator + object.aggsum;
    }, 0);

  const cusGave = cusTransaction
    .filter(item => item.aggsum < 0)
    .reduce((accumulator, object) => {
      return accumulator + object.aggsum;
    }, 0);

  const suppGot = cusTransaction
    .filter(item => item.aggsum > 0)
    .reduce((accumulator, object) => {
      return accumulator + object.aggsum;
    }, 0);

  const suppGave = cusTransaction
    .filter(item => item.aggsum < 0)
    .reduce((accumulator, object) => {
      return accumulator + object.aggsum;
    }, 0);
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require("../../Assets/background.jpg")}
        style={{flex: 1, backgroundColor: "#000"}}>
        <CommonHeader color="transparent" />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View
              style={[
                styles.paddingHorizontal,
                {
                  height: 180,
                  backgroundColor: "transparent",
                  justifyContent: "center",
                },
              ]}>
              <Image
                source={require("../../Assets/Images/carousel.jpg")}
                style={{resizeMode: "contain", width: "100%"}}
              />
            </View>

            <View
              style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: "#fff",
              }}>
              <View
                style={{
                  marginBottom: 10,
                  marginTop: 20,
                  height: 6,
                  borderRadius: 50,
                  width: 60,
                  backgroundColor: "#828282",
                  alignSelf: "center",
                }}
              />

              <View>
                <View style={styles.header}>
                  <Text style={styles.headText}>Customer Transaction</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Parties", {
                        screen: "CustomerStack",
                      })
                    }
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#0a5ac9",
                        fontWeight: "700",
                      }}>
                      See More
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <View
                    style={[
                      styles.box,
                      {
                        borderRightWidth: 1,
                        borderColor: "#f1f1f1",
                        paddingRight: 10,
                      },
                    ]}>
                    <View
                      style={{
                        backgroundColor: "#C2FBD1",
                        borderRadius: 50,
                        padding: 8,
                        marginRight: 15,
                      }}>
                      <Icon name="arrow-up-bold" color={"#12ce12"} size={30} />
                    </View>
                    <View style={{flexDirection: "column"}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#333",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                        }}>
                        ₹{cusGot}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#828282",
                          fontWeight: "600",
                        }}>
                        You Got
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.box,
                      {
                        borderLeftWidth: 1,
                        borderColor: "#f1f1f1",
                        paddingLeft: 10,
                      },
                    ]}>
                    <View
                      style={{
                        backgroundColor: "#FFC3C6",
                        borderRadius: 50,
                        padding: 8,
                        marginRight: 15,
                      }}>
                      <Icon
                        name="arrow-down-bold"
                        color={"#c91e25"}
                        size={30}
                      />
                    </View>
                    <View style={{flexDirection: "column"}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#333",
                          fontWeight: "700",
                        }}>
                        ₹{cusGave}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#828282",
                          fontWeight: "600",
                        }}>
                        You Gave
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Card end */}

              {/* Card Started */}
              <View>
                <View style={styles.header}>
                  <Text style={styles.headText}>Supplier Transaction</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Parties", {
                        screen: "SupplierStack",
                      })
                    }
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#0a5ac9",
                        fontWeight: "700",
                      }}>
                      See More
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <View
                    style={[
                      styles.box,
                      {
                        borderRightWidth: 1,
                        borderColor: "#f1f1f1",
                        paddingRight: 10,
                      },
                    ]}>
                    <View
                      style={{
                        backgroundColor: "#C2FBD1",
                        borderRadius: 50,
                        padding: 8,
                        marginRight: 15,
                      }}>
                      <Icon
                        name="account-arrow-left"
                        color={"#12ce12"}
                        size={30}
                      />
                    </View>
                    <View style={{flexDirection: "column"}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#333",
                          fontWeight: "700",
                          fontFamily: "Poppins",
                        }}>
                        ₹{suppGot}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#828282",
                          fontWeight: "600",
                        }}>
                        Advance
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.box,
                      {
                        borderLeftWidth: 1,
                        borderColor: "#f1f1f1",
                        paddingLeft: 10,
                      },
                    ]}>
                    <View
                      style={{
                        backgroundColor: "#FFC3C6",
                        borderRadius: 50,
                        padding: 8,
                        marginRight: 15,
                      }}>
                      <Icon
                        name="account-arrow-right"
                        color={"#c91e25"}
                        size={30}
                      />
                    </View>
                    <View style={{flexDirection: "column"}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#333",
                          fontWeight: "700",
                        }}>
                        ₹{suppGave}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#828282",
                          fontWeight: "600",
                        }}>
                        Purchase
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Card end */}

              {/* Cashbook Started */}
              <View>
                <View style={styles.header}>
                  <Text style={styles.headText}>Cashbook</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Cashbook", {
                        screen: "Cash Book",
                      })
                    }
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#0a5ac9",
                        fontWeight: "700",
                      }}>
                      Open Now?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <View
                    style={[
                      styles.box,
                      {
                        borderRightWidth: 1,
                        borderColor: "#f1f1f1",
                        paddingRight: 10,
                      },
                    ]}>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Text
                        style={{
                          fontSize: 22,
                          color:
                            viewResult.cash_in_hands >= 0
                              ? "#12CE12"
                              : "#C91E25",
                          fontWeight: "700",
                        }}>
                        ₹{viewResult.cash_in_hands}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#828282",
                          fontWeight: "600",
                        }}>
                        Cash In Hand
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.box,
                      {
                        borderLeftWidth: 1,
                        borderColor: "#f1f1f1",
                        paddingLeft: 10,
                      },
                    ]}>
                    <View
                      style={{flexDirection: "column", alignItems: "center"}}>
                      <Text
                        style={{
                          fontSize: 22,
                          color:
                            viewResult.todays_income >= 0
                              ? "#12CE12"
                              : "#C91E25",
                          fontWeight: "700",
                        }}>
                        ₹{viewResult.todays_income}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#828282",
                          fontWeight: "600",
                        }}>
                        Today's Income
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Cashbook end */}

              <View>
                <View style={styles.header}>
                  <Text style={styles.headText}>Other Services</Text>
                  <Text
                    // onPress={() =>
                    //   navigation.navigate("Cashbook", {
                    //     screen: "Cash Book",
                    //   })
                    // }
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#0a5ac9",
                        fontWeight: "700",
                      }}>
                      Coming Soon
                    </Text>
                  </Text>
                </View>
                <View
                  style={[
                    styles.shadow,
                    {
                      backgroundColor: "#fff",
                      borderRadius: 6,
                      paddingVertical: metrics.verticalScale(10),
                      paddingHorizontal: metrics.horizontalScale(10),
                      // borderWidth: 1,
                      // borderColor: '#c6c6c6',
                    },
                  ]}>
                  <Carousel />
                </View>
              </View>
            </View>
            {/* Loan */}
            {/* <View
          style={[
            styles.shadow,
            {
              flexDirection: "row",
              paddingHorizontal: metrics.horizontalScale(20),
              paddingVertical: metrics.verticalScale(15),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 6,
              marginVertical: metrics.verticalScale(5),
              borderColor: "#c6c6c6",
              marginHorizontal: metrics.horizontalScale(15),
            },
          ]}>
          <View
            style={{
              width: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image source={require("../../Assets/loanSec.png")} />
          </View>
          <View style={{ width: "70%", paddingHorizontal: 20 }}>
            <Text style={{ color: "#464555", fontSize: 18, fontWeight: "600" }}>
              Easy Loan
            </Text>
            <Text style={{ color: "#828282", fontWeight: "400" }}>
              Get easy loan without any paperwork
            </Text>
            <TouchableOpacity style={{ marginTop: 10, justifyContent: "center" }}>
              <Text style={{ color: "#0A5AC9", fontSize: 16, fontWeight: "600" }}>
                Apply Now
                <Icon name="doubleright" color={"#0A5AC9"} size={16} />
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EEF3FF",
    backgroundColor: "transparent",
    position: "relative",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#fff",
    // paddingVertical: metrics.verticalScale(10),
    borderRadius: 6,
    // borderWidth: 1,
    // borderColor: '#c6c6c6',
    marginBottom: 10,
  },
  box: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: '#ddd'
  },
  cardBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#c6c6c6",
    paddingVertical: metrics.verticalScale(7),
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  // shadow: {
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 10,
  //     height: 10,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.5,
  //   elevation: 3,
  // },
  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0a5ac9",
    textAlign: "center",
  },
  btnIcon: {
    width: 24,
    height: 24,
  },
  paddingHorizontal: {
    paddingHorizontal: metrics.horizontalScale(15),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    backgroundColor: "#f6f6f6",
    paddingVertical: metrics.verticalScale(10),
    paddingHorizontal: 15,
  },
  headText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "800",
  },
});
