import React from "react";
import UserInputs from "./UserInputs/UserInputs";
import Targets from "./Targets/Targets";
import PreDefinedInputs from "./PreDefinedInputs/PreDefinedInputs";

import "../../styles/new-pit-scenario/new-pit-scenario.css";

const NewPitScenario = () => {

    const adjustRealTimeValues = () => { {/* real time container fixer function with DOM manipulation */}
        const realtimevalueElements = document.querySelectorAll(".realtimevalue-container");
        const realTimeContainer = document.createElement("div");
        realTimeContainer.classList.add("master-realtime-container");

        for (let i = 0; i < realtimevalueElements.length; i++) {
            realTimeContainer.append(realtimevalueElements[i]);
        }

        document.getElementById("new-pit-scenario-inputs").appendChild(realTimeContainer);
    }

    setTimeout(() => {
        adjustRealTimeValues();
    }, 10);

    return (
        <> 
            <div id = "new-pit-scenario-inputs">
                <UserInputs />
                <PreDefinedInputs />
                <Targets />
            </div>
            <button id = "submit-button"> SUBMIT </button>
        </>
    )
}

export default NewPitScenario;