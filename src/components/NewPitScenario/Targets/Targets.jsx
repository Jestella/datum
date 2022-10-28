import React, {useState} from "react";
import RealTimeValues from "../../RealTimeValue/RealTimeValue";

const Targets = () => {

    const [targetData, setTargetData] = useState([]);

    const handleOnChange = (e) => {
        setTargetData(currentValues => ({
            ...currentValues,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <>
            <div id = "targets">
                <form class = "container" onChange={(e) => handleOnChange(e)}> 
                    <h1> Targets </h1>
                    <ul id = "contstraint-list">
                        <li>
                            <input id = "gth-1" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date-1" type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input id = "gth-2" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date-2" type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input id = "gth-3" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date-3" type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input id = "gth-4" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date-4" type = "date" class = "constraint-date" />
                        </li>
                    </ul>
                </form>
            </div>
            <RealTimeValues targetData={targetData} />
        </>
    )
}

export default Targets;