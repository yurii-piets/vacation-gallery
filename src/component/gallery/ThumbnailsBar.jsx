import React from 'react'
import Thumbnail from "./Thumbnail";
import styled from 'styled-components';

const Fragment = styled.div`
    display: inline-block;
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
