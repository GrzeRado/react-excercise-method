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

    handleInput = (nameInState, e, v) => {
        const newState = {}
        newState[nameInState] = value
        this.setState(newState)
    }

   /// we can use the same as below
    //
    // handleInput = (nameInState, e, v) => {
        const newState = {}
        newState[nameInState] = value
        this.setState(newState)
    // }



    render() {
        return (
            props.userData ?
                props.children
                :
                <div>
                    <LogIn
                        onEmailChange={() => {
                            (e, v) => (this.handleInput('loginEmail', e, v)
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