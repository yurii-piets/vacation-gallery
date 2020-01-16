import React, {Component} from "react";
import MapChart from "./MapChart";
import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch';
import styled from 'styled-components';

const Fragment = styled.div`
    z-index: 1;
`;

export default class ZoomableMap extends Component {

    render() {
        return (
            <Fragment>
                <TransformWrapper defaultScale={2} wheel={{step: 100}}>
                    <TransformComponent>
                        <MapChart categories={this.props.categories}
                                  onCollectionSelect={this.props.onCollectionSelect}/>
                    </TransformComponent>
                </TransformWrapper>
            </Fragment>
        );
    }
}
