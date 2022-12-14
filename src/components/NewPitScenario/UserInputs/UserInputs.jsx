import React, {useState} from "react";
// import { MasterContainer } from "../MasterContainer/MasterContainer";
import RealTimeValues from "../RealTimeValue/RealTimeValue";

const UserInputs = () => {

    const [inputData, setInputData] = useState([]);

    const handleOnChange = (e) => {
        setInputData(currentValues => ({
            ...currentValues,
            [e.target.id]: e.target.value,
        }));
    }
console.log(inputData);

    return (
        <>
            <div id = "user-inputs">
                <form class = "container" onChange={(e) => handleOnChange(e)}>
                    <h1> Enter Pit shape & Topography data </h1>
                    <input type = "file" id = "dwg-file-upload" accept = "all" />
                    <input type = "number" id = "BCMinput" placeholder = "Enter bulk cubic meters" />
                    <input type = "number" id = "GTHinput" placeholder = "Geotechnical height" />
                </form>
            </div>
            {/* <MasterContainer inputData={inputData}/> */}
            <RealTimeValues inputData={inputData}/>

        </>

    )
}

export default UserInputs;