import { View, FlatList } from "react-native";
import React from "react";
import ImageComponent from "../components/ImageComponent";

const imageList = [
    {
        id: "IMG001",
        src: require("../assets/images/sample.png")
    },
    {
        id: "IMG002",
        src: require("../assets/images/sample.png")
    },
    {
        id: "IMG003",
        src: require("../assets/images/sample.png")
    },
    {
        id: "IMG004",
        src: require("../assets/images/sample.png")
    },
    {
        id: "IMG005",
        src: require("../assets/images/sample.png")
    },
    {
        id: "IMG006",
        src: require("../assets/images/sample.png")
    }
]


const renderItem = ({ item, index }) => {
    return (
        <ImageComponent
            src={item?.src}
            imageStyle={{height:100,width:"100%"}}
        />
    )
}

const ImageGridView = (props) => {
    const { images } = props;
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={2}
                data={images ? images : imageList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                
            />
        </View>
    )
}

export default ImageGridView;