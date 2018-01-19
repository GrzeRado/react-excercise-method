import React from 'react'
import TextField from 'material-ui/TextField'


class FirebaseToDo extends React.Component {
    render(){
        return(
            <div>
                <TextField
                    hintText={"Nowe zadanie"}
                />
            </div>
        )
    }
}


export default  FirebaseToDo