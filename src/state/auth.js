
import {database, auth, googleProvider} from '../firebase'

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

        if(user) { //check if not null
            dispatch(logLoginDate())
        }
    })
}

const logLoginDate = () => (dispatch, getState) => { //Function uid comes from store.js and change state
    const uid = getState().auth.user.id
    database.ref(`/users/${uid}/loginLogs`)
        .push({timestamp: Date.now()})
        .then(() => console.log('Login date succesfully logged in db!'))
        .catch(() =>  console.log('Something wrong!'))
}


export const logIn = (email, password) => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!'))
}

export const logInByGoogle = () => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(googleProvider)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!'))
}
export const createUser = () => (email, password) => (dispatch, getState) => {
    auth.createUserWithEmailAndPassword(email, password)
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