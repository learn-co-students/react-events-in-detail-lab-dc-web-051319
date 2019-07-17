// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    setTimer = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return (
            <button onClick={this.setTimer}>Delayed</button>
        )
    }
}

export default DelayedButton
