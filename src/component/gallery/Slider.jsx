import React, {Component} from 'react';
import styled from 'styled-components';
import Slide from "./Slide";
import RightArrow from "./arrows/RightArrow";
import LeftArrow from "./arrows/LeftArrow";
import collections from "../../constant/collections";
import ThumbnailsBar from "./ThumbnailsBar";

const Fragment = styled.div`
    width: 700px;
    height: 700px;
`;

export default class Slider extends Component {
    state = {
        slideIndex: 0
    };

    handlePrevSlide = () => {
        const {slideIndex} = this.state;
        if (slideIndex === 0) {
            return;
        }
        this.setState({
            slideIndex: slideIndex - 1
        });
    };

    handleNextSlide = () => {
        const {slideIndex} = this.state;
        const {collectionIndex} = this.props;
        if (slideIndex === collections[collectionIndex].photos.length - 1) {
            return;
        }
        this.setState({
            slideIndex: slideIndex + 1
        });
    };

    handleThumbnailSelect = thumbnailId => {
        this.setState({
            slideIndex: thumbnailId
        });
    };

    render() {
        const {collectionIndex} = this.props;
        let {slideIndex} = this.state;
        const photos = collections[collectionIndex].photos;
        return (
            <Fragment>
                <Slide key={collectionIndex + 'x' + slideIndex} photo={photos[[slideIndex]]}/>
                <LeftArrow handlePrevSlide={this.handlePrevSlide}/>
                <RightArrow handleNextSlide={this.handleNextSlide}/>
                <ThumbnailsBar key={collectionIndex + 'thb'}
                               photos={photos}
                               activePhotoIndex={slideIndex}
                               onThumbnailSelect={this.handleThumbnailSelect}/>
            </Fragment>
        );
    }
}
