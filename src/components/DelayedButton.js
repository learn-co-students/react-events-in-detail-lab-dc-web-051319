// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    handleClick = (event) => {
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
        event.persist()
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default DelayedButton