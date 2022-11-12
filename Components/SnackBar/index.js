import React, {useState} from "react";
// import {Toast} from "react-native-ui-lib";
import {Button, Snackbar} from "react-native-paper";

import {useDispatch, useSelector} from "react-redux";
import {hide} from "../../Redux/Action/notificationActions";
import {View} from "react-native";
const SnackBar = () => {
  const notification = useSelector(state => state.notification);
  console.log("notification", notification);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => dispatch(hide());

  return (
    // <Toast
    //   visible={notification.isVisible}
    //   position={"bottom"}
    //   autoDismiss={3000}
    //   onDismiss={onDismissSnackBar}
    //   message={notification.message}
    //   style={{backgroundColor: notification.type === "error" ? "red" : "green"}}
    // />
    // <Snackbar
    //   visible={notification.isVisible}
    //   onDismiss={onDismissSnackBar}
    //   action={{
    //     label: "Undo",
    //     onPress: () => {
    //       // Do something
    //     },
    //   }}>
    //   {notification.message}
    // </Snackbar>
    <View>
      {/* <Button onPress={onToggleSnackBar}>{visible ? "Hide" : "Show"}</Button> */}
      <Snackbar
        visible={notification.isVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}>
        {notification.message}
      </Snackbar>
    </View>
  );
};

export default SnackBar;
