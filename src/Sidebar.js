import React from 'react'
import './Styles/Sidebar.css'
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice';

export default function Sidebar() {
    const user = useSelector(selectuser)
    return (
        <div className='sidebar'>
            <div className='sidebar__profile'>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="" />
                <div className='profile__details'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                    <p>Frontend Developer</p>
                </div>
                <div className='profile__stats'>
                    <span>Who viewed your profile</span>
                    <span className='stat__number'>20</span>
                </div>
                <div className='profile__stats'>
                    <span>Connection<br /><b>Grow Your Network</b></span>
                    <span className='stat__number'>150</span>
                </div>
            </div>
            <div className='sidebar__recent'>
                <p>Recent</p>
                <p className='hash'><span>#</span>reactjs</p>
                <p className='hash'><span>#</span>redux-toolkit</p>
                <p className='hash'><span>#</span>javascript</p>
                <p className='hash'><span>#</span>css</p>
                <p className='hash'><span>#</span>html</p>
                <p className='hash'><span>#</span>firebase</p>
                <p className='hash'><span>#</span>material-ui</p>
            </div>
        </div>
    )
}
