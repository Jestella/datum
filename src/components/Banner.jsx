import React from "react";

import bannerLogo from "../assets/banner-logo.svg";
import "../styles/banner/banner.css";

const Banner = () => {

    return (
        <>
            <div class = "banner">
                <img id = "banner-logo" src = {bannerLogo} alt = "banner logo" />
                <p> An all-in-one solution packed into a software to help you streamline your mining stuff. </p>
            </div>
        </>
    )
}

export default Banner;