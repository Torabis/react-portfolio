import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <section className="section-title container"> 
            <h1>Contact Me</h1>
            <hr></hr>
            <br />
                <div className="row justify-content-center">
                <div className="section-content">
                        <h2 className="font-weight-bold">
                        <a href="mailto: sadihome@gmail.com">Email: codart.us@gmail.com</a></h2>
                        <br />
                        <br />
                        <div>
                        <h2 className="font-weight-bold">
                        <a href="tel:9494056663">Phone: 949-405-6663</a></h2>
                        </div>
                        <br />
                </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;
