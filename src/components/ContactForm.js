import React from 'react';
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="contact-form app-box box-row">
            <ContactInformations />
            <form className='app-form'>
                <div className="form-input_row">
                    <div className="form-input">
                        <p>First name</p>
                        <input placeholder='David' type="text" name='fname' />
                    </div>
                    <div className="form-input">
                        <p>Last name</p>
                        <input placeholder='Jones' type="text" name='lname' />
                    </div>
                </div>
                <div className="form-input_row">
                    <div className="form-input">
                        <p>Email</p>
                        <input placeholder='myemail@exemple.com' type="text" name='email' />
                    </div>
                    <div className="form-input">
                        <p>Phone</p>
                        <input placeholder='06 22 81 44 65' type="text" name='phone' />
                    </div>
                </div>
                <div className="form-input">
                    <p>Message</p>
                    <textarea name="message" placeholder="Hi, i'm contacting you to let you know...">

                    </textarea>
                </div>
                <div className="form-input submit">
                    <button className='animated' type='submit'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

const ContactInformations = () => {
    return (
        <div className="contact-infos">
            <div className="header">
                <h4>Contact Informations</h4>
                <p>Fill this form and we'll come back to you as soon as possible.</p>
            </div>
            <div className="infos">
                <div className="row">
                    <BsFillTelephoneFill/>
                    <p>+0123 4567 8910</p>
                </div>
                <div className="row">
                    <MdMail/>
                    <p>contact@mycompany.com</p>
                </div>
                <div className="row">
                    <HiLocationMarker/>
                    <p>123 Street of this City</p>
                </div>
            </div>
            <div className="socials">
                <button><FaLinkedinIn /></button>
                <button><BsInstagram /></button>
                <button><BsFacebook /></button>
            </div>
        </div>
    )
}

export default ContactForm;