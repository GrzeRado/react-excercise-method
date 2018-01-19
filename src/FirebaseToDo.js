import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {lime500} from 'material-ui/styles/colors';

const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

const Task = (props) => (
    <ListItem
        primaryText={props.taskName}
        rightIcon={
            <ActionDelete
                onClick={() => props.deleteTask(props.taskId)}
            />
        }
    />
)

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
                    underlineFocusStyle={{borderColor: lime500}}
                />
                <RaisedButton
                    label={"Dodaj!"}
                    primary={true}
                    fullWidth={true}
                />
                <List style={{textAlign: 'left'}}>
                    <ListItem

                    />
                </List>
            </Paper>
        )
    }
}

export default  FirebaseToDo