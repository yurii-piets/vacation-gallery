import React, {Component} from 'react'
import styled from "styled-components";

const Fragment = styled.a`
    display: inline-block;
    height: 88%;
    width: 88%;
    position: relative;
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    margin: '5px',
    display: 'inline-block',
    'align-items': 'center',
    'justify-content': 'center'
`;

export default class Slide extends Component {

    state = {
        src: null
    };

    componentDidMount() {
        const {src} = this.props.photo;
        const imageLoader = new Image();
        imageLoader.src = src;
        imageLoader.onload = () => {
            this.setState({src});
        };
    };

    render() {
        const styles = {backgroundImage: `url(${this.state.src || this.props.photo.placeholder})`};
        return (
            <Fragment style={styles}>
                {this.props.children}
            </Fragment>
        );
    };
}
