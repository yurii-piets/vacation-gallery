import {MdChevronLeft} from 'react-icons/md';
import React from 'react'
import './arrow-style.css'

const LeftArrow = ({handlePrevSlide, coolButtons}) => {
    const className = 'arrow arrow-vertical arrow-left' + (coolButtons ? ' cool-buttons' : '');
    return (<MdChevronLeft className={className} onClick={handlePrevSlide}/>);
};

export default LeftArrow;
