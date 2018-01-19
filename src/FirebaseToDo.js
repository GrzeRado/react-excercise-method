import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';


const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

class FirebaseToDo extends React.Component {
    deleteTask = (taskId) => {
        alert(taskId)
    }

    render() {
        return (
            <Paper style={styles}>
                <TextField
                    hintText={"Nowe zadanie"}
                    fullWidth={true}
                />
                <RaisedButton
                    label={"Dodaj!"}
                    primary={true}
                    fullWidth={true}
                />
                <List style={{textAlign: 'left'}}>
                    <ListItem
                        primaryText="Pierwsze zadanie!"
                        rightIcon={<ActionDelete onClick={this.deleteTask('0')}/>}
                    />
                </List>
            </Paper>
        )
    }
}


    export default  FirebaseToDo