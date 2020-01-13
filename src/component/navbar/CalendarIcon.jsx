import styled from "styled-components";
import {GiCalendar} from "react-icons/gi";
import React, {Component} from 'react';

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

export default class CalendarIcon extends Component {

    render() {
        return (
            <Fragment>
                <GiCalendar className="icon"/>
            </Fragment>
        );
    }
}