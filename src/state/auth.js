import {auth} from '../firebase'

const SET_USER = 'auth/SET_USER'


const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

export const initAuth = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user)=>{
        // if not logged in user is null!! //
        dispatch(setUser(user))
    })
}

export const logIn = () => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!')
}


const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_USER
            return {
                ...state,
                user: action.userData
            }
        default:
            return state
    }

}