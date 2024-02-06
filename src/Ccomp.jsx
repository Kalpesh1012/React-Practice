import React, { useContext } from "react";
import Dcomp from "./Dcomp";
import { Mycontext } from "./LearnContext";

const Ccomp = () => {
  const { name } = useContext(Mycontext);
  console.log("C called");
  return (
    <div>
      Ccomp
      <h1>{name}</h1>
      <Dcomp />
    </div>
  );
};

export default Ccomp;
