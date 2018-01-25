import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'

class Auth extends React.Component {
    state = {
        loginEmail: '',
        loginPassword: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpRetypePassword: ''

    }

handleInput = (event, value) => {
        this.setState({
            loginEmail: value
        })
}

    render() {
        return (
            props.userData ?
                props.children
                :
                <div>
                    <LogIn
                        onEmailChange={() => {this.handleInput
                        }}
                        onPasswordChange={() => {
                        }}
                        onLogInClick={() => {
                        }}
                        onLogInByGoogleClick={() => {
                        }}
                    />
                    <SignUp
                        onEmailChange={() => {
                        }}
                        onPasswordChange={() => {
                        }}
                        onRetypePasswordChange={() => {
                        }}
                        onSignUpClick={() => {
                        }}
                    />
                </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.auth.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)