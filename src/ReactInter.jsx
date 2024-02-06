import React, { useState } from "react";

const ReactInter = () => {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  console.log(arr);
  return (
    <div>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        className="w-96 h-8 border-2"
        placeholder="ADD a Task"
      ></input>
      <button
        onClick={() => {
          setArr([...arr, val]);
        }}
      >
        ADD-Task
      </button>
      <div>{arr.length === 0 ? "" : arr.map((item) => <h1>{item}</h1>)}</div>
    </div>
  );
};

export default ReactInter;
