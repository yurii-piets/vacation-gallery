import React, {Component} from "react";
import MapChart from "./MapChart";
import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch';

export default class ZoomableMap extends Component {

    render() {
        return (
            <TransformWrapper defaultScale={2} wheel={{step: 100}}>
                <TransformComponent>
                    <MapChart/>
                </TransformComponent>
            </TransformWrapper>
        );
    }
}