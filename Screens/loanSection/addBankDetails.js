import {View, Text, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import CorrectIcon from "react-native-vector-icons/AntDesign";
import metrics from "../../Constants/metrics";
const AddBankDetails = ({navigation}) => {
  const [readMore, setReadMore] = useState(false);
  const info =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero molestiae totam sapiente excepturi quia nulla assumenda, hic autem animi, incidunt, voluptate nihil. Fugit necessitatibus sunt quisquam est illo magnam quae quam laborum at vel ab reprehenderit delectus eum impedit, iste quo maxime architecto velit adipisci. Similique, quibusdam fugit ipsam, aspernatur porro nemo aperiam illo aliquam quae, repellat consequuntur sunt nam optio velit! Animi blanditiis quas accusantium, asperiores eligendi voluptatem omnis at dolores repellat numquam architecto beatae facilis, aut dolorum, voluptatum excepturi temporibus rem ipsa! Rerum dolores ea quos voluptatibus quasi vel quis, inventore quia deserunt nulla odio nihil reprehenderit tenetur vitae pariatur assumenda sunt quam facilis expedita dignissimos natus ipsam iure tempora commodi? Saepe dolorem praesentium ipsa aperiam iure delectus, et rerum cumque vero impedit recusandae ut doloribus sit voluptatem quia? Beatae.";
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#D2D2D2",
      }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          height: "100%",
        }}>
        <Text
          style={{
            marginTop: 10,
            color: "#0A5AC9",
            fontSize: 16,
            fontWeight: "600",
          }}>
          Enter Your Details
        </Text>
        <TextInput
          placeholder="Bank Name"
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

        <TextInput
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Bank IFSC Code"
        />
        <TouchableOpacity onPress={() => navigation.navigate("FindIfsc")}>
          <Text
            style={{
              position: "absolute",
              right: 20,
              bottom: 15,
              fontSize: 12,
              color: "#0A5AC9",
            }}>
            Find IFSC
          </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Bank Account Number
"
        />
        <TextInput
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            paddingVertical: 7,
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Re-enter Bank Account Number
"
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            position: "relative",
          }}>
          <CorrectIcon
            name="checkcircle"
            size={15}
            color="#0A5AC9"
            style={{marginTop: 14}}
          />
          <Text style={{fontSize: 13, paddingLeft: 9}}>
            {readMore ? info : info.substring(0, 200)}...
          </Text>
        </View>
        <TouchableOpacity onPress={() => setReadMore(!readMore)}>
          {readMore ? (
            <View style={{position:'relative',left:90,bottom:18}}>
              <Text>Show Less</Text>
            </View>
          ) : (
            <View style={{position:'relative',left:220,bottom:17}}>
              <Text>Read More</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#0A5AC9",
            marginTop: 10,
            marginBottom: 20,
            justifyContent: "center",
            borderRadius: 50,
            flexDirection: "row",
            position: "absolute",
            bottom: -9,
            alignSelf: "center",
          }}>
          <Text
            style={{
              fontSize: 15,

              color: "#FFFFFF",
              margin: 10,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBankDetails;
