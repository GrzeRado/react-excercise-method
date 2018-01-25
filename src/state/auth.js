import {auth} from '../firebase'

const SET_USER = 'auth/SET_USER'


const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

export const initAuth = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user)=>{

    })
}

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }

}