import React, {useState} from "react";
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
    <View>
      <Snackbar visible={notification.isVisible} onDismiss={onDismissSnackBar}>
        {notification.message}
      </Snackbar>
    </View>
  );
};

export default SnackBar;
