import React, { useEffect } from "react";
import "./Card.css";

function Card(props) {
  const style = {
    backgroundColor: props.Bg,
    height: props.sizeHeight + "px",
    width: props.sizeWidth + "px",
  };
  return (
    <div className="card" style={style}>
      AAABB
    </div>
  );
}

export default Card;
