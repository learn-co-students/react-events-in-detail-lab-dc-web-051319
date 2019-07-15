// Code DelayedButton Component Here
import React from "react";

export default class DelayedButton extends React.Component {
    clickHandler = (e) => {
        e.persist();
        setTimeout(
            () => this.props.onDelayedClick(e),this.props.delay)
    }
   
    render(){
        return(
            <button onClick={this.clickHandler}>Delayed</button>
        )
    }
}


// const DelayedButton = (props) => {
//     return(
//         <button onClick={clickHandler}>CLICKY ME</button>
//     )
// }

// const clickHandler = (e) => {
//     setTimeout(props.onDelayedClick,props.delay)
// }

// export default DelayedButton