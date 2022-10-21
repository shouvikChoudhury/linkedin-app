import React, { useEffect } from 'react';
import { loginuser, logoutuser, selectuser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';
import { useDispatch, useSelector } from 'react-redux'
import { authen } from './firebase';

function App() {
  const user = useSelector(selectuser)
  console.log(user)
  const dispatch = useDispatch()
  useEffect(() => {
    authen.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(loginuser({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else {
        dispatch(logoutuser())
      }
    })
  }, [])

  return (
    <>
      {
        user ? (
          <div className="app_wrapper">
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>
        ) : (<Login />)
      }
    </>
  );
}

export default App;
