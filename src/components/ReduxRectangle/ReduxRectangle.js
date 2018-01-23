import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'

class ReduxRectangle extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'red'
                    }}
                >
                </div>
                <RaisedButton
                    label="TOGGLE"
                />
            </div>
        )

    }
}

const mapStateToProps = state => ({
    isRectVisible
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)