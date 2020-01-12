import React, {Component} from 'react';
import styled from 'styled-components';
import {AiOutlineHome, AiTwotoneShopping} from 'react-icons/ai';
import {GiCycling, GiElephant, GiCalendar} from 'react-icons/gi';

const Fragment = styled.p`
    ul {
        list-style-type: none;
        display:inline;
    }
    
    .icon-item {
        cursor: pointer;
        width: 60px;
        height: 60px;
        color: white;
    }
    
    .icon-item:hover {
        color: ${({theme}) => (theme.primary)};
        transition: 0.7s ease-in-out;
    }
`;

export default class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <AiOutlineHome className="icon-item"/>
                <GiCycling className="icon-item"/>
                <GiElephant className="icon-item"/>
                <AiTwotoneShopping className="icon-item"/>
                <GiCalendar className="icon-item"/>
            </Fragment>
        )
    }
}
