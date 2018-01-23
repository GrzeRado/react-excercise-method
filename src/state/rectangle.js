const TOGGLE = 'rectangle/TOGGLE_RECT'


const toggleRectangle = () => ({
    type: TOGGLE_RECT
})

const initialState = {
    isReactVisible: true
}


export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RECT:
            return {
                ...state,
                isReactVisible: !state.isReactVisible
            }
        default:
            return state
    }
}