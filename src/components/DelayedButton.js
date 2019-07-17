// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component{

    thing = (event)=>{
        let del = this.props.delay
        let onda =this.props.onDelayedClick(event)
        event.persist()
        setTimeout(()=>{
            onda}, del)
    }

    render(){
        return(
            <div><button onClick={this.thing}></button></div>
        )
    }
}