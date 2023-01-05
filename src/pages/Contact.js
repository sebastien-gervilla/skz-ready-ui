import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section className='app-page' id='contact-page'>
            <div className="text">
                <h3>Contact us</h3>
                <p>Any question or remark ? Just write us message !</p>
            </div>
            <ContactForm />
        </section>
    );
};

export default Contact;