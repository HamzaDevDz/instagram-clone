import React, {useEffect} from "react"
import './posts.css'
import {useDispatch, useSelector} from "react-redux";
import {setPosts, selectPosts} from "./postsSlice";
import {Post} from "../post/Post";
import {db} from "../firebase/Firebase";

export const Posts = () => {

    const dispatch = useDispatch()

    const posts = useSelector(selectPosts)

    useEffect(() => {
        db
            .collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                dispatch(setPosts(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()}) )))
            });
    }, [])

    return(
        <div className={'posts'}>
            {posts.map(({id, post}) => (
                <Post key={id} refDoc={id} username={post.username} caption={post.caption} imageURL={post.imageURL} comments={post.comments} />
            ))}
        </div>
    )
}