import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Bilal Shakeel
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link sizefont"
                                href="#home"
                                aria-current="page"
                                onClick={() =>
                                    document
                                        .getElementById('home')
                                        .scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sizefont" href="#about">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sizefont" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sizefont" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sizefont" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
