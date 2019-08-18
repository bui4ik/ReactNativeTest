import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import ImageLoaderAndButton from "./ImageLoaderAndButton";
import DialogWindow from "./DialogWindow";

class Posts extends Component {
  state = {
    posts: [],
    isDialogOpen: false,
    openedPostId: "",
    openedPostTitle: "",
    openedPostBody: ""
  };

  postsRequest = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  };

  openDialogWindow = (id, title, body) => {
    this.setState({
      openedPostId: id,
      openedPostTitle: title,
      openedPostBody: body,
      isDialogOpen: true
    });
  };

  render() {
    const {
      posts,
      isDialogOpen,
      openedPostId,
      openedPostBody,
      openedPostTitle
    } = this.state;
    return (
      <View>
        <ImageLoaderAndButton
          style={styles.image}
          source={{
            uri:
              "https://www.doortodoorcars.com.au/wp-content/uploads/2018/08/tracktor-03.jpg"
          }}
          postRequest={this.postsRequest}
        />
        <View style={{ margin: 10 }}>
          <ScrollView horizontal={true}>
            {posts.map(p => (
              <TouchableOpacity
                key={p.id}
                onPress={() => this.openDialogWindow(p.id, p.title, p.body)}
              >
                <View key={p.id} style={styles.post}>
                  <Text style={{ textAlign: "center" }}>ID: {p.id}</Text>
                  <Text style={{ textAlign: "center" }}>
                    Title:{" "}
                    {p.title.length <= 20
                      ? p.title
                      : `${p.title.slice(0, 20)}...`}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {isDialogOpen && (
          <DialogWindow
            id={openedPostId}
            title={openedPostTitle}
            body={openedPostBody}
          />
        )}
      </View>
    );
  }
}

export default Posts;

const styles = StyleSheet.create({
  post: {
    width: 130,
    height: 65,
    padding: 5,
    paddingBottom: 20,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#b3e5fc"
  },
  image: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height / 5) * 3
  }
});
