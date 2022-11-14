import React, {useState} from "react";
import RealTimeValues from "../RealTimeValue/RealTimeValue";

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
                            <input id = "gth1" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date1" type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input id = "gth2" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date2" type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input id = "gth3" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date3" type = "date" class = "constraint-date" />
                        </li>
                        <li>
                            <input id = "gth4" type = "number" class = "GTH-input" placeholder = "geotechnical height" />
                            <input id = "date4" type = "date" class = "constraint-date" />
                        </li>
                    </ul>
                </form>
            </div>
            <RealTimeValues targetData={targetData} />
        </>
    )
}

export default Targets;