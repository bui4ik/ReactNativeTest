import React, { Component } from "react";
import { Animated, Button, View } from "react-native";
import { ANIMATION_CONFIG } from "../config/constants";

class ImageLoaderAndButton extends Component {
  state = {
    opacity: new Animated.Value(0),
    showButton: false
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, ANIMATION_CONFIG).start(() =>
      this.setState({ showButton: true })
    );
  };

  style = () => ([
    {
      opacity: this.state.opacity,
      transform: [
        {
          scale: this.state.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0.85, 1]
          })
        }
      ]
    },
    this.props.style
  ]);

  render() {
    const { postRequest } = this.props;
    const { showButton } = this.state;
    return (
      <View>
        <Animated.Image
          onLoad={this.onLoad}
          {...this.props}
          style={this.style()}
        />
        {showButton === true && (
          <Button onPress={postRequest} title={"GET POSTS"} />
        )}
      </View>
    );
  }
}

export default ImageLoaderAndButton;
