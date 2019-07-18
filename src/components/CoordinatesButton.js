import React, { Component } from 'react';

class CoordinatesButton extends Component {
   eventHandler = (e) => {
      this.props.onReceiveCoordinates([e.clientX, e.clientY])      
   }
   render() { 
      return ( 
         <button onClick={this.eventHandler}>Cordinates</button>
       );
   }
}
 
export default CoordinatesButton;