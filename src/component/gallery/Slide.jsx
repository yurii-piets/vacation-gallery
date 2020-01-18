import React from 'react'
import styled from "styled-components";

const Fragment = styled.a`
    display: inline-block;
    height: 89%;
    width: 89%;
    position: relative;
`;

const Slide = ({photo, children}) => {
    const styles = {
        backgroundImage: `url(${photo.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        margin: '5px',
        display: 'inline-block',
        'align-items': 'center',
        'justify-content': 'center'
    };
    return (
        <Fragment style={styles}>
            {children}
        </Fragment>
    );
};

export default Slide
