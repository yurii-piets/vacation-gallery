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
`;

const Thumbnail = ({thumbnail, imageSrc, active, onClick}) => {
    const styles = {
        backgroundImage: `url(${thumbnail || imageSrc})`,
        filter: `${active ? 'saturate(100%)' : 'saturate(0%)'}`,
    };
    return (
        <Fragment key={imageSrc} src={imageSrc} style={styles} onClick={onClick}/>
    );
};

export default Thumbnail;
