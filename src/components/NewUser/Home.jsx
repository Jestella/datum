import React, { useState } from "react";
import Banner from "../Banner";
import ExistingPitScenarios from "../ExistingPitScenarios/ExistingPitScenarios";
import NewPitScenario from "../NewPitScenario/NewPitScenario";

import "../../styles/home/home.css";

const Home = () => {

    const [scenarioFlag, setScenarioFlag] = useState(false);
    const [newScenarioFlag, setNewScenarioFlag] = useState(false);

    const handleExistingPitClick = () => {
        setScenarioFlag(current => !current);
        if (scenarioFlag === false) {
            document.getElementById("existing-plans-button").classList.add("active-button");
            document.getElementById("new-plan-button").setAttribute("disabled", "true");
        } else {
            document.getElementById("existing-plans-button").classList.remove("active-button");
            document.getElementById("new-plan-button").removeAttribute("disabled");
        }
    }

    const handleNewPitClick = () => {
        setNewScenarioFlag(current => !current);
        if (newScenarioFlag === false) {
            document.getElementById("new-plan-button").classList.add("active-button");
            document.getElementById("existing-plans-button").setAttribute("disabled", "true");
        } else {
            document.getElementById("new-plan-button").classList.remove("active-button");
            document.getElementById("existing-plans-button").removeAttribute("disabled");
        }
    }

    return (
        <>
            <div class = "home-page">
                <Banner />
                <div class = "home-page-buttons">
                    <button id = "new-plan-button" onClick={() => handleNewPitClick()}> Start New Dewatering Plan </button>
                    <button id = "existing-plans-button" onClick={() => handleExistingPitClick()}> Exisiting Dewatering Plans </button>
                </div>
                {scenarioFlag && <ExistingPitScenarios />}
                {newScenarioFlag && <NewPitScenario />}
            </div>
        </>
    )
}

export default Home;