import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone2.svg';
import email from '../img/emailme2.svg';
import location from '../img/location2.svg';
import Title from '../Components/Title'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contact'}/>
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={phone} text={'+380 (66) 956 42 93'} title={'Phone'}/>
                    <ContactItem icon={email} text={'denismarushak@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text={'Ukraine, Vinnitsa'} title={'Location'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
