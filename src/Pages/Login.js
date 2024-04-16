import React, { Fragment } from "react";
import classes from './Login.module.css'
import { useRef, useContext } from "react";
import AuthContext from "../store/auth-context";
import {useNavigate} from 'react-router-dom'

const Login =props=>{
    const navigate =useNavigate();
    const authCtx=useContext(AuthContext)
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const onAddUserHandler=event=>{
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3Xrnzk0TTuA1haVoAVWYDaK2TtED9yTk',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.ok){
                return res.json();
            }else{
                return res.json().then(data=>{
                    let errorMessage = 'Authentication Failed!'
                    if(data && data.error && data.error.message){
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage)
                    throw new Error(errorMessage)
                })
            }
        }).then(data=>{
            authCtx.login(data.idToken)
            navigate('/')
        }).catch(err=>{
            alert(err.message)
        })
    }

    return(
        <Fragment>
            <form onSubmit={onAddUserHandler} className={classes.control}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" ref={emailInputRef}></input>
                <label htmlFor="pass">Password:</label>
                <input id="pass" type="password" ref={passwordInputRef}></input>
                <button type="submit">Login</button>
            </form>
        </Fragment>
    )
}

export default Login;