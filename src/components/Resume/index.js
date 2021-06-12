import React, { Component } from 'react';
import resume from '../../assets/resume.png';

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Resume extends Component {
    render() {
        return(
            <section className="section-title container">
                <h1>My Resume</h1>
                <hr></hr>
                <div className="justify-content-center mt-5" id="resume">
                    <h2 className="font-weight-bold mb-4">Download my resume</h2>
                    <div>
                    <a href="https://github.com/Torabis/react-portfolio/raw/main/src/assets/TORABICV.pdf" className="text-light text-decoration-none"><FontAwesomeIcon icon={faDownload} size="2x" alt="Download Resume"/></a>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col">
                        <img src={resume} style={{ width: "70%" }} alt="resume" />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col">
                        
                    </div>
                </div>

                <br />
            </section>
        )
    }
}

export default Resume;
