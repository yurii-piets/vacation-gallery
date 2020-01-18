import React, {Component, useRef, useEffect} from 'react';
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
        collectionIndex: 0
    };

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
    }

    scrollToMySliderRef = () => window.scrollTo(0, this.sliderRef.offsetTop);

    handleMenuIconClick = (categoryName) => {
        const {enabledCategories} = this.state;
        this.setState({
            enabledCategories: enabledCategories.includes(categoryName) ? enabledCategories.filter(ecn => ecn !== categoryName) : enabledCategories.concat([categoryName]),
            collectionIndex: this.state.collectionIndex
        });
    };

    handleCollectionSelect = index => {
        this.setState({
            enabledCategories: this.state.enabledCategories,
            collectionIndex: index
        });
        this.scrollToMySliderRef();
    };

    handleToTopClick = () => window.scrollTo(0, 0);

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={colors}>
                    <Sidebar onClick={this.handleMenuIconClick}/>
                    <ZoomableMap categories={this.state.enabledCategories}
                                 onCollectionSelect={this.handleCollectionSelect}/>
                    {this.state.collectionIndex != null &&
                    <div ref={(ref) => this.sliderRef = ref}>
                        <Slider key={this.state.collectionIndex}
                                collectionIndex={this.state.collectionIndex}
                                onToTopClick={this.handleToTopClick}
                        />
                    </div>}
                </ThemeProvider>
            </React.Fragment>
        )
    };
}
