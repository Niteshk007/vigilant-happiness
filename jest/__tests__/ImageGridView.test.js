import React from 'react'
import { render } from "@testing-library/react-native";
import ImageGridView from "../../src/containers/ImageGridView";


describe('Should render ImageGridView with images blank array', () => {
    const props = {
        images: []
    }
    const { toJSON } = render(
        <ImageGridView {...props} />
    )
    it('Should match Snapshot', () => {
        expect(toJSON()).toMatchSnapshot();
    });
})

describe('Should render ImageGridView with images array length >0', () => {
    const props = {
        images: [{}, {}]
    }
    const { toJSON } = render(
        <ImageGridView {...props} />
    )
    it('Should match Snapshot', () => {
        expect(toJSON()).toMatchSnapshot();
    });
})

describe('Should render ImageGridView with no images props', () => {
    const { toJSON } = render(
        <ImageGridView />
    )
    it('Should match Snapshot', () => {
        expect(toJSON()).toMatchSnapshot();
    });
})