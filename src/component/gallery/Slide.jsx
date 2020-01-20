import React, {Component} from 'react'
import styled from "styled-components";
import LazyLoadBackgroundImage from "../LazyLoadBackgroundImage";

const Fragment = styled(LazyLoadBackgroundImage)`
    display: inline-block;
    height: 88%;
    width: 88%;
    position: relative;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 50% 60%;
    margin: 5px;
    display: inline-block;
    align-items: center;
    justify-content: center;
`;

export default class Slide extends Component {

    render() {
        return (
            <Fragment src={this.props.photo.src}>
                {this.props.children}
            </Fragment>
        );
    };
}
