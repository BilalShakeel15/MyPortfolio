import React from 'react';
import '../styles/Hero.css';
import mypic from '../images/My pic.jpg';
import Resume from '../Resume/Bilal Shakeel Resume.pdf';

function Hero() {
    return (
        <section id="home" className="hero-container">
            <div className="hero-text">
                <h1 className="hero-heading">
                    <span className="line line-1">
                        Hello, I'm <span className="highlight">Bilal Shakeel</span>
                    </span>
                    <br />
                    <span className="line-2">Full Stack Web Developer</span>
                </h1>
                <p className="hero-description">
                    I am a student at FAST University with a passion for building interactive web applications using modern technologies like React, Node.js, MongoDB, and .NET. I am a quick learner, eager to contribute my skills and fresh ideas to impactful projects. With a strong foundation in computer science and a collaborative mindset, I thrive in team environments. Let’s create something amazing together!
                </p>
                <a href={Resume} download="Bilal_Shakeel_Resume.pdf">
                    <button className="download-btn">Download Resume</button>
                </a>
                <a href="https://www.linkedin.com/in/bilalshakeel15/" style={{ marginLeft: '10px' }}>
                    <button className="download-btn" style={{ backgroundColor: 'rgb(182, 74, 182)' }}>
                        Linkedin
                    </button>
                </a>
            </div>
            <div className="hero-image">
                <img src={mypic} alt="Bilal Shakeel" />
            </div>
        </section>
    );
}

export default Hero;
