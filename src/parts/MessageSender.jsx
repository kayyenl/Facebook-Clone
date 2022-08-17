import { Avatar } from '@mui/material';
import React from 'react';
import ProfileFace from '../assets/luffy-face.png'

const MessageSender = () => {
    return (
        <div className='message__sender'>
            <div className="message__sender--top">
                <Avatar src={ProfileFace} />
                <form>
                    <input className='message__sender--input' placeholder={"What's on your mind?"} />
                    <input placeholder={`Image URL (Optional)`}/>
                    <button onClick={handleSubmit} type='submit'></button>
                </form>
            </div>
            <div className="message__sender--bottom"></div>
        </div>
    );
}

export default MessageSender;
