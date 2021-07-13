import React, {useEffect} from "react"
import './posts.css'
import {useDispatch, useSelector} from "react-redux";
import {addPost, selectPosts} from "./postsSlice";
import {Post} from "../post/Post";
import {db} from "../firebase/Firebase";

export const Posts = () => {

    const dispatch = useDispatch()

    const posts = useSelector(selectPosts)

    useEffect(() => {
        db
            .collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(
                snapshot => { snapshot.docs.forEach(doc => (dispatch(addPost({ id: doc.id, post: doc.data() })))) },
                error => { console.log(error) },
            );
    }, [])

    return(
        <div className={'posts'}>
            {posts.map(({id, post}) => (
                <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL} />
            ))}
        </div>
    )
}