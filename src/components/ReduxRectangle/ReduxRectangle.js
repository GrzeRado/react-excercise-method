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
                    label={this.props.isRectVisible ? "UKRYJ" : "POKAZ"}
                    onClick={this.props.handleToggleRect}
                />
                <RaisedButton
                    label="WŁĄCZ MIGANIE"
                    onClick={() => setInterval(this.props.handleToggleRect, 500)}
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