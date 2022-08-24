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
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Comment from './Comment';


const Post = ({profilePic, image, username, timestamp, message, identity, auth, likeArray, commentArray}) => {
    const [{ user }, dispatch] = useStateValue()
    const postRef = doc(db, "posts", auth) 
    const [isLike, setIsLike] = useState(likeArray.includes(user.uid))
    const [isComment, setIsComment] = useState(false)
    const [comment, setComment] = useState("")
    const [commentShow, setCommentShow] = useState(false)


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

    async function handleSubmit(e) {
        e.preventDefault()
        const dateString = new Date()
        if (comment !== "") {
            setIsComment(false)
            await updateDoc(postRef, {
                commentArray: arrayUnion({
                    details: {
                        userPic: user.photoURL,
                        username: user.displayName,
                        comment: comment,
                        created: dateString,}
                })
            })
            setComment("")
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
                    (
                    <div className='post__details--tray'>
                    <div className='like__details'>
                        <ThumbUpIcon style={{color: "white", backgroundColor: "#2e81f4", fontSize:"18px", borderRadius: "99px", border: "1px solid #2e81f4", padding: "2px"}} /> 
                        <p className='tray__number'>{likeArray.length}</p> 
                    </div>
                    <div className="comment__details">
                        <ChatBubbleIcon style={{color: "white", backgroundColor: "orange", fontSize:"18px", borderRadius: "99px", border: "1px solid orange", padding: "2px"}} /> 
                        <p className='tray__number'>{commentArray.length}</p> 
                    </div>
                    </div>
                    ) :
                    <></> }
                </div>

                <div className="post__image">
                    <img src={image} alt="" />
                </div>

                <div className="post__options">
                    <div className={`post__option ${isLike ? 'post__option--highlight' : ''}`} 
                    onClick={handleLike}>
                        <ThumbUpIcon />
                        <p>Like</p>
                    </div>
                    
                    <div className={`post__option ${isComment ? 'post__option--highlight' : ''}`}
                    onClick={() => setIsComment(!isComment)}>
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

                {isComment ?  
                <div className="post__comments">
                    <Avatar src={user.photoURL} />
                    <form className='post__form'>
                        <input className='post__comment--sender'
                        placeholder='Say what you want!'
                        onChange={(e) => setComment(e.target.value)}
                        value={comment} />
                        <button className='hidden__button'
                        onClick={(e) => handleSubmit(e)}></button>
                    </form>
                </div> : <></>}

                {commentArray.length > 0 && commentShow ? 
                commentArray.map((comment) => (
                    <>
                    <Comment 
                    comment={comment.details.comment}
                    userPic={user.photoURL}
                    timestamp={comment.details.created}
                    username={comment.details.username}
                    />
                    </>
                )) : <></>}
        </div>
    );
}

export default Post;
