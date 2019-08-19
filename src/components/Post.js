import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Post extends Component {
  render() {
    const { id, title, body, openDialogWindow } = this.props;
    return (
      <TouchableOpacity
        key={id}
        onPress={() => openDialogWindow(id, title, body)}
      >
        <View key={id} style={styles.post}>
          <Text style={{ textAlign: "center" }}>ID: {id}</Text>
          <Text style={{ textAlign: "center" }} numberOfLines={2}>
            Title: {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    width: 130,
    height: 65,
    padding: 5,
    paddingBottom: 20,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#b3e5fc"
  }
});

export default Post;
