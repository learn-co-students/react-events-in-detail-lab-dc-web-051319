// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  onClickEvent = (event) => {
    let coordinatesArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatesArray);

  }
  render(){
    return(
      <button onClick = {this.onClickEvent} >
      </button>
    )
  }
}

export default CoordinatesButton
