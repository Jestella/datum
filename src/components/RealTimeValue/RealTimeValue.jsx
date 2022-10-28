import React from "react";
import "../RealTimeValue/RealTimeValue.css"


const RealTimeValues = ({inputData}) => {

    console.log(inputData.BCMinput);

  return (
    <>
        <div className="realtimevalue-container">
            <p>file: </p>
            <p>BCM-input: {inputData["BCMinput"]}</p>
            <p>GTH-input:</p>
        </div>
        
    </>
  )
}

export default RealTimeValues; 
