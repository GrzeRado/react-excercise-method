import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'
import {logIn, logInByGoogle, createUser} from '../../state/auth'


class Forms extends React.Component {
    state = {
        loginEmail: '',
        loginPassword: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpRetypePassword: ''

    }

    handleInput = (nameInState, event, value) => {
        const newState = {}
        newState[nameInState] = value
        this.setState(newState)
    }

    /// we can use the same as below comes from ES6. Its very simpler
    //
    // handleInput = (nameInState, event, value) => {
    //    this.setState({
    //      [nameInState]: value
    //      })
    // }

    createUserHandler = () => {
        if (
            this.state.signUpPassword
            !==
            this.state.signUpRetypePassword
        ) {
            alert('Podane hasla są jednakowe!')
            return
        }


        this.props.onSignUpClick(
            this.state.signUpEmail,
            this.state.signUpPassword
        )
    }

    render() {
        return (
            <div>
                <LogIn
                    onEmailChange={(e, v) => (this.handleInput('loginEmail', e, v))}
                    onPasswordChange={(e, v) => (this.handleInput('loginPassword', e, v))}
                    onLogInClick={() => this.props.onLoginClick(
                        this.state.loginEmail,
                        this.state.loginPassword
                    )}
                    onLogInByGoogleClick={this.props.onLogInByGoogleClick}
                />
                <SignUp
                    onEmailChange={(e, v) => (this.handleInput('signUpEmail', e, v))}
                    onPasswordChange={(e, v) => (this.handleInput('signUpPassword', e, v))}
                    onRetypePasswordChange={(e, v) => (this.handleInput('signUpRetypePassword', e, v))}
                    onSignUpClick={() => {
                        this.props.onSignUpClick(
                            this.state.signUpEmail,
                            this.state.signUpPassword,
                        )
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    onLoginClick: (email, password) => dispatch(logIn(email, password)),
    onLogInByGoogleClick: () => dispatch(logInByGoogle()),
    onSignUpClick: (email, password) => dispatch(createUser(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forms)