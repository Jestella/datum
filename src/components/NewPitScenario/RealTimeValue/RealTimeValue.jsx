import React, { useState, useEffect } from "react";
// import "../../styles/new-pit-scenario/"

/*
const RealTimeValues = (data) => {
  const [userData, setUserData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [predefinedData, setPredefinedData] = useState([]);

  const [bcm, setBcm] = useState("");
  const [gth, setGth] = useState("");

  const applyData = () => {
    setUserData(data);

    if (Object.keys(userData)[0] === "inputData") {
      setInputData(userData);
      Object.keys(inputData).forEach((i) => {
        setBcm(inputData[i].BCMinput);
        setGth(inputData[i].GTHinput);
      })

    } else if (Object.keys(userData)[0] === "targetData") {
      setTargetData(userData);
      console.log(targetData);
    
    } else if (Object.keys(userData)[0] === "predefinedData") {
      setPredefinedData(userData);
      console.log(predefinedData);
    }
  }

  useEffect(() => {
    applyData();
  });

  return (
    <>
        <div className="realtimevalue-container">
          <div className="user-inputs">
            <p className="bcm-input"> {bcm} </p>
            <p className="gth-input"> {gth} </p>
          </div>
          <div className="target-inputs">
            {Object.keys(targetData).map((i) => {
              return (
                <ul>
                  <li>Date: {targetData[i].date1} Target: {targetData[i].gth1}</li>
                  <li>Date: {targetData[i].date2} Target: {targetData[i].gth2}</li>
                  <li>Date: {targetData[i].date3} Target: {targetData[i].gth3}</li>
                  <li>Date: {targetData[i].date4} Target: {targetData[i].gth4}</li>
                </ul>
              )
            })}
          </div>
          <div className="predefined-inputs">
          {Object.keys(predefinedData).map((i) => {
            // console.log(predefinedData[i][0]);
            return (
              <ul>
                <li>Long and Lat: {predefinedData[i][0]}</li>
                <li>Rainfall: {predefinedData[i][1]}</li>
                <li>Area of pitfall: {predefinedData[i][2]}</li>
              </ul>
            )
          })}
          </div>
        </div>
    </>
  )
}

export default RealTimeValues; 
*/