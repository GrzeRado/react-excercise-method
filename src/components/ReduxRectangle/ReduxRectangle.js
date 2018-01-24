import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import {toggleRect} from '../../state/rectangle'

class ReduxRectangle extends React.Component {
    render() {
        return (
            <div>
                {

                    this.props.isRectVisible ?
                        <div
                            style={{
                                width: 200,
                                height: 200,
                                backgroundColor: 'red'
                            }}
                        >
                        </div>
                        :
                        null
                }
                <RaisedButton
                    label="TOGGLE"
                    onClick={this.props.handleToggleRect}
                />
            </div>
        )

    }
}

const mapStateToProps = state => ({
    //nazwaPropsa: kawałek.stanu.ktory.przypinamy
    isRectVisible: state.rectangle.isReactVisible
})

const mapDispatchToProps = dispatch => ({
//nazwaPropsa: funkcja.ktora.wywola.dispatch(z akcją)
    handleToggleRect: () => dispatch(toggleRect())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)