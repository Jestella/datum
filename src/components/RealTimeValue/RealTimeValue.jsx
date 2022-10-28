import React from "react";


const RealTimeValues = ({inputData, targetData}) => {

  console.log(inputData);
  console.log(targetData);

  return (
    <>
        <div className="realtimevalue-container">
            <p>file: </p>
            <p>BCM-input:</p>
            <p>GTH-input:</p>
        </div>
        
    </>
  )
}

export default RealTimeValues; 
