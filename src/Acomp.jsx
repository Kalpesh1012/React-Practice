import React, { useState } from "react";
import Bcomp from "./Bcomp";
import { Mycontext } from "./LearnContext";

const Acomp = () => {
  const [name, setName] = useState("Rahul Ojha");
  return (
    <div>
      Acomp
      <div>
        <Mycontext.Provider value={{ name }}>
          <Bcomp />
        </Mycontext.Provider>
      </div>
    </div>
  );
};

export default Acomp;
