import React, { useEffect } from "react";
import "./Card.css";

function Card(props) {
  const style = {
    backgroundColor: props.Bg,
  };
  return (
    <div className="card" style={style}>
      AAABB
    </div>
  );
}

export default Card;
