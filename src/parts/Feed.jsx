import React from 'react';
import Post from '../components/Post';
import StoryReel from '../components/StoryReel';
import MessageSender from './MessageSender';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
