const START = 'loading/START'
const STOP = 'loading/STOP'


//create action startLoading and stopLoading in order to returned START and STOP
export const startLoading = () => ({
    type: START
})

export const stopLoading = () => ({
    type: STOP
})
