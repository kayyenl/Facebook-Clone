import { Avatar, useRadioGroup } from '@mui/material';
import React, {useState}from 'react';
import ProfileFace from '../assets/luffy-face.png'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(input)

        //some database things
        await addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            uid: user.uid
        })

        setInput("")
        setImageUrl("")
    }
    
    return (
        <div className='message__sender'>
            <div className="message__sender--top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    className='message__sender--input' placeholder={`What's on your mind, ${user.displayName}? ` }
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}/>

                    <input 
                    placeholder={`Image URL (Optional)`}
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}/>

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
