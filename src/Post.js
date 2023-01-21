import { Avatar } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./Styles/Post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

export default forwardRef(function Post({ name, description, message, photoURL }, ref) {
    const [likes, setlikes] = useState(0)
    const [comets, setcomets] = useState(false)
    const [first, setfirst] = useState("")
    const [arrr, setarrr] = useState([])

    const likeHandler = (e) => {
        setlikes(likes + 1)
        console.log(likes)
    }

    const cometHandler = (e) => {
        setcomets(!comets)
        console.log(comets)
    }

    const submitComet = (e) => {
        e.preventDefault()
        setcomets(!comets)
        setarrr([...arrr, first])
        setfirst("")
        console.log(arrr)
    }

    return (
        <>
            <div className='posts' ref={ref}>
                <div className='post__header'>
                    <div className='post__headerLeft'>
                        <Avatar src={photoURL} />
                        <div className='post_profile_details'>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className='post__body'>
                    <p>{message}</p>
                </div>
                <div className='post__footer'>
                    <div className="post__footer__options" onClick={likeHandler}>
                        <ThumbUpAltIcon />
                        <span>{likes > 0 ? likes : ""}Like</span>
                    </div>
                    <div className="post__footer__options" onClick={cometHandler}>
                        <CommentIcon />
                        <span>Comment</span>
                    </div>
                    <div className="post__footer__options">
                        <ShareIcon />
                        <span>Share</span>
                    </div>
                    <div className="post__footer__options">
                        <SendIcon />
                        <span>Send</span>
                    </div>
                </div>
                <div>
                    {arrr.map((item, index) => {
                        return (<div key={index}><h5>{item}</h5></div>)
                    })}
                </div>
                {comets && <form onSubmit={submitComet}>
                    <input type="text" placeholder='Start a comment' value={first} onChange={e => setfirst(e.target.value)} />
                    <input type="submit" />
                </form>}

            </div>
        </>
    )
}
)