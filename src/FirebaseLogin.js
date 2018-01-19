import React from 'react'
import LogIn from './LogIn'

import {auth} from './firebase'


class FirebaseLogin extends React.Component {
    state = {
        email: '',
        password: ''
    }


    onEmailChange = (event, value) => {this.setState({
        email: value
    })}
    onPasswordChange = (event, value) => {this.setState({
        password: value
    })}

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>console.log('Zalogowano!'))
    }

        onLogInByGoogleClick = () => {alert('onLogInByGoogleClick')}

    render(){
        return (
            <LogIn
                onEmailChange = {this.onEmailChange}
                onPasswordChange = {this.onPasswordChange}
                onLogInClick = {this.onLogInClick}
                onLogInByGoogleClick = {this.onLogInByGoogleClick}

            />
        )
    }
}

export default FirebaseLogin