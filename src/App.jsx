import React, {Component} from 'react';
import "./styles.css";
import ZoomableMap from "./component/map/ZoomableMap";
import Sidebar from "./component/navbar/Sidebar";
import Slider from "./component/gallery/Slider";
import colors from './constant/style';
import {ThemeProvider} from "styled-components";
import categories from "./constant/categories";

export default class App extends Component {

    state = {
        enabledCategories: Object.keys(categories),
        galleryIndex: 0
        // galleryIndex: null
    };

    handleMenuIconClick = (categoryName) => {
        const {enabledCategories} = this.state;
        this.setState({
            enabledCategories: enabledCategories.includes(categoryName) ? enabledCategories.filter(ecn => ecn !== categoryName) : enabledCategories.concat([categoryName])
        });
    };

    handleGalleryIndexSelect = index => {
        this.setState(state => {
            state.galleryIndex = index
        });
    };

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={colors}>
                    {/*<Sidebar onClick={this.handleMenuIconClick}/>*/}
                    {/*<ZoomableMap categories={this.state.enabledCategories}*/}
                    {/*             onGalleryIndexSelect={this.handleGalleryIndexSelect}/>*/}
                    {this.state.galleryIndex != null &&
                    <Slider key={this.state.galleryIndex} galleryIndex={this.state.galleryIndex}/>}
                </ThemeProvider>
            </React.Fragment>
        )
    };
}
