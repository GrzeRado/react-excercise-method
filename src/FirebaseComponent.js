import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import {database} from './firebase'

class FirebaseComponent extends React.Component {
    state = {
        dataToSave: 'zupa'
    }

    setButtonHandler = () => {
        let parsedData
        try{
            parsedData = JSON.parse(this.state.dataToSave)
        }
        catch(error){
            alert('Wpisales niepoprawnego JSONa!')
            return
        }

        // equivalent of PUT
        database.ref('/setExample').set(
            this.state.dataToSave
        )
            .then(()=>alert('Zapisano dane metodą set!'))
    }

    onDataToSaveChange = (e) => {
        this.setState({
            dataToSave: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Firebase</h1>
                <div>
                    <TextField
                        floatingLabelText="JSON to send"
                        multiLine={true}
                        rows={2}
                        fullWidth={true}
                        value={this.state.dataToSave}
                        onChange={this.onDataToSaveChange}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="SET"
                        onClick={this.setButtonHandler}
                    />
                </div>
            </div>
        )
    }
}

export default FirebaseComponent