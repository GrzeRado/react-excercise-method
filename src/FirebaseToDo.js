import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'


const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'


}

class FirebaseToDo extends React.Component {
    render(){
        return(
            <Paper style={styles}>
                <TextField
                    hintText={"Nowe zadanie"}
                />
                <RaisedButton
                    label={"Dodaj!"}
                />
            </Paper>
        )
    }
}


export default  FirebaseToDo