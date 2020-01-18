import styled from 'styled-components';
import React from 'react'

const Thumbnail = ({imageSrc, active, onClick}) => {
    const styles = {
        width: '160px',
        height: '90px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        backgroundImage: `url(${imageSrc})`,
        filter: `${active ? 'saturate(100%)' : 'saturate(0%)'}`
    };
    return (
        <div key={imageSrc} style={styles} onClick={onClick}/>
    );
};

export default Thumbnail;
