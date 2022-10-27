import React, { useEffect, useState } from "react";
import "./Form.css";

function Backg(props) {
  const [bg, setBg] = React.useState("");
  const [bgIsValid, setBgIsValid] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Tersubmit");
    if (bgIsValid) {
      props.onAddBackground(bg);
    } else {
      alert("Background not valid");
    }
  };

  const changeBgHandler = (event) => {
    let value = event.target.value.trim();
    setBgIsValid(value.length > 0 && /^#([0-9a-f]{3}){1,2}$/i.test(value));
    setBg(value);
  };

  useEffect(() => {});
  return (
    <>
      <form onSubmit={submitHandler}>
        <div style={{ whitSpace: "nowrap" }}>
          <label htmlFor="bg">Set background : </label>
          <input
            type="text"
            className={bgIsValid === false ? "invalid" : ""}
            autoComplete="off"
            id="bg"
            name="bg"
            value={bg}
            onChange={changeBgHandler}
            onBlur={changeBgHandler}
          />
          <button type="submit">Set</button>
        </div>
      </form>
    </>
  );
}

export default Backg;
