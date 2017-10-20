import React, { Component } from 'react'
import ContactForm from "./ContactForm";

class ContactPage extends Component {
    render() {
        return (
            <div className="contact-page">
                <h1>Contact</h1>
                <ContactForm />
            </div>
        )
    }
}

export default ContactPage