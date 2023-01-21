import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./Styles/Feed.css"
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice';
import FlipMove from 'react-flip-move'

export default function Feed() {
    const user = useSelector(selectuser)
    const [post, setPost] = useState([])
    const [input, setInput] = useState("")
    const submitPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: user.displayName,
            description: 'Frontend Developer',
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setInput("")
    }

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        console.log(post.id)
    }, [])

    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className='feed__form'>
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} />
                        <input type="submit" />
                    </form>
                </div>
                <div className="feed__options">
                    <div className="option">
                        <PhotoIcon style={{ color: '#70b5f9' }} />
                        <span>Photo</span>
                    </div>
                    <div className="option">
                        <YouTubeIcon style={{ color: '#7fc15e' }} />
                        <span>Video</span>
                    </div>
                    <div className="option">
                        <TodayIcon style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>
                    <div className="option">
                        <AssignmentIcon style={{ color: '#fc9295' }} />
                        <span>Write Article</span>
                    </div>
                </div>
            </div>

            <FlipMove>
                {
                    post.map(({ id, data }) => {
                        return <Post key={id} name={data.name} description={data.description}
                            message={data.message}
                            photoURL={data.photoURL} />
                    })
                }
            </FlipMove>

        </div>
    )
}
