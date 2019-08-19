import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import ImageLoaderAndButton from "./ImageLoaderAndButton";
import DialogWindow from "./DialogWindow";
import postsRequest from "../utils/postsRequest";
import Post from "./Post";
import { BANNER_HEIGHT, BANNER_URL, BANNER_WIDTH } from "../config/constants";

class Posts extends Component {
  state = {
    posts: [],
    isDialogOpen: false,
    openedPostId: "",
    openedPostTitle: "",
    openedPostBody: "",
    isLoading: false
  };

  fetchPosts = async () => {
    this.setState({ isLoading: true });
    try {
      const posts = await postsRequest();
      this.setState({ posts });
    } finally {
      this.setState({ isLoading: false });
    }
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
      openedPostTitle,
      isLoading
    } = this.state;
    return (
      <View>
        <ImageLoaderAndButton
          style={styles.image}
          source={{
            uri: `${BANNER_URL}`
          }}
          postRequest={this.fetchPosts}
        />
        <View style={{ margin: 10 }}>
          {isLoading ? (
            <Text style={{ textAlign: "center" }}>Loading...</Text>
          ) : (
            <ScrollView horizontal={true}>
              {posts.map(p => (
                <Post
                  id={p.id}
                  title={p.title}
                  body={p.body}
                  openDialogWindow={this.openDialogWindow}
                  key={p.id}
                />
              ))}
            </ScrollView>
          )}
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
  image: {
    width: BANNER_WIDTH,
    height: BANNER_HEIGHT
  }
});
