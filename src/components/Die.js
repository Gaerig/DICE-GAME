import React from "react";

export default function Die(props) {
  return (
    <div className="die-face">
      <p className="die-value">{props.value}</p>
    </div>
  );
}
