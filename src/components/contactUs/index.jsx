import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import { Form, Button } from 'react-bootstrap';
import { init, send } from 'emailjs-com';

init('user_HOU00uRGpqhoETRFCKsxp');

const ContactUs = () => {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [success, setSuccess] = React.useState('');
	const [error, setError] = React.useState('');

	return (
		<div className='contact-us'>
			<Navbar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/contact-us/bg.png")` }}>
				<h1>Contact Us</h1>
			</div>
			<div className='content container'>
				<div className='address'>
					<img src='/icons/address.svg' alt='' />
					<h2>Our Address</h2>
					<p>
						Krishna Nagar Road, Near Chacha Nehru Bal Chikitsalaya, Geeta
						Colony, Delhi 110031
					</p>
				</div>
				<div className='email'>
					<img src='/icons/email.svg' alt='' />
					<h2>Email Us</h2>
					<p>
						<a href='mailto:tpsc.eastcampus@nsut.ac.in' target='_'>
							tpsc.eastcampus@nsut.ac.in
						</a>
					</p>
				</div>
				<div className='call'>
					<img src='/icons/call.svg' alt='' />
					<h2>Call Us</h2>
					<p>+91 XXXXXXXXXX</p>
					<p>+91 XXXXXXXXXX</p>
				</div>
			</div>
			<div className='email-form container'>
				<h2>Get in touch</h2>
				<Form
					onSubmit={async event => {
						event.preventDefault();
						setSuccess('');
						setEmail('');

						try {
							await send('service_bt4035j', 'template_ce4pvbe', {
								from_name: name,
								from_email: email,
								reply_to: 'tpsc.eastcampus@nsut.ac.in',
								message: message,
							});
							setSuccess("We've received your email!");
							setEmail('');
							setName('');
							setMessage('');
						} catch (ex) {
							setError('An error occurred, please try again!');
						}
					}}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							value={name}
							onChange={e => setName(e.currentTarget.value)}
							type='text'
							placeholder='Enter name'
							required
						/>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							value={email}
							onChange={e => setEmail(e.currentTarget.value)}
							type='email'
							placeholder='Enter email'
							required
						/>
					</Form.Group>

					<Form.Group controlId='message'>
						<Form.Label>Message</Form.Label>
						<Form.Control
							value={message}
							onChange={e => setMessage(e.currentTarget.value)}
							as='textarea'
							rows={3}
							required
						/>
					</Form.Group>
					{success && <p className='success'>{success}</p>}
					{error && <p className='error'>{error}</p>}

					<Button variant='success' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
			<div className='map container'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14004.730765575665!2d77.2680235!3d28.654248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8bf72d453dbf662!2sNSUT%20East%20Campus%20(Ambedkar%20Institute%20Of%20Advanced%20Communication%20Technologies%20%26%20Research)!5e0!3m2!1sen!2sin!4v1617135959749!5m2!1sen!2sin'
					allowFullScreen={true}
					loading='lazy'></iframe>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
