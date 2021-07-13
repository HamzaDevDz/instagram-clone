import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    posts: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        }
    },
    extraReducers: {

    }
})

export const { addPost } = postsSlice.actions;

export const selectPosts = state => state.posts.posts

export default postsSlice.reducer;
