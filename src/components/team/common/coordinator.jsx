import React from 'react';

export default function Coordinator(props) {
	const { imageURL, name, mobile, email, linkedinURL } = props;
	return (
		<div className='box'>
			<img src={imageURL ? imageURL : '/team/students/generic.png'} alt='' />
			<div className='content'>
				<h1>{name}</h1>
				<div className='contact'>
					{mobile && (
						<div onClick={() => window.open(`tel:${mobile}`, '_blank')}>
							<img src='/icons/phone-call.svg' alt='' />
						</div>
					)}
					{email && (
						<div onClick={() => window.open(`mailto:${email}`, '_blank')}>
							<img src='/icons/envelope.svg' alt='' />
						</div>
					)}
					{linkedinURL && (
						<div onClick={() => window.open(linkedinURL, '_blank')}>
							<img src='/icons/linkedin.svg' alt='' />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
