import React, {useState} from "react";

const UserInputs = () => {
    const [inputData, setInputData] = useState([]);

    const handleOnChange = (e) => {
        setInputData((currentValues) => ({
            ...currentValues,
            [e.target.id]: e.target.value
        }));
    }

    return (
        <>
            <div id = "user-inputs">
                <form class = "container" onChange={(e) => handleOnChange(e)}>
                    <h1> Enter Pit shape & Topography data </h1>
                    <input type = "file" id = "dwg-file-upload" accept = "all" />
                    <input type = "number" id = "BCM-input" placeholder = "Enter bulk cubic meters" />
                    <input type = "number" id = "GTH-input" placeholder = "Geotechnical height" />
                </form>
            </div>
        </>
    )
}

export default UserInputs;