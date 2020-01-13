import React, {Component} from 'react';
import styled from 'styled-components';
import categories from "../../constant/categories";
import Icon from "./MenuIcon";
import CalendarIcon from "./CalendarIcon";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const Fragment = styled.div`
    z-index: 10;
    position: fixed;
    margin-top: -23em;
    top: 50%;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    background-color: transparent;

    ul {
        list-style-type: none;
        display:inline;
    }
`;

const RangePickerFragment = styled.div`
        position: relative;
`;

export default class Sidebar extends Component {

    state = {
        showCalendar: false,
        dateRange: [new Date(), new Date()]
    };

    handleDateRangeChange = dateRange => {
        this.props.onDateRangeChange(dateRange);
        this.setState({dateRange})
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

                <RangePickerFragment>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeaveTimeout={0}
                        transitionAppear={true} transitionEnter={true} transitionLeave={true}>

                        {this.state.showCalendar &&
                        <DateRangePicker onChange={this.handleDateRangeChange} value={this.state.dateRange}/>}

                    </ReactCSSTransitionGroup>
                </RangePickerFragment>
            </Fragment>
        )
    }
}
