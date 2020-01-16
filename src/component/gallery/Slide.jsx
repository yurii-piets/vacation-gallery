import React from 'react'
import styled from "styled-components";

const Fragment = styled.a`
    display: inline-block;
    height: 100%;
    width: 100%;
`;

const Slide = photo => {
    const styles = {
        backgroundImage: `url(${photo.photo.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    };
    return <Fragment style={styles}/>
};

export default Slide
