import React from "react";

function Board(props){
 const positionX = props.positionX;
 const positionY = props.positionY;
 const width = props.width;
 const height = props. height;

const mystyle = {
"left": positionX,
"top": positionY,
"width": width,
"height": height,
"background-color": "green",
"position": "absolute"
}

return (
    <div style={mystyle}>
    </div>
)
}


export default Board;