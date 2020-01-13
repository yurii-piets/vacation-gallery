import React, {Component} from "react";
import styled from 'styled-components';
import {AiOutlineHome, AiTwotoneShopping, AiOutlineFileUnknown} from 'react-icons/ai';
import {GiCycling, GiElephant} from 'react-icons/gi';
import categories from "../../constant/categories";

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
        transition: 0.7s ease-in-out;
    }
`;

export default class Icon extends Component {
    state = {
        enabled: true,
    };

    handleOnClick = (categoryName) => {
        this.props.onClick(categoryName);
        this.setState({enabled: !this.state.enabled})
    };

    selectEnabledStyle = (categoryName) => {
        return {"color": categories[categoryName]}
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
        const {categoryName} = this.props;
        return (
            <Fragment onClick={() => this.handleOnClick(categoryName)}>
                {this.selectIcon(categoryName)}
            </Fragment>
        )
    }
}