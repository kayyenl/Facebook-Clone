import React from 'react';
import Post from '../components/Post';
import StoryReel from '../components/StoryReel';
import MessageSender from './MessageSender';
import ProfileFace from '../assets/luffy-face.png'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post profilePic={ProfileFace}
            username="Monkey D. Luffy"
            message="The straw hats have been formed!"
            timestamp="12:55 PM" 
            image="https://sportshub.cbsistatic.com/i/2021/08/09/f9f487fc-3c32-40f6-ba90-dc1ce083c962/one-piece-anime-opening-update-new-straw-hats-jimbei-1274612.jpg"
            />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
