import React from "react";

export default function Exchange(props) {
  return (
    <div>
      <p>{`#: ${props.index}`}</p>
      <p>{`From ${props.fromType} to ${props.toType}`}</p>
      <p>{`${props.fromValue} = ${props.toValue}`}</p>
      <p>{`Exchange value: ${
        (props.fromValue / props.toValue) * props.number
      }`}</p>
      <button onClick={() => props.deleteExchange(props.index)}>X</button>
    </div>
  );
}
