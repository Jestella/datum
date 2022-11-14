import React from "react";
import UserInputs from "./UserInputs/UserInputs";
import Targets from "./Targets/Targets";
import PreDefinedInputs from "./PreDefinedInputs/PreDefinedInputs";

import "../../styles/new-pit-scenario/new-pit-scenario.css";

const NewPitScenario = () => {

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