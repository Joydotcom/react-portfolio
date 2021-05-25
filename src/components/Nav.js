import React from 'react';
import './style.css'

function Nav() {
    return (
        <header>
             <div id="home" className="container-fluid">
            <nav id="nav-bg" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#home"><i className="fa fa-home"></i></a>
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link " href="#aboutme">About Me</a>
                    <a className="nav-item nav-link" href="#projects">Projects</a>
                    <a className="nav-item nav-link" href="#contactme">Contact Me</a>
                    <a className="nav-item nav-link" href="https://github.com/julesscheil" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="nav-item nav-link" href="https://www.linkedin.com/in/juliana-scheil" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </nav>
            </div>
        </header>
    )
};

export default Nav;