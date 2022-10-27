import React, { useState, useEffect } from "react";
import "./Form.css";

function Size(props) {
  const [sizeHeight, setSizeHeight] = React.useState("");
  const [sizeWidth, setSizeWidth] = React.useState("");
  const [sizeHeightIsValid, setSizeHeightIsValid] = React.useState("");
  const [sizeWidthIsValid, setSizeWidthIsValid] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submited");

    if (sizeHeightIsValid) {
      props.onAddSizeHeight(sizeHeight);
    } else {
      alert("Height is not valid");
    }

    if (sizeWidthIsValid) {
      props.onAddSizeWidth(sizeWidth);
    } else {
      alert("Width is not valid");
    }
  };

  const changeSizeHeightHandler = (e) => {
    let value = e.target.value.trim();
    setSizeHeightIsValid(value.length > 0);
    setSizeHeight(value);
  };

  const changeSizeWidthHandler = (e) => {
    let value = e.target.value.trim();
    setSizeWidthIsValid(value.length > 0);
    setSizeWidth(value);
  };

  useEffect(() => {});
  return (
    <>
      <form onSubmit={submitHandler}>
        <div style={{ whitSpace: "nowrap" }}>
          <label htmlFor="size">Set Height : </label>
          <input
            type="number"
            className={sizeHeightIsValid === false ? "invalid" : ""}
            autoComplete="off"
            id="size"
            name="size"
            value={sizeHeight}
            onChange={changeSizeHeightHandler}
            onBlur={changeSizeHeightHandler}
          />
          <button type="submit">Set</button>
        </div>
        <div style={{ whitSpace: "nowrap" }}>
          <label htmlFor="size">Set Width : </label>
          <input
            type="number"
            className={sizeWidthIsValid === false ? "invalid" : ""}
            autoComplete="off"
            id="size"
            name="size"
            value={sizeWidth}
            onChange={changeSizeWidthHandler}
            onBlur={changeSizeWidthHandler}
          />
          <button type="submit">Set</button>
        </div>
      </form>
    </>
  );
}

export default Size;
