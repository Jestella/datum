import React from "react";

import "../../styles/pit-scenarios/pit-scenarios.css";

const ExistingPitScenarios = () => {

    return (
        <>
            <div class = "pit-scenario-list">
                <ul>
                    <li><button> Main Pit Scenario 1 </button></li>
                    <li><button> Main Pit Scenario 2 </button></li>
                    <li><button> Main Pit Scenario 3 </button></li>
                    <li><button> Nested Pit 1 Scenario 2 </button></li>
                </ul>
            </div>
        </>
    )
}

export default ExistingPitScenarios;