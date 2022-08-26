import { Avatar } from '@mui/material';
import React from 'react';

const Comment = ({comment, userPic, timestamp, username}) => {
    return (
        <div className='single__comment'>
            <div className="comment__content">
                <Avatar src={userPic} 
                className="comment__avatar"/>
                <div className="comment__words">
                    <h4 className='comment__username'>{username}:</h4>
                    <p>{comment}</p>
                </div>
            </div>
            <div className="comment__time">
                <div className="comment__time">
                    on {timestamp.toDate().toUTCString()}
                </div>
            </div>
        </div>
    );
}

export default Comment;
  