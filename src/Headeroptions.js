import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice';
import { authen } from './firebase';

export default function Headeroptions({ Icon, title, avatar }) {
    const user = useSelector(selectuser)
    return (
        <div className="header__options">
            {Icon && <Icon />}
            {avatar && <Avatar src={user.photoURL} />}

            <span>{title}
                {avatar &&
                    <span className='signout' onClick={e => authen.signOut()}>
                        <a>Sign Out</a>
                    </span>}
            </span>

        </div>
    )
}
