import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import{fetchData} from '../../state/asyncActions'

class ReduxAsyncActions extends React.Component {
    render(){
        return (
            <div>
                <div>
                    {this.props.messageForUser}

                </div>
                    {this.props.randomUserData ?
                        this.props.randomUserData.name.first
                        :
                        'Nie zaladowano imienia!'
                    }
                    {this.props.randomUserData ?
                        this.props.randomUserData.name.last
                        :
                        'Nie zaladowano nazwiska!'}
                <RaisedButton
                    label="Fetch Data"
                    onClick={this.props.getRandomUserData}
                />
            </div>
        )
    }

}


const mapStateToProps = state => ({
    randomUserData: state.asyncActions.randomUserData,
    messageForUser: state.asyncActions.messageForUser
})

const mapDispatchToProps = dispatch => ({
    getRandomUserData: () => dispatch(fetchData())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAsyncActions)