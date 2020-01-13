import styled from "styled-components";
import {GiCalendar} from "react-icons/gi";
import React, {Component} from 'react';
import MenuIcon from "./MenuIcon";
import colors from "../../constant/style";
import { DatePicker, RangePicker, theme } from 'react-trip-date';

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

export default class CalendarIcon extends MenuIcon {
    state = {
        enabled: false
    };

    handleCalendarIconClick = () => {
        this.props.onClick();
        this.setState({enabled: !this.state.enabled});
    };

    render() {
        return (
            <Fragment onClick={this.handleCalendarIconClick}>
                <GiCalendar className="icon" style={this.state.enabled && {color: colors.calendar}}/>
            </Fragment>
        );
    }
}