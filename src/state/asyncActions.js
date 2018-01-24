const SET_DATA = 'asyncActions/SET_DATA'

const setData = data => ({
    type: SET_DATA,
    data: data
})


export const fetchData = () => () => {  //() => () =>{} function () returned another function () => {}

    //fetch
}

const initialState = {
    randomUserData: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_DATA:
            return {
                ...state,
                randomUserData: action.data
            }
        default:
            return state
    }
}