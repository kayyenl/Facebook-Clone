import { Avatar } from '@mui/material';
import React from 'react';

const Story = ({image, profileSrc, title}) => {
    return (
        <div className='story'>
            <div className="story__image--placeholder" style={{backgroundImage: `url(${image})`, filter: "brightness(60%)"}}></div>
            <Avatar className='story__avatar' src={profileSrc} />
            <h4>{title}</h4>
        </div>
    );
}

export default Story;
