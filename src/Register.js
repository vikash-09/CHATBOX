import React, {useState, useContext} from 'react';
import './Login.css'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginContext } from './LoginContext';
import { Link } from 'react-router-dom';

export default function Register() {
    const {setUserLogin, setUserName} = useContext(LoginContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = () =>
    {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUserName(email.substring(0,[4]));
    setUserLogin(true);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    };

  return (
    <div className='login'>
        <div className="form">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='Enter Your Email Here'
                value={email}
                onChange={(e)=> {setEmail(e.target.value)}}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' placeholder='Enter Your Password'
                value={password}
                onChange={(e)=> {setPassword(e.target.value)}}/>
            </div>

            <button id='submit-btn' onClick={signUp()}>
               Sign Up 
            </button>

            <p>
                Already Have An Account?
            </p>

             <Link to="/login">
            <span>Sign In</span>
            </Link> 

        </div>
    </div>
  )
}
