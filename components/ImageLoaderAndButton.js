import React, { Component } from "react";
import { Animated } from "react-native";
import {Button} from "react-native";

class ImageLoaderAndButton extends Component {
    state = {
        opacity: new Animated.Value(0),
        showButton: false,
    };

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start(() => this.setState({showButton: true}));
    };

    render() {
        const {postRequest} = this.props;
        return (
            <>
                <Animated.Image
                    onLoad={this.onLoad}
                    {...this.props}
                    style={[
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
                    ]}
                />
                {this.state.showButton === true ? <Button onPress={postRequest} title={'GET POSTS'}/> : null}
            </>
        );
    }
}

export default ImageLoaderAndButton;
