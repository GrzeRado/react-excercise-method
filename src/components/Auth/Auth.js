import React form 'react'

import {connect} from 'react-redux'

const Auth = (props) => (
    props.userData ?
        props.children
        :
        <div>Nie zamogowany!</div>

)

const mapStateToProps = state => ({
    userData : state.auth.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)