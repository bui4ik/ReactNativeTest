import React from "react";
import { View, Text } from "react-native";

const DialogWindow = ({ id, title, body }) => {
  return (
    <View
      style={{
        backgroundColor: "#4fc3f7",
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        padding: 5,
        textAlign: "center"
      }}
    >
      <Text>ID: {id}</Text>
      <Text>TITLE: {title}</Text>
      <Text>BODY: {body}</Text>
    </View>
  );
};

export default DialogWindow;
