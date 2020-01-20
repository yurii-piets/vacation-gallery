import React from 'react'
import styled from 'styled-components'
import LazyLoadBackgroundImage from "../LazyLoadBackgroundImage";

const Fragment = styled(LazyLoadBackgroundImage)`
    width: 160px;
    height: 90px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 60%;
    margin: 5px;
    padding: 5px;
    filter: ${({active}) => (active) ? 'saturate(100%)' : 'saturate(0%)'};
`;

const Thumbnail = ({src, active, onClick}) => {
    return (
        <Fragment key={src} src={src} active={active} onClick={onClick}/>
    );
};

export default Thumbnail;
