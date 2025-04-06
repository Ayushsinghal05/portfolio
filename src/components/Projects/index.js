import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
        <div className="container projects-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx={15}
                />
            </h1>

        </div>
        <div className="images-container">
            
        </div>
        <Loader type="pacman" />
        </>
    );

}
export default Projects