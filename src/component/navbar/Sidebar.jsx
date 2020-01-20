import React, {Component} from 'react';
import styled from 'styled-components';
import categories from "../../constant/categories";
import Icon from "./MenuIcon";
import CalendarIcon from "./CalendarIcon";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './calendar.css';
import {MdClear} from 'react-icons/md';
import {AiOutlineCalendar} from 'react-icons/ai';

const Fragment = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 999;
    justify-content: center;
    top: 25%;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    background-color: transparent;

    ul {
        list-style-type: none;
        display:inline;
    }
`;

const CancelIcon = styled(MdClear)`
    fill: ${({theme}) => (theme.secondary)};
    width: 20px;
    height: 20px;
    
    &:hover {
        fill: ${({theme}) => (theme.tertiary)};
         transition: 0.7s ease-in-out;
    }
`;

const CalendarOpenIcon = styled(AiOutlineCalendar)`
    fill: ${({theme}) => (theme.secondary)};
    width: 20px;
    height: 20px;
    
    &:hover {
        fill: ${({theme}) => (theme.tertiary)};
         transition: 0.7s ease-in-out;
    }
`;

export default class Sidebar extends Component {

    state = {
        showCalendar: false,
        dateRange: [null, null]
    };

    handleDateRangeChange = dateRange => {
        this.props.onDateRangeChange(dateRange);
        this.setState({
            dateRange: dateRange,
            showCalendar: this.state.showCalendar
        })
    };

    handleCalendarIconClick = () => {
        this.setState({
            showCalendar: !this.state.showCalendar
        });
    };

    render() {
        return (
            <Fragment>
                <ul>
                    {Object.keys(categories).map(categoryName => (
                            <li><Icon categoryName={categoryName} onClick={this.props.onClick}/></li>
                        )
                    )}
                    <li><CalendarIcon onClick={this.handleCalendarIconClick}/></li>
                </ul>

                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeaveTimeout={0}
                        transitionAppear={true} transitionEnter={true} transitionLeave={true}>

                        {this.state.showCalendar &&
                        <DateRangePicker
                            calendarClassName="date-range-picker-cus"
                            className="date-range-picker-cus"
                            onChange={this.handleDateRangeChange}
                            clearIcon={<CancelIcon/>}
                            calendarIcon={<CalendarOpenIcon/>}
                            value={this.state.dateRange}/>
                        }

                    </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
