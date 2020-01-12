import React from 'react';
import "./styles.css";
import ZoomableMap from "./component/map/ZoomableMap";
import Sidebar from "./component/navbar/sidebar";
import colors from './constant/style';
import {ThemeProvider} from "styled-components";

export default function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={colors}>
                <Sidebar/>
                <ZoomableMap/>
            </ThemeProvider>
        </React.Fragment>
    );
}
