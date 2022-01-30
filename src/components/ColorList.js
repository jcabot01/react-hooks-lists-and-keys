import React from "react";

function ColorItem(props) { //helper COMPONENT
  console.log(props) //each color is pulled in.  They already have a key from the colorElements map.
  return <li style={{color: props.color}}>{props.color}</li> //colors with style, name, and key/id are returned
}

function ColorList() { //main COMPONENT gets rendered in App
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} /> //props get sent to ColorItem component (above)^, callback, variable gets sent down to return of ColorList 
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
