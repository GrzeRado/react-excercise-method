import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'
import {logIn} from '../../state/auth'


class Auth extends React.Component {
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


    render() {
        return (
            this.props.userData ?
                this.props.children
                :
                <div>
                    <LogIn
                        onEmailChange={(e, v) => (this.handleInput('loginEmail', e, v))}
                        onPasswordChange={(e, v) => (this.handleInput('loginPassword', e, v))}
                        onLogInClick={() => this.props.onLogInClick(
                            this.state.loginEmail,
                            this.state.loginPassword
                        )}
                        onLogInByGoogleClick={() => {
                        }}
                    />
                    <SignUp
                        onEmailChange={(e, v) => (this.handleInput('signUpEmail', e, v))}
                        onPasswordChange={(e, v) => (this.handleInput('signUpPassword', e, v))}
                        onRetypePasswordChange={(e, v) => (this.handleInput('signUpRetypePassword', e, v))}
                        onSignUpClick={() => {
                        }}
                    />
                </div>
        )
    }
}
                    const mapStateToProps=state => ({
                    userData: state.auth.user
                })

                    const mapDispatchToProps = dispatch => ({
                        onLoginClick: () => dispatch(logIn())
                        })

                    export default connect(
                    mapStateToProps,
                    mapDispatchToProps
                    )(Auth)