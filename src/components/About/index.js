import React, { Component } from "react";
import coverImage from "../../assets/profile-picture/profilepic.png";

class About extends Component {
  render() {
    return (
      <section className="section-title container">
        <h1>Toby Torabi</h1>
        <hr></hr>
        <div className="row justify-content-center">
          <div className="col-10 section-content">
            <img className="mt-3 mb-5 me" src={coverImage} alt=" Torabis" />
            <p>
              || Full Stack Web Developer || <br/>
              Seeking to obtain a creative and
              challenging position that utilizes current knowledge of web
              development and design. <br/>
              Having a positive outlook and always
              willing to learn new traits. Certified from University Of Berkeley
              in full stack technologies to design, deploy and test Web
              Applications.
              A troubleshooter with background of Information
              Technology Support to break down problems and build a new
              solutions.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
