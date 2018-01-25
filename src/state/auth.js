import {auth} from '../firebase'




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