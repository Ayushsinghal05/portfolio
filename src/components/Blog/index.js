import React from "react";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Blog = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])
    
    return (
        <>
        <div className="container blog-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['B', 'l', 'o', 'g']}
                        idx={15}
                    />
                </h1>
                <p>
                    Welcome to my blog! This is where I share my thoughts, insights, and experiences 
                    about web development, programming, and technology.
                </p>
                <p>
                    I'm currently working on setting up this section.
                </p>
            </div>
        </div>
        </>
    );
}

export default Blog
