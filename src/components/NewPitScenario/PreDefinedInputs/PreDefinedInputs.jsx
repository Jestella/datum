import React, {useState} from "react";
import { useEffect } from "react";

const PreDefinedInputs = () => {

    const [latLong, setLatLong] = useState([]);

    const getCoordinates = () => {
        const geoOptions = {
            enableHighAccuracy: true,
            timeout: 5000
        };
    
        const geoLocationSuccess = (position) => {
            let longlatArr = [];
            longlatArr.push(position.coords.latitude, position.coords.longitude);
            setLatLong(longlatArr);
        }
    
        const geoLocationError = (error) => {
            console.log(error);
        }
    
        navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError, geoOptions);
    }

    const getRainFall = () => {
        
    }

    useEffect(() => {
        getCoordinates();
    }, []);

    return (
        <>
            <div id = "pre-defined-inputs">
                <div class = "container"> 
                    <h1> Site Conditions </h1>
                    <div class = "pre-defined-location"> Latitude: {latLong[0]}, longitude: {latLong[1]} </div> 
                    <div class = "pre-defined-rainfall"> Rainfall </div>
                    <div class = "pre-defined-areaofpitfall"> Area of pitfall </div>
                </div>
            </div>
        </>
    )
}

export default PreDefinedInputs;