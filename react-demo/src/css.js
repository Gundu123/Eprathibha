
import React from "react";

function Calculator() {
  const buttonStyle = {
    backgroundColor: "orange",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    margin: "5px",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "100%",
    height: "50px",
    fontSize: "1.5rem",
    padding: "5px",
    margin: "10px 0",
    borderRadius: "5px",
    boxSizing: "border-box",
    textAlign: "right",
  };

  const keypadStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "5px",
  };

  return (
    <div>
      <input type="text" style={inputStyle} />
      <input type="text" style={inputStyle} readOnly />
      <div style={keypadStyle}>
        <button style={buttonStyle}>7</button>
        <button style={buttonStyle}>8</button>
        <button style={buttonStyle}>9</button>
        <button style={buttonStyle}>+</button>
        <button style={buttonStyle}>4</button>
        <button style={buttonStyle}>5</button>
        <button style={buttonStyle}>6</button>
        <button style={buttonStyle}>-</button>
        <button style={buttonStyle}>1</button>
        <button style={buttonStyle}>2</button>
        <button style={buttonStyle}>3</button>
        <button style={buttonStyle}>*</button>
        <button style={buttonStyle}>0</button>
        <button style={buttonStyle}>.</button>
        <button style={buttonStyle}>=</button>
        <button style={buttonStyle}>/</button>
        <button style={buttonStyle}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
