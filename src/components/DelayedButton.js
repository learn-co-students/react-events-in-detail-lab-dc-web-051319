import React, { Component } from 'react';

class DelayedButton extends Component {
   eventHandler = (e) => {
      e.persist()
      setTimeout(() => {
         this.props.onDelayedClick(e)
      }, this.props.delay)
   }
   render() { 
      return (
         <button onClick={this.eventHandler}>Delayed</button>
      )
   }
}
 
export default DelayedButton;