import React from "react";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import intellijIcon from "../../assets/images/IntelliJ_IDEA_Icon.svg.png";

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])
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
            
            <div className="images-container">
                <div className="image-box">
                    <div className="projects-image">
                        <img 
                            src={intellijIcon}
                            alt="Deprecated Controller Remover Plugin"
                        />
                        <button 
                            className="btn" 
                            onClick={() => window.open('https://plugins.jetbrains.com/plugin/28069-deprecated-controller-remover/edit', '_blank')}
                        >
                            View Plugin
                        </button>
                    </div>
                    <div className="content">
                        <p className="title">Deprecated Controller Remover</p>
                        <h4 className="description">JetBrains Plugin</h4>
                        <p className="description">
                            A JetBrains IDE plugin that helps developers remove deprecated controller methods 
                            from their codebase, improving code quality and maintainability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );

}
export default Projects