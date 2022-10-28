import React from "react";
import UserInputs from "./components/NewPitScenario/UserInputs/UserInputs";
import Home from "./components/NewUser/Home";
import RealTimeValue from "./components/RealTimeValue/RealTimeValue";

import "./styles/main/main.css";

const App = (inputData) => {

  return (
    <>
      <Home />
      <RealTimeValue inputData={inputData}/>
    </>
  )
}

export default App; 
