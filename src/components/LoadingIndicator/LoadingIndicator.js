import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 99999
    },
    indicator: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
}


const LoadingIndicator = () => (
    <div>
        <div>
            <CircularProgress size={60}/>
        </div>
    </div>
);

export default LoadingIndicator;