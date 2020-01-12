import React, {Component} from 'react';
import styled from 'styled-components';
import {AiOutlineHome, AiTwotoneShopping} from 'react-icons/ai';
import {GiCycling, GiElephant, GiCalendar} from 'react-icons/gi';

const Fragment = styled.div`
    z-index: 10;
    margin-top: 5%
    position: absolute;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    height: 300px; //todo remove me pls
    background-color: transparent;

    ul {
        list-style-type: none;
        display:inline;
    }
    
    .icon-item {
        cursor: pointer;
        width: 60px;
        height: 60px;
        color: white;
        background-color: transparent;
        margin: 50px 0 0 70px
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
