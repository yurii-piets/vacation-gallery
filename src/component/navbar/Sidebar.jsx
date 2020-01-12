import React, {Component} from 'react';
import styled from 'styled-components';
import categories from "../../constant/categories";
import Icon from "./MenuIcon";

const Fragment = styled.div`
    z-index: 10;
    position: fixed;
    margin-top: -19em;
    top: 50%;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    background-color: transparent;

    ul {
        list-style-type: none;
        display:inline;
    }
`;

export default class Sidebar extends Component {

    render() {
        return (
            <Fragment>
                <ul>
                    {Object.keys(categories).map(categoryName => (
                            <li><Icon categoryName={categoryName} onClick={this.props.onClick}/></li>
                        )
                    )}
                </ul>
            </Fragment>
        )
    }
}
