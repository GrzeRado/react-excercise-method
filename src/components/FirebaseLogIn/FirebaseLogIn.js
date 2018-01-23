import React from 'react'
import LogIn from './LogIn'

import {auth, googleProvider} from '../../firebase'

class FirebaseLogin extends React.Component {
    state = {
        email: '',
        password: '',
        isLoggedIn: false
    }

    componentWillMount() {
        auth.onAuthStateChanged((user)=>
        {
            if (user) {
                console.log('Zalogowane!')
                this.setState({
                    isLoggedIn: true
                })
            } else {
                console.log('Wylogowane!')
                this.setState({
                    isLoggedIn: false
                })
            }
        }
    )
}

onEmailChange = (event, value) => {
    this.setState({
        email: value
    })
}
onPasswordChange = (event, value) => {
    this.setState({
        password: value
    })
}

onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => console.log('Zalogowane!'))
    }

onLogInClick = () => {
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => console.log('Zalogowano!'))
}

onLogInByGoogleClick = () => {
    alert('onLogInByGoogleClick')
}

render()
{
    return (
        auth.currentUser ?
            <div>Czesc jestes zalogowany!
            <button onClick={()=>auth.signOut()}>
                Wyloguj
            </button>
            </div>
            :
            <LogIn
                onEmailChange={this.onEmailChange}
                onPasswordChange={this.onPasswordChange}
                onLogInClick={this.onLogInClick}
                onLogInByGoogleClick={this.onLogInByGoogleClick}

            />
    )
}
}

export default FirebaseLogin