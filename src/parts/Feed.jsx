import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import db from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Feed = () => {
    const [posts, setPosts] = useState([])

    // onSnapshot calls everytime documents' content changes, real time connection to the database in 3 lines of code.
    useEffect(() => {
        const sortCollection = collection(db, "posts")
        const q = query(sortCollection, orderBy("timestamp", "desc"))
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        })
    }, [])

    return (
        <div className='feed'> 
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post profilePic={post.data.profilePic} 
                key={post.id}
                auth={post.id}
                username={post.data.username} 
                message={post.data.message}
                timestamp={post.data.timestamp}
                image={post.data.image}
                identity={post.data.uid}
                likeArray={post.data.likeArray}
                commentArray={post.data.commentArray}
                 />
            ))}

        </div>
    );
}

export default Feed;
