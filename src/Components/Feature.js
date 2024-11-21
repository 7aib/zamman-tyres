import React from "react";
import FeatureBox from "./FeatureBox";
import fimage1 from "../images/1.png";
import fimage2 from "../images/2.png";
import fimage3 from "../images/3.png";
import fimage4 from "../images/4.png";

function Feature(){
    return(
        <div id="features">
            <h1>Features</h1>
            <div className="a-container">
                <FeatureBox image={fimage4} title="Tyre Change" />
                <FeatureBox image={fimage1} title="Wheel Balacing" />
                <FeatureBox image={fimage2} title="Oil Change" />
                <FeatureBox image={fimage3} title="3D Wheel alignment" />
            </div>
        </div>
    )
}
export default Feature;