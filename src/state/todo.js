const ADD_TASK = 'todo/ADD_TASK'

let nextTaskId = 0

export const addTask = name => ({
    type: ADD_TASK,
    name,
    key: nextTaskId++
})

const initialState = {
    tasks: []
}

export default (state = initialState, action) => { // change state and add reducer to store
    switch (action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([
                    {
                        name: action.name,
                        key: action.key
                    }
                ])
            }
        default:
            return state
    }
}