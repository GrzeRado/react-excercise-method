const ADD_TASK = 'todo/ADD_TASK'

const addTask = name => ({ ///make action and return task
    type: ADD_TASK
    name
})

const initialState = {
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([
                    {
                        name: action.name
                    }
                ])
            }
        default:
            return state
    }
}