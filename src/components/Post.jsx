import { Avatar } from '@mui/material';
import React from 'react';

const Post = ({profilePic, image, username, timestamp, message}) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic}
                className='post__avatar' />

                <div className="post__top--info">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>

                <div className="post__bottom">
                    <p>{message}</p>
                </div>

                <div className="post__image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Post;
