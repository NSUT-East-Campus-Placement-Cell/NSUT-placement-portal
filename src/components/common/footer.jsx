import React from 'react';
import { useHistory } from 'react-router-dom';

const Footer = () => {
	const history = useHistory();
	return (
		<div className='nsut-footer'>
			<img
				src='/nsut_logo.png'
				className='d-inline-block align-top'
				alt='NSUT logo'
				onClick={() => {
					history.push('/');
					window.scrollTo(0, 0);
				}}
			/>

			<div className='footer-content'>
				<h1>Training and Placement</h1>
				<h2>Netaji Subhas University of Technology East Campus</h2>
				<div className='footer-links'>
					<div
						className='image-wrapper'
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/placement-cell-nsut-east-campus/',
								'_blank'
							)
						}>
						<img src='/icons/linkedin.svg'></img>
					</div>
					<div
						className='image-wrapper'
						onClick={() =>
							window.open('mailto:tpsc.eastcampus@nsut.ac.in', '_blank')
						}>
						<img src='/icons/envelope.svg'></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
