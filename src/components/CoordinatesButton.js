import React, {Component} from 'react'

export default class CoordinatesButton extends Component{


    oneClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX,event.clientY])
        
    }

    render(){
        return(
            <div>
            <button onClick={this.oneClick}>
                Coords
            </button>
            </div>
        )
    }
}
