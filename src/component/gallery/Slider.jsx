import React, {Component} from 'react';
import styled from 'styled-components';
import Slide from "./Slide";
import RightArrow from "./arrows/RightArrow";
import LeftArrow from "./arrows/LeftArrow";
import collections from "../../constant/collections";

const Fragment = styled.div`
    width: 700px;
    height: 700px;
    // background: #000;
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
        const {galleryIndex} = this.props;
        if (slideIndex === collections[galleryIndex].photos.length  - 1) {
            return;
        }
        this.setState({
            slideIndex: slideIndex + 1
        });
    };

    render() {
        const {galleryIndex} = this.props;
        let {slideIndex} = this.state;
        console.log(collections[galleryIndex]);
        return (
            <Fragment>
                <Slide key={galleryIndex+ 'x' + slideIndex} photo={collections[galleryIndex].photos[slideIndex]}/>
                <LeftArrow handlePrevSlide={this.handlePrevSlide}/>
                <RightArrow handleNextSlide={this.handleNextSlide}/>
            </Fragment>
        );
    }
}
