import React, { useState } from 'react'
import { loginuser } from './features/userSlice'
import { authen } from './firebase'
import "./Styles/Login.css"
import { useDispatch } from 'react-redux'

export default function Login() {
    const [signup, setsignup] = useState(false)
    const [name, setname] = useState("")
    const [photoURL, setphotoURL] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const register = (e) => {
        e.preventDefault()
        if (!name && !photoURL && !email && !password) {

            alert("Required field is empty!")
        }

        authen.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                dispatch(loginuser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: photoURL
                }))
            })
        }).catch(error => alert(error))

        setname("")
        setphotoURL("")
        setemail("")
        setpassword("")
    }
    const signIn = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert("Required field is empty!")
        }

        authen.signInWithEmailAndPassword(email, password).then((user) => {

            dispatch(loginuser({
                email: user.user.email,
                uid: user.user.uid,
                displayName: user.user.displayName,
                photoURL: user.user.photoURL
            }))
        }).catch(error => alert(error))
        setemail("")
        setpassword("")
    }
    return (
        <div className="loginScreen">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo" />
            {
                signup ? (
                    <form onSubmit={register}>
                        <input type="text" placeholder='Enter your name' value={name} onChange={e => setname(e.target.value)} />
                        <input type="text" placeholder='Enter your photoURL' value={photoURL} onChange={e => setphotoURL(e.target.value)} />
                        <input type="email" placeholder='Enter your email' value={email} onChange={e => setemail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={e => setpassword(e.target.value)} />
                        <input type="submit" value="Sign Up" />
                        <h4>Already a member ? <span onClick={e => setsignup(false)}>Login Here</span></h4>
                    </form>
                ) : (
                    <form onSubmit={signIn}>
                        <input type="email" placeholder='Enter your email' value={email} onChange={e => setemail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={e => setpassword(e.target.value)} />
                        <input type="submit" value="Sign Up" />
                        <h4>Not a member ? <span onClick={e => setsignup(true)}>Register Here</span></h4>
                    </form>
                )
            }
        </div>
    )
}
