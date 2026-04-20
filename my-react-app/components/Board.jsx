import React from "react";

function Board(props){
 const positionX = props.positionX;
 const positionY = props.positionY;
 const width = props.width;
 const height = props. height;

const mystyle = {
x: positionX,
y: positionY,
width: width,
height: height,
}

return (
    <div style="width:500px, height:600px, background-color:green">
    
    </div>
)
}


export default Board;