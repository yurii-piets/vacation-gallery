import React, {Component} from 'react';
import styled from 'styled-components';
import category_colors from "../../constant/category_style";
import Icon from "./Icon";

const Fragment = styled.div`
    z-index: 10;
    top: 5%
    position: absolute;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    height: 300px; //todo remove me pls
    background-color: transparent;

    ul {
        list-style-type: none;
        display:inline;
    }
`;

export default class Sidebar extends Component {
    render() {
        console.log(Object.keys(category_colors));
        return (
            <Fragment>
                <ul>
                    {Object.keys(category_colors).map(categoryName => (
                            <li><Icon categoryName={categoryName}/></li>
                        )
                    )}
                </ul>
            </Fragment>
        )
    }
}
