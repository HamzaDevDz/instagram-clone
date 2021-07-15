import React, {forwardRef, useState} from "react"
import './Post.css'
import {Avatar} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {db} from "../firebase/Firebase"
import firebase from "firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../user/userSlice";
import Button from "@material-ui/core/Button";

export const Post = ({refDoc, username, imageURL, caption, comments}) => {
    const user = useSelector(selectUser)
    const [comment, setComment] = useState('')
    const handleUploadComment = (e) => {
        e.preventDefault()
        const newComment = {username: user.displayName, comment: comment}
        db.collection('posts').doc(refDoc).update({
            comments: firebase.firestore.FieldValue.arrayUnion(newComment)
        })
            .then(() => {
                setComment('')
            })
    }
    return(
        <div className={'post'}>
            <div className={'post__avatarUsername'}>
                <Avatar className={'post___avatar'}>{username?username[0]:''}</Avatar>
                <p className={'post__username'}>{username}</p>
            </div>
            <img className={'post__img'} src={imageURL} alt={''} />
            <div className={'post__caption'}>
                <strong>{username}</strong> {caption}
            </div>
            <div className={'post__comments'}>
                {comments.map(comment => (
                    <div className={'post__comments__comment'}>
                        <strong>{comment.username}</strong> {comment.comment}
                    </div>
                ))}
            </div>
            {user ?
                <form className={'post__uploadComment'}>
                    <TextField
                        className={'post__uploadComment__textField'}
                        label="Comment"
                        multiline
                        maxRows={4}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <Button className={'post__uploadComment__btn'}
                            onClick={handleUploadComment}
                            // variant={'contained'}
                            disabled={!comment}
                            type={'submit'}
                    >Post</Button>
                </form>
                :
                ''
            }
        </div>
    )
}