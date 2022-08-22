import Reac, { useState, useEffect } from 'react';
import Post from '../components/Post';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import ProfileFace from '../assets/luffy-face.png';
import db from '../firebase';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';

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
                <Post profilePic={post.data.profilePic} key={post.data.id}
                username={post.data.username} 
                message={post.data.message}
                timestamp={post.data.timestamp}
                image={post.data.image}
                identity={post.id} />
            ))}

            {/* <Post profilePic={ProfileFace}
            username="Monkey D. Luffy"
            message="The straw hats have been formed!"
            image="https://sportshub.cbsistatic.com/i/2021/08/09/f9f487fc-3c32-40f6-ba90-dc1ce083c962/one-piece-anime-opening-update-new-straw-hats-jimbei-1274612.jpg"
            />

            <Post profilePic={ProfileFace}
            username="Shanks"
            message="Put your life on the life."
            /> */}
        </div>
    );
}

export default Feed;
