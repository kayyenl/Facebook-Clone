import { Avatar } from '@mui/material';
import React, {useState}from 'react';
import ProfileFace from '../assets/luffy-face.png'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        console.log(input)
    }
    return (
        <div className='message__sender'>
            <div className="message__sender--top">
                <Avatar src={ProfileFace} />
                <form>
                    <input className='message__sender--input' placeholder={"What's on your mind?"} value={input} onChange={(event) => setInput(event.target.value)}/>
                    <input placeholder={`Image URL (Optional)`}/>
                    <button onClick={handleSubmit} type='submit'></button>
                </form>
            </div>
            <div className="message__sender--bottom">
                <div className="message__sender--option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="message__sender--option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="message__sender--option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
