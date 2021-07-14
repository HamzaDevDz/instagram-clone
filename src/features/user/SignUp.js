import React, {useEffect, useState} from 'react'
import "./User.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, hideSignUp, logOut, selectOpenSignUp, selectUser} from "./userSlice";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {auth} from "../firebase/Firebase";

export const SignUp = () => {
    const openSignUp = useSelector(selectOpenSignUp)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector(selectUser)
    useEffect(() => {
        const signUp = document.querySelector('.signUp')
        if(openSignUp){
            signUp.style.display = 'flex'
            signUp.classList.remove('hide')
            signUp.classList.add('show')
        }
        else{
            if(signUp.classList.contains('show')){
                signUp.classList.remove('show')
            }
            signUp.classList.add('hide')
            setTimeout(()=>{
                signUp.style.display = 'none'
            }, 300)
        }

    },[openSignUp])

    useEffect(()=>{
        // AUTHENTIFICATION LISTNER
        const unsubsribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                //    User has logged in
                dispatch(fetchUser(authUser))
            }
            else{
                //    User has logged out
                dispatch(logOut())
            }
        })
        return () => {
            // perform some cleanup actions
            unsubsribe()
        }
    }, [user, username])
    const signUp = (event) => {
        auth.createUserWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))
            .then((authUser)=>{
                setUsername('')
                setEmail('')
                setPassword('')
                dispatch(hideSignUp())
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
    }

    return(
        <div className={'user signUp'} onClick={(event)=>{
            event.preventDefault();
            if (event.target === event.currentTarget) {
                dispatch(hideSignUp())
            }
        }}>
            <form className={'user__form'}>
                <h2 className={'user__form__title'}>Sign Up</h2>
                <TextField className={'user__form__input user__form__username'} id="outlined-basic" label="Username"
                           value={username}
                           onChange={e=>setUsername(e.target.value)}
                />
                <TextField className={'user__form__input user__form__email'} id="outlined-basic" label="Email"
                           value={email}
                           onChange={e=>setEmail(e.target.value)}
                />
                <TextField type={'password'} className={'user__form__input user__form__password'} id="outlined-basic" label="Password"
                           value={password}
                           onChange={e=>setPassword(e.target.value)}
                />
                <Button type={'submit'} className={'user__form__btn'} variant="contained"
                        onClick={signUp}
                >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}