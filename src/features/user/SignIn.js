import React, {useEffect, useState} from "react"
import "./User.css"
import { TextField } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {hideSignIn, selectOpenSingIn} from "./userSlice";
import Button from "@material-ui/core/Button";

export const SignIn = () => {
    const openSignIn = useSelector(selectOpenSingIn)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        const signIn = document.querySelector('.signIn')
        if(openSignIn){
            signIn.style.display = 'flex'
            signIn.classList.remove('hide')
            signIn.classList.add('show')
        }
        else{
            if(signIn.classList.contains('show')){
                signIn.classList.remove('show')
            }
            signIn.classList.add('hide')
            setTimeout(()=>{
                signIn.style.display = 'none'
            }, 300)
        }
    },[openSignIn])

    return(
        <div className={'user signIn'} onClick={(event)=>{
            event.preventDefault();
            if (event.target === event.currentTarget) {
                dispatch(hideSignIn())
            }
        }}>
            <form className={'user__form'}>
                <h2 className={'user__form__title'}>Sign In</h2>
                <TextField className={'user__form__input user__form__email'} id="outlined-basic" label="Email"
                           value={email}
                           onChange={e=>setEmail(e.target.value)}
                />
                <TextField type={'password'} className={'user__form__input user__form__password'} id="outlined-basic" label="Password"
                           value={password}
                           onChange={e=>setPassword(e.target.value)}
                />
                <Button type={'submit'} className={'user__form__btn'} variant="contained">
                    Valid
                </Button>
            </form>
        </div>
    )
}