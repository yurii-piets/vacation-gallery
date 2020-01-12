import React, {Component} from "react";
import styled from 'styled-components';
import {AiOutlineHome, AiTwotoneShopping, AiOutlineFileUnknown} from 'react-icons/ai';
import {GiCycling, GiElephant} from 'react-icons/gi';
import category_colors from "../../constant/category_style";

const Fragment = styled.a`
    .icon {
        cursor: pointer;
        width: 60px;
        height: 60px;
        color: white;
        background-color: transparent;
        margin: 50px 0 0 70px;
    }
    
    .icon:hover {
        color: ${({theme}) => (theme.primary)};
        transition: 0.7s ease-in-out;
    }
`;

export default class Icon extends Component {
    state = {
        enabled: true
    };

    handleOnClick = () => {
        this.setState({enabled: !this.state.enabled})
    };

    selectEnabledStyle = (categoryName) => {
        return {"color": category_colors[categoryName]}
    };

    selectIcon = (categoryName) => {
        switch (categoryName) {
            case "home":
                return <AiOutlineHome className="icon" style={this.state.enabled && this.selectEnabledStyle(categoryName)}/>;
            case "zoo":
                return <GiElephant className="icon" style={this.state.enabled && this.selectEnabledStyle(categoryName)}/>;
            case "shopping":
                return <AiTwotoneShopping className="icon" style={this.state.enabled && this.selectEnabledStyle(categoryName)}/>;
            case "cycling":
                return <GiCycling className="icon" style={this.state.enabled && this.selectEnabledStyle(categoryName)}/>;
        }
    };

    render() {
        return (
            <Fragment onClick={this.handleOnClick}>
                {this.selectIcon(this.props.categoryName)}
            </Fragment>
        )
    }
}