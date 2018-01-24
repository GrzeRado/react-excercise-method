import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import {inc} from '../../state/reduxCounter'


class ReduxCounter extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.counterValue}</h1>
                <RaisedButton
                    label="+"
                    onClick={this.props.handleInc}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counterValue: state.reduxCounter.counterValue
})

const mapDispatchToProps = dispatch => ({
    handleInc: () => dispatch(inc())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter)