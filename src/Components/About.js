import React from "react";
import aboutimage from "../images/about.jpg"

function About(){
    return(
        <div id="about">
            <div className="about-image">
                <image src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US ...!</h1>
                <p> Lorem50.....................................................................................
                    ...............................................................................\
                    ...........................

                </p>
                <button> READ MORE </button>
            </div>



        </div>
    )
}
export default About;