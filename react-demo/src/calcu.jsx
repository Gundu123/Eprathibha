import { useState } from "react";
import React from "react";

function Gundu() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleClick(value) {
    if (value === "." && input.includes(".")) {
      return; // Do nothing if the input already has a decimal point
    }
    setInput(input + value);
  }

  function handleClear() {
    setInput("");
    setResult("");
  }

  function calculate() {
    try {
      const output = eval(input);
      setResult(output);
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div>
      <input type="text" value={input} readOnly />
      <input type="text" value={result} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClear()}>C</button>
      </div>
    </div>
  );
}

export default Gundu;
