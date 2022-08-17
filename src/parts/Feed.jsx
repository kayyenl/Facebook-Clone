import React from 'react';
import StoryReel from '../components/StoryReel';
import MessageSender from './MessageSender';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
        </div>
    );
}

export default Feed;
