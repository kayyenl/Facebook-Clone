import { Avatar, useRadioGroup } from '@mui/material';
import React, {useState}from 'react';
import ProfileFace from '../assets/luffy-face.png'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PhotoIcon from '@mui/icons-material/Photo';

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isPhoto, setIsPhoto] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [isDrag, setIsDrag] = useState(false)


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
            uid: user.uid,
            likeArray: [],
            commentArray: [],
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
                {isPhoto ? 
                    (<div className="message__sender--option" onClick={() => setIsPhoto(!isPhoto)} 
                    style={{border: "4px solid green", transition: "all 300ms ease", borderRadius:"12px"}}
                    >
                        <PhotoLibraryIcon style={{color: "green"}} />
                        <h3 style={{color: "green"}}>Photo/Video</h3>
                    </div>) :  
                    (<div className="message__sender--option" onClick={() => setIsPhoto(!isPhoto)}
                    >
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                    </div>)
                }
               
                <div className="message__sender--option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

            {isPhoto ? (<div className="message__sender--dragdrop" 
            draggable="true"
            onDragEnter={() => setIsDrag(true)} 
            onDragLeave={() => setIsDrag(false)} 
            onDrop={() => setIsDrag(false)}>
                {!isDrag ? 
                (<div className="message__sender--paddedbox">
                    <FileUploadIcon style={{color: "gray", fontSize:"38px"}}/>
                    <span className='stylish__span'>Drag an image here!</span>
                </div>) : 
                (<div className="message__sender--paddedbox" style={{backgroundColor: "darkgray"}}>
                <PhotoIcon style={{color: "gray", fontSize:"38px"}}/>
                <span className='stylish__span'>Drop the Image!</span>
            </div>)}
            </div>) : <></>}
        </div>
    );
}

export default MessageSender;
