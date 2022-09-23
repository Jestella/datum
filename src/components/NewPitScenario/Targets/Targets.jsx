import React from "react";

const Targets = () => {

    return (
        <>
            <div id = "targets">
                <div class = "container"> 
                    <h1> Targets </h1>
                    <ul id = "contstraint-list">
                        <li>
                            <input type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input type = "date" class = "constraint-date" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Targets;