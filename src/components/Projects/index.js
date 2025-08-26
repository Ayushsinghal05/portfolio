import React from "react";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import intellijIcon from "../../assets/images/IntelliJ_IDEA_Icon.svg.png";
import cppIcon from "../../assets/images/cplusplus.svg";

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
                            src={cppIcon}
                            alt="Shell Interpreter"
                        />
                        <button 
                            className="btn" 
                            onClick={() => window.open('https://github.com/Ayushsinghal05/Shell', '_blank')}
                        >
                            View Project
                        </button>
                    </div>
                    <div className="content">
                        <p className="title">Shell Interpreter</p>
                        <h4 className="description">C++ System Programming</h4>
                        <p className="description">
                            A custom Unix shell implementation written in C++ with advanced features including 
                            command parsing, I/O redirection, pipes, background processes, wildcard expansion, 
                            and built-in commands. Features lexical analysis with Flex and syntax parsing with Yacc/Bison.
                        </p>
                    </div>
                </div>
                
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