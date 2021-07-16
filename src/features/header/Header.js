import React from "react"
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {selectUser, showSignUp} from "../user/userSlice";
import Button from "@material-ui/core/Button"
import {showSignIn} from "../user/userSlice";
import {auth} from "../firebase/Firebase";


export const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    return(
        <div className={'header'}>
            <img className={'header__img'} src={'images/instagram.png'} alt={''} />
            {user === undefined?
                <div className={'header__user'}>
                    <Button onClick={()=>dispatch(showSignIn())}>Sing In</Button>
                    <Button onClick={()=>dispatch(showSignUp())}>Sing Up</Button>
                </div>
                :
                <div className={'header__user'}>
                    <Button onClick={()=>auth.signOut()}>Log Out</Button>
                </div>
            }
        </div>
    )
}