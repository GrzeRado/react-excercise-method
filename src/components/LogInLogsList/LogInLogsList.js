import React from 'react'

import {connect} from 'react-redux'

const LogInLogsList = (props) => (
    <div>
        {JSON.stringify(props.loginLogsList)}
    </div>

)

const mapStateToProps = state => ({
    loginLogsList: state.auth.loginLogs
})

export default connect(
    mapStateToProps
)(LogInLogsList)