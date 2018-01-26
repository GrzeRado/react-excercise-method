
import {auth, googleProvider} from '../firebase'

const SET_USER = 'auth/SET_USER'

//this function return object - creator of function
const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

//this function return function(initAuth init from store.js and have function in function - initAuth have function onAuthStateChanged
export const initAuth = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user) => {
        // if not logged in user is null !
        dispatch(setUser(user))
    })
}

export const logIn = (email, password) => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!'))
}

export const logInByGoogle = () => (dispatch, getStat) => {
    auth.signInWithEmailAndPassword(googleProvider)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!'))
}

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.userData
            }
        default:
            return state
    }
}