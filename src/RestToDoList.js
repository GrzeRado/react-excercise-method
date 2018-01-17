import React, {Component} from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/grzegorz/'

class RestToDoList extends React.Component {
    state = {
        list: null,
        newTaskName: 'Wpisz nowy task'
    }

    componentWillMount() {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDb => this.setState({
                list: dataFromDb
            }))

    }

    getData = () => {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDb => this.setState({
                list: dataFromDb,
                newTaskName: ''
            }))
    }

    handleInputChange = (e) => this.setState({
        newTaskName: e.target.value
    })

    handleButtonClick = () => {
        const newTaskObj = {name: this.state.newTaskName}


        fetch(
            databaseUrl + 'list/.json',
            {
                method: 'POST',
                body: JSON.stringify(newTaskObj)
            }
        )
            .then(() => {
                this.getData
                    .catch((err) => alert('Cos poszlo nie tak!'))
            })
        /**/
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTaskName}
                    />
                    <button onClick={() => {
                    }}>
                        Zapisz!
                    </button>
                </div>

                {
                    Object.entries(this.state.list || {})
                        .map(([key, task]) => (
                            <div key={key}>
                                {task.name}
                            </div>
                        ))
                }
            </div>
        )

    }

}

export default RestToDoList