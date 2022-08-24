import { Avatar } from '@mui/material';
import React from 'react';

const Comment = ({comment, userPic, timestamp, username}) => {
    return (
        <div className='single__comment'>
            <Avatar src={userPic} 
            className="comment__avatar"/>
            <div className="comment__words">
                <h4>{username}</h4>
                <p className='comment__details'>{comment}</p>
            </div>
        </div>
    );
}

export default Comment;
