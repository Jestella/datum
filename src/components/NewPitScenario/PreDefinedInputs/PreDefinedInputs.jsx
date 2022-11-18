import React, {useState} from "react";
import { useEffect } from "react";
import { MasterContainer } from "../MasterContainer/MasterContainer";
import RealTimeValues from "../RealTimeValue/RealTimeValue";

const PreDefinedInputs = () => {

    const [latLong, setLatLong] = useState("");
    const [rainFall, setRainFall] = useState("");
    const [areaOfPitfall, setAreaOfPitFall] = useState("");


    const getCoordinates = () => {
        setLatLong(document.querySelector(".pre-defined-location").innerHTML);
    }

    const getRainFall = () => {
        setRainFall(document.querySelector(".pre-defined-rainfall").innerHTML);
    }

    const getAreaOfPitfall = () => {
        setAreaOfPitFall(document.querySelector(".pre-defined-areaofpitfall").innerHTML);
    }

    useEffect(() => {
        getCoordinates();
        getRainFall();
        getAreaOfPitfall();
    }, []);

    return (
        <>
            <div id = "pre-defined-inputs">
                <div class = "container"> 
                    <h1> Site Conditions </h1>
                    <div class = "pre-defined-location"> Latitude: 999, Longitude: 999 </div> 
                    <div class = "pre-defined-rainfall"> Rainfall: 999 </div>
                    <div class = "pre-defined-areaofpitfall"> Area of pitfall: 999 </div>
                </div>
            </div>
            {/*<MasterContainer predefinedData={[latLong, rainFall, areaOfPitfall]} />*/}
            {/*<RealTimeValues predefinedData={[latLong, rainFall, areaOfPitfall]} />*/}
        </>
    )
}

export default PreDefinedInputs;


//LOCATION API FOR LATER
        // const geoOptions = {
        //     enableHighAccuracy: true,
        //     timeout: 5000
        // };
    
        // const geoLocationSuccess = (position) => {
        //     let longlatArr = [];
        //     longlatArr.push(position.coords.latitude, position.coords.longitude);
        //     setLatLong(longlatArr);
        // }
    
        // const geoLocationError = (error) => {
        //     console.log(error);
        // }
    
        // navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError, geoOptions);