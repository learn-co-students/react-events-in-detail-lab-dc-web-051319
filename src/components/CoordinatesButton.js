import React from 'react'
import index from '../index.js'
// Code CoordinatesButton Component Here

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return(
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}

export default CoordinatesButton