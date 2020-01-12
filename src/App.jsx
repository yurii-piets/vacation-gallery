import React, {Component} from 'react';
import "./styles.css";
import ZoomableMap from "./component/map/ZoomableMap";
import Sidebar from "./component/navbar/Sidebar";
import colors from './constant/style';
import {ThemeProvider} from "styled-components";
import categories from "./constant/categories";

export default class App extends Component {

    state = {
        enabledCategories: Object.keys(categories)
    };

    handleMenuIconClick = (categoryName) => {
        const {enabledCategories} = this.state;
        this.setState({
            enabledCategories: enabledCategories.includes(categoryName) ? enabledCategories.filter(ecn => ecn !== categoryName) : enabledCategories.concat([categoryName])
        });
    };

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={colors}>
                    <Sidebar onClick={this.handleMenuIconClick}/>
                    <ZoomableMap categories={this.state.enabledCategories}/>
                </ThemeProvider>
            </React.Fragment>
        )
    };
}
