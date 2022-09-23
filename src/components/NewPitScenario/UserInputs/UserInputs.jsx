import React from "react";

const UserInputs = () => {

    return (
        <>
            <div id = "user-inputs">
                <h1> Enter the following details </h1>
                <input type = "file" id = "dwg-file-upload" accept = "all" />
                <input type = "number" id = "BCM-input" placeholder = "Enter bulk cubic meters(BCM)"/>
                <input type = "number" id = "GTH-input" placeholder = "Geotechnical height" />
            </div>
        </>
    )
}

export default UserInputs;