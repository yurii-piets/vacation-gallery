import React, {Component} from "react";
import styled from 'styled-components';
import {AiOutlineHome, AiTwotoneShopping, AiOutlineFileUnknown} from 'react-icons/ai';
import {GiCycling, GiElephant, GiCalendar} from 'react-icons/gi';

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
        enable: true
    };

    selectIcon = (categoryName) => {
        switch (categoryName) {
            case "home":
                return <AiOutlineHome className="icon"/>;
            case "zoo":
                return <GiElephant className="icon"/>;
            case "shopping":
                return <AiTwotoneShopping className="icon"/>;
            case "cycling":
                return <GiCycling className="icon"/>;
            default:
                return <AiOutlineFileUnknown className="icon"/>
        }
    };

    render() {
        return (
            <Fragment>
                {this.selectIcon(this.props.categoryName)}
            </Fragment>
        )
    }
}