import React, {Component} from 'react';
import styled from 'styled-components';
import {AiOutlineHome, AiTwotoneShopping} from 'react-icons/ai';
import {GiCycling, GiElephant, GiCalendar} from 'react-icons/gi';

const Fragment = styled.a`
    ul {
        list-style-type: none
    }
    
    .icon-item {
        cursor: pointer;
        display: flex;
        width: 60px;
        height: 60px;
        color: white
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
                <ul>
                    <li><AiOutlineHome className="icon-item"/></li>
                    <li><GiCycling className="icon-item"/></li>
                    <li><GiElephant className="icon-item"/></li>
                    <li><AiTwotoneShopping className="icon-item"/></li>
                    <li><GiCalendar className="icon-item"/></li>
                </ul>
            </Fragment>
        )
    }
}
