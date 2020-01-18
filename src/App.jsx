import React, {Component} from 'react';
import "./styles.css";
import ZoomableMap from "./component/map/ZoomableMap";
import Sidebar from "./component/navbar/Sidebar";
import Slider from "./component/gallery/Slider";
import colors from './constant/style';
import {ThemeProvider} from "styled-components";
import categories from "./constant/categories";
import collections from "./constant/collections";

export default class App extends Component {

    state = {
        enabledCategories: Object.keys(categories),
        // collectionIndex: null
        collectionIndex: 0
    };

    handleMenuIconClick = (categoryName) => {
        const {enabledCategories} = this.state;
        this.setState({
            enabledCategories: enabledCategories.includes(categoryName) ? enabledCategories.filter(ecn => ecn !== categoryName) : enabledCategories.concat([categoryName]),
            collectionIndex: this.state.collectionIndex
        });
    };

    handleCollectionSelect = index => {
        console.log("handleCollectionSelect", index);
        this.setState({
            enabledCategories: this.state.enabledCategories,
            collectionIndex: index
        });
    };

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={colors}>
                    {/*<Sidebar onClick={this.handleMenuIconClick}/>*/}
                    {/*<ZoomableMap categories={this.state.enabledCategories}*/}
                    {/*             onCollectionSelect={this.handleCollectionSelect}/>*/}
                    {this.state.collectionIndex != null &&
                    <Slider key={this.state.collectionIndex} collectionIndex={this.state.collectionIndex}/>}
                </ThemeProvider>
            </React.Fragment>
        )
    };
}
