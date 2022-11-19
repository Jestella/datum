import React, {useState} from "react";
import UserInputs from "./UserInputs/UserInputs";
import Targets from "./Targets/Targets";
import PreDefinedInputs from "./PreDefinedInputs/PreDefinedInputs";
import Graph from "../Graphs/Graph";

import "../../styles/new-pit-scenario/new-pit-scenario.css";
import { useEffect } from "react";

const NewPitScenario = () => {
    const [realTimeState, setRealTimeState] = useState([]);
    const [renderGraph, setRenderGraph] = useState(false);
    const [renderDataComponents, setRenderDataComponents] = useState(true);
    let realTimeData = [];
    let realTimeContainer;

    const adjustRealTimeValues = () => { {/* real time container fixer function with DOM manipulation */}
        const realtimevalueElements = document.querySelectorAll(".realtimevalue-container");
        realTimeContainer = document.createElement("div");
        realTimeContainer.classList.add("master-realtime-container");

        for (let i = 0; i < realtimevalueElements.length; i++) {
            realTimeContainer.append(realtimevalueElements[i]);
        }

        document.getElementById("new-pit-scenario-inputs").appendChild(realTimeContainer);
    }

    const setRealTimeValues = (dataContainer) => { {/* capturing and setting real time data as a state */}
        realTimeData = [];

        Object.keys(dataContainer.childNodes).forEach((i) => {
            if (dataContainer.childNodes[i].innerHTML !== "") {
                for (let x = 0; x < dataContainer.childNodes[i].getElementsByTagName("ul")[0].children.length; x++) {
                    realTimeData.push(dataContainer.childNodes[i].getElementsByTagName("ul")[0].children[x].innerHTML);
                    setRealTimeState(realTimeData);
                }
            }
        })
    }

    setTimeout(() => {
        adjustRealTimeValues();
    }, 10);

    return (
        <> 
            {renderDataComponents &&
                <div id = "new-pit-scenario-inputs">
                    <UserInputs />
                    <PreDefinedInputs />
                    <Targets />

                    <button id = "submit-button" onClick={() => {
                        setRealTimeValues(realTimeContainer);
                        setRenderGraph(true);
                        setRenderDataComponents(false);
                        }}> SUBMIT 
                    </button>
                </div>
            }
            {renderGraph && <Graph realTimeState={realTimeState} />} {/* condiontially render the graph when submit is clicked and hide the other components*/}
        </>
    )
}

export default NewPitScenario;