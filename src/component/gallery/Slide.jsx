import React from 'react'
import styled from "styled-components";

const Fragment = styled.a`
    display: inline-block;
    height: 80%;
    width: 80%;
`;

const Slide = ({photo}) => {
    const styles = {
        backgroundImage: `url(${photo.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        margin: '5px',
        padding: '5px',
        display: 'inline-block',
        'align-items': 'center',
        'justify-content': 'center'
    };
    return <Fragment style={styles}/>
};

export default Slide
