import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'

const ContactUs = () => {
    return (<div className='contact-us'>
        <Navbar />
        <div className='heading'>
            <h1>Contact Us</h1>
        </div>
        <div className='content container' >
            <div className='address'>
                <img src="/icons/address.svg" alt="" />
                <h2>Our Address</h2>
                <p>Krishna Nagar Road, Near Chacha Nahru Bal Chikitsalaya, Geeta Colony, Delhi 110031</p>
            </div>
            <div className='email'>
                <img src="/icons/email.svg" alt="" />
                <h2>Email Us</h2>
                <p><a href='mailto:tpsc.eastcampus@nsut.ac.in' target='_'>tpsc.eastcampus@nsut.ac.in</a></p>
            </div>
            <div className='call'>
                <img src="/icons/call.svg" alt="" />
                <h2>Call us</h2>
                <p>+91 XXXXXXXXXX</p>
                <p>+91 XXXXXXXXXX</p>
            </div>
        </div>
        <div className='map container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14004.730765575665!2d77.2680235!3d28.654248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8bf72d453dbf662!2sNSUT%20East%20Campus%20(Ambedkar%20Institute%20Of%20Advanced%20Communication%20Technologies%20%26%20Research)!5e0!3m2!1sen!2sin!4v1617135959749!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <Footer />
    </div>);
}

export default ContactUs;