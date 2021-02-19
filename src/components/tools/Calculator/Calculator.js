import React, { useState } from "react";
import Input from "./cal-components/Input";
import Keys_wrapper from "./cal-components/Keys_wrapper";

import * as math  from "mathjs";

const Calculator = () => {
  const [input, setinput] = useState("");

  const Addtoinput = (val) => {
    setinput(input + val);
  };
  const handleequal = () => {
      
      setinput( math.evaluate(input))
  };
  const handleclear = () =>{
      setinput("")
  }

  return (
    <>
      <h1>CALCULATOR</h1>
      <div className="wrapper-cal">
        <Input input={input} />
        <Keys_wrapper click={Addtoinput} equal={handleequal} input={input} />
      </div>

      <div className='clear-cal' onClick={handleclear}>
          CLEAR
      </div>
    </>
  );
};

export default Calculator;
