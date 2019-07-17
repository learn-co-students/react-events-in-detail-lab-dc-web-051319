// Code CoordinatesButton Component Here

import React from 'react';


export default class DelayedButton extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.props.onReceiveCoordinates = handleClick
    // }

    handleClick = (event) => {
        let x = event.pageX
        let y = event.pageY
        // `${x},${y}`
        // console.log(); // prints 'click'
        this.props.onReceiveCoordinates([x,y])
    }

    render(){
        return(
            <div><button onClick={this.handleClick}></button></div>
        )
    }
}