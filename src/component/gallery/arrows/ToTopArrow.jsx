import React from 'react'
import {FaChevronUp} from 'react-icons/fa';
import './arrow-style.css'

const ToTopArrow = ({onToTopClick}) => <footer>
        <FaChevronUp className="arrow arrow-horizontal"
                 onClick={onToTopClick}/>
    </footer>;

export default ToTopArrow;
