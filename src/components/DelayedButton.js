import React from 'react'

// Code DelayedButton Component Here
class DelayedButton extends React.Component {

    handleClick = (event) => {
        
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay
        )  
        event.persist()
    }

    render() {
        return(

            <div>
                <button onClick={this.handleClick}>Delay</button>     
            </div>

        )
    }

}

export default DelayedButton