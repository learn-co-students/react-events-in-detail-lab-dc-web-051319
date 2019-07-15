// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    render(){
        return(
            <div>
                <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}></button>
            </div>
        )
    }
}

export default CoordinatesButton