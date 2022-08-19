import Reac, { useState, useEffect } from 'react';
import Post from '../components/Post';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import ProfileFace from '../assets/luffy-face.png';
import db from '../firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';

const Feed = () => {
    const [posts, setPosts] = useState([])

    // onSnapshot calls everytime documents' content changes, real time connection to the database in 3 lines of code.
    useEffect(() => {
        onSnapshot(doc(db, "posts"), (snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc})))
        )
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post profilePic={post.profilePic} key={post.id}
                username={post.username} 
                message={post.message}
                timestamp={post.timestamp} />
            ))}

            <Post profilePic={ProfileFace}
            username="Monkey D. Luffy"
            message="The straw hats have been formed!"
            timestamp="12:55 PM" 
            image="https://sportshub.cbsistatic.com/i/2021/08/09/f9f487fc-3c32-40f6-ba90-dc1ce083c962/one-piece-anime-opening-update-new-straw-hats-jimbei-1274612.jpg"
            />

            <Post profilePic={ProfileFace}
            username="Shanks"
            message="Put your life on the life."
            timestamp="12:55 PM" 
            />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
