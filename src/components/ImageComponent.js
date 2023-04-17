import React from "react";
import { Image, View } from "react-native";

const ImageComponent = (props) => {
    const { imageStyle, src } = props;
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={src ? src : require("../assets/images/sample.png")}
                style={[{ flex:1 }, imageStyle]}
                resizeMode="contain"
            />
        </View>
    )
}

export default ImageComponent;