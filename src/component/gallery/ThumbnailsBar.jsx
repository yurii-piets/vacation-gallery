import React from 'react'
import Thumbnail from "./Thumbnail";
import styled from 'styled-components';

const Fragment = styled.div`
    display: inline-block;
    
    // scrollbar settings 
    overflow: auto;
    max-height: 80vh;
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
        border-radius: 50%;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar {
        width: 6px;
        border-radius: 50%;
        background-color: #F5F5F5;
     }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3);
        background-color: #555;
    }
`;

const ThumbnailsBar = ({photos, activePhotoIndex, onThumbnailSelect}) => {
    return (
        <Fragment>{photos.map(photo => {
                const photoIndex = photos.indexOf(photo);
                return <Thumbnail imageSrc={photo.src} active={activePhotoIndex === photoIndex}
                                  onClick={() => onThumbnailSelect(photoIndex)}/>
            }
        )}
        </Fragment>
    );
};

export default ThumbnailsBar;
