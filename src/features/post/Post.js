import React from "react"
import './Post.css'
import {Avatar} from "@material-ui/core";

export const Post = ({username, imageURL, caption}) => {
    console.log(imageURL)
    return(
        <div className={'post'}>
            <div className={'post__avatarUsername'}>
                <Avatar className={'post___avatar'}>{username[0]}</Avatar>
                <p className={'post__username'}>{username}</p>
            </div>
            <img className={'post__img'} src={imageURL} alt={''} />
            <div className={'post__caption'}>
                <strong>{username}</strong> {caption}
            </div>
        </div>
    )
}