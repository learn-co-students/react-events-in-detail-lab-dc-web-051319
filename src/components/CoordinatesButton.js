import React from "react"

const handleClick = (event, props) => {
    let coords = [event.clientX, event.clientY]
    props.onReceiveCoordinates(coords)
}

function CoordinatesButton(props){
    return (
        <button onClick={(event) => handleClick(event, props)} />
    )
}

export default CoordinatesButton