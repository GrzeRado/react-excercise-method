const INC = 'reduxCounter/INC'

export const inc =() => ({
    type: INC
})

const initialState = {
    counterValue: 0
}

export default (state = initialState, action) => {
    switch (action.type){
        case INC:
            return{
                ...state,
                counterValue:state.counterValue + 1
            }
        default:
            return state
    }
}