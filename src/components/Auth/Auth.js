import React from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

import {connect} from 'react-redux'

const Auth = (props) => (
    props.userData ?
        props.children
        :
        <div>
            <LogIn
            onEmailChange={()=>{}}
            onPasswordChange={()=>{}}
            onLogInClick={()=>{}}
            onLogInByGoogleClick={()=>{}}
            />
            <SignUp
            onEmailChange={()=>{}}
            onPasswordChange={()=>{}}
            onRetypePasswordChange={()=>{}}
            onSignUpClick={()=>{}}
            />
        </div>
)

const mapStateToProps = state => ({
    userData: state.auth.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)