import React, { Component } from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';

class About extends Component {
    render() {
        return (
            <section className="section-title container">
                <h1>Sadegh Torabi</h1>
                <hr></hr>
                <div className="row justify-content-center">
                    <div className="col-10 section-content">
                        <img className="mt-3 mb-5 me" src={coverImage} alt=" Torabis"/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc. Amet consectetur adipiscing elit duis tristique. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Amet tellus cras adipiscing enim. Tristique sollicitudin nibh sit amet commodo nulla. Quam id leo in vitae turpis massa sed elementum. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Venenatis tellus in metus vulputate eu scelerisque felis. Nisi quis eleifend quam adipiscing vitae proin. Mauris nunc congue nisi vitae. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel.
                        </p>
                    </div>  
            </div>
        </section> 
    )}
}
export default About;

