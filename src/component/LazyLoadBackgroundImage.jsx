import React, {Component} from "react";
import placeholder from "../constant/loading-placeholder.gif";

export default class LazyLoadBackgroundImage extends Component {

    state = {
        src: null
    };

    componentDidMount() {
        console.log("componentDidMount");
        const {src} = this.props;
        const imageLoader = new Image();
        imageLoader.src = src;
        imageLoader.onload = () => {
            this.setState({src});
        };
    };

    render() {
        const styles = {backgroundImage: `url(${this.state.src || placeholder})`};
        return (
            <div style={styles} className={this.props.className} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}
