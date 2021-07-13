import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: undefined,
    openSignIn: false,
    openSignUp: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUser: (state, action) => {
            state.user = action.payload
        },
        showSignIn: (state) => {
            state.openSignIn = true
        },
        hideSignIn: (state) => {
            state.openSignIn = false
        },
        showSignUp: (state) => {
            state.openSignUp = true
        },
        hideSignUp: (state) => {
            state.openSignUp = false
        }
    },
    extraReducers: {}
})

export const { fetchUser, showSignIn, hideSignIn, showSignUp,  hideSignUp} = userSlice.actions;

export const selectUser = state => state.user.user
export const selectOpenSingIn = state => state.user.openSignIn
export const selectOpenSignUp = state => state.user.openSignUp

export default userSlice.reducer;
