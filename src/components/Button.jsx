import React  from "react";

function Generator(props) {
  return <button onClick={props.generate}>Generate new quote</button>;
}

export default Generator;
