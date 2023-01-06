import React from 'react';
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import useTranslate from '../hooks/useTranslate';

const ContactForm = () => {

    const translate = useTranslate('contact.form.');

    return (
        <div className="contact-form app-box box-row">
            <ContactCard />
            <form className='app-form'>
                <div className="form-input_row">
                    <div className="form-input">
                        <p>{translate('firstName')}</p>
                        <input placeholder='David' type="text" name='fname' />
                    </div>
                    <div className="form-input">
                        <p>{translate('lastName')}</p>
                        <input placeholder='Jones' type="text" name='lname' />
                    </div>
                </div>
                <div className="form-input_row">
                    <div className="form-input">
                        <p>Email</p>
                        <input placeholder='myemail@exemple.com' type="text" name='email' />
                    </div>
                    <div className="form-input">
                        <p>{translate('phone')}</p>
                        <input placeholder='06 22 81 44 65' type="text" name='phone' />
                    </div>
                </div>
                <div className="form-input">
                    <p>Message</p>
                    <textarea name="message" placeholder={translate('messagePlaceholder')}>

                    </textarea>
                </div>
                <div className="form-input submit">
                    <button className='animated' type='submit'>
                        {translate('submit')}
                    </button>
                </div>
            </form>
        </div>
    );
};

const ContactCard = () => {

    const translate = useTranslate('contact.card.');

    return (
        <div className="contact-card">
            <div className="header">
                <h4>{translate('title')}</h4>
                <p>{translate('desc')}</p>
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