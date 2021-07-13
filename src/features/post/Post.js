import React from "react"
import './Post.css'
import {Avatar} from "@material-ui/core";

export const Post = ({username, imageURL, caption}) => {
    return(
        <div className={'post'}>
            <Avatar alt={username} src="" />
            <img src={imageURL} alt={''} />
            <div className={'post__caption'}>
                <strong>username</strong> {caption}
            </div>
        </div>
    )
}