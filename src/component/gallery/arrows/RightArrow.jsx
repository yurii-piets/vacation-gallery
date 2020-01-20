import {MdChevronRight} from 'react-icons/md';
import React from 'react'
import './arrow-style.css'

const RightArrow = ({handleNextSlide, coolButtons}) => {
    const className = 'arrow arrow-vertical arrow-right' + (coolButtons ? ' cool-buttons' : '');
    return (<MdChevronRight className={className} onClick={handleNextSlide}/>);
};

export default RightArrow;

