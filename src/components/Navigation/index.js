import React from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/cover/logo.png';

function Navigation() {

    return (
        <Nav variant="pills" defaultActiveKey="/react-portfolio/#/home" className="row navigation" id="navigation">
            
            <Nav.Item>
                <Nav.Link eventKey="/home" href="/react-portfolio/#/home" id="hometab">
                <img className="mt-5 mb-5 w-25 h-25" src={logo} alt=" Torabis"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/react-portfolio/#/about" className="" >About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/portfolio" href="/react-portfolio/#/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/contact" href="/react-portfolio/#/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/resume" href="/react-portfolio/#/resume">Resume</Nav.Link>
            </Nav.Item>
        </Nav>     

    );
};

export default Navigation;
