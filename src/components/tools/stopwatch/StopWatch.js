import React, { useState } from "react";
import Display from "./Display";
import "./stopwatch.scss";

const StopWatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setinterv] = useState();
  const [status, setstatus] = useState(0);

  var updateS = time.s,
    updateM = time.m,
    updateMS = time.ms,
    updateH = time.h;

  const start = () => {
    run();
    setstatus(1)
    setinterv(setInterval(run, 10));
  };

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTime({ ms: updateMS, s: updateS, m: updateM, h: updateH });
  };

  const stop = ()=>{
    clearInterval(interv);
    setstatus(2)

  }
  const reset = ()=>{
    clearInterval(interv)
    setstatus(0)
    setTime({ms: 0, s: 0, m: 0, h: 0})
  }

const resume = ()=>{
 start()
}



  return (
    <React.Fragment>
      <div className="body-stop">
        <h1 className="stop-h1">STOP WATCH</h1>
        <div className="main-section-stop">
          <div className="clock-holder">
            <div className="stopwatch">
              <Display time={time} resume={resume} stop={stop} reset={reset} start={start} status={status} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StopWatch;
