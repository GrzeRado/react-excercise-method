import React, {Component} from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/grzegorz/'

class RestToDoList extends React.Component {
    state = {
        list: null,
        newTaskName: '',
        currentlyEditedTask: null,
        currentlyEditedTaskName: taskName
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

    deleteTask = (taskId) => {
        fetch(
            databaseUrl + 'list/' + taskId + '/.json',
            {method: 'DELETE'}
        )
            .then(() => this.getData())
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
                this.getData()
            })
            .catch((err) => alert('Cos poszlo nie tak!'))
    }

    handleTaskNameClick = () => {
        this.setState({
            currentlyEditedTask: taskId,
            currentlyEditedTaskName: taskName
        })

        handelEditInputChange = (e) => this.setState({
            currentlyEditedTaskName: e.target.value
        })

        handleSaveButtonClick = () => {
            const newTaskObj
        }
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
                    <button onClick={this.handleButtonClick}>
                        Zapisz!
                    </button>
                </div>

                {
                    Object.entries(this.state.list || {})
                        .map(([key, task]) => (
                            <div key={key}>
                                <span onClick={() => this.handleTaskNameClick(key, task.name)}>
                                    {
                                        this.state.currentlyEditedTask === key ?
                                            <span>
                                                <input
                                                    onChange={this.handleEditInputChange}
                                                    value={this.state.currentlyEditedTaskName}
                                                />
                                            <button onClick={this.handleSaveButtonClick}>
                                        Zapisz
                                        </button>
                                        </span>
                                            :
                                            task.name
                                    }
                                    <span>
                                    <button onClick={() => this.deleteTask(key)}>
                                        Usuń
                                    </button>

                            </div>
                    ))
                    }

                )

                }

                }
                }

                export default RestToDoList