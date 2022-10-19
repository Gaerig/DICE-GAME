import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#a6ddbb" : "white",
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <p className="die-value">{props.value}</p>
    </div>
  );
}
