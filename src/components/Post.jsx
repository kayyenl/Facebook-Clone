import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { doc, deleteDoc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import BlockIcon from '@mui/icons-material/Block';


const Post = ({profilePic, image, username, timestamp, message, identity, auth, likeArray}) => {
    const [{ user }, dispatch] = useStateValue()
    const postRef = doc(db, "posts", auth) 
    const [isLike, setIsLike] = useState(likeArray.includes(user.uid))

    async function deletePost() {   
        if (user.uid === identity) {
            await deleteDoc(postRef)
        }
    }

    async function handleLike() {
        setIsLike(!isLike)
        if (isLike) {
            await updateDoc(postRef, {
                likeArray: arrayRemove(user.uid)
            })
        } else {
            await updateDoc(postRef, {
                likeArray: arrayUnion(user.uid)
            })
        }
    }
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic}
                className='post__avatar' />

                <div className="post__top--info">
                    <h3>{username}</h3>
                    {timestamp ? 
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p> :
                        <p>Loading...</p>
                    }
                </div>
            </div>

                <div className="post__bottom">
                    <p style={{marginBottom: "12px"}}>{message}</p>
                    {likeArray.length > 0 ? 
                    (<div className='like__details'>
                    <ThumbUpIcon style={{color: "white", backgroundColor: "#2e81f4", fontSize:"18px", borderRadius: "99px", border: "1px solid #2e81f4", padding: "2px"}} /> 
                    <p className='like__number'>{likeArray.length}</p> 
                    </div>) :
                    <></> }
                </div>

                <div className="post__image">
                    <img src={image} alt="" />
                </div>

                <div className="post__options">
                    <div className={`post__option ${isLike ? 'post__option--like' : ''}`} 
                    onClick={handleLike}>
                        <ThumbUpIcon />
                        <p>Like</p>
                    </div>
                    
                    <div className="post__option">
                        <ChatBubbleOutlineIcon />
                        <p>Comment</p>
                    </div>
                    { user.uid === identity ? 
                        (<div className="post__option" onClick={deletePost}>
                            <DeleteIcon />
                            <p>Delete</p>
                        </div>) : (<div className="post__option" onClick={deletePost} style={{cursor: "not-allowed"}}>
                            <BlockIcon style={{color: "red"}}/>
                        </div>)
                    }
                </div>
        </div>
    );
}

export default Post;
