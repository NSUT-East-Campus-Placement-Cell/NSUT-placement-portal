import React from 'react';
import NavBar from './../common/navbar';
import Footer from './../common/footer';

const CurrentTeam = () => {
	return (
		<div className='current-team'>
			<NavBar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/team/bg.png")` }}>
				<h1>Student Coordinators</h1>
			</div>
			<div className='list container'>
				<h1>Overall Coordinators</h1>
				<div className='row'>
					<div className='box'>
						<img src='https://placekitten.com/g/1000/800' alt='' />
						<div className='content'>
							<h1>Jaspreet Kaur</h1>
							<div className='contact'>
								<div>
									<img src='/icons/phone-call.svg' alt='' />
								</div>
								<div>
									<img src='/icons/envelope.svg' alt='' />
								</div>
								<div>
									<img src='/icons/linkedin.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='box'>
						<img src='https://placekitten.com/g/1000/800' alt='' />
						<div className='content'>
							<h1>Avi Gupta</h1>
							<div className='contact'>
								<div>
									<img src='/icons/phone-call.svg' alt='' />
								</div>
								<div>
									<img src='/icons/envelope.svg' alt='' />
								</div>
								<div>
									<img src='/icons/linkedin.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='box'>
						<img src='https://placekitten.com/g/1000/800' alt='' />
						<div className='content'>
							<h1>Trishant Saxena</h1>
							<div className='contact'>
								<div>
									<img src='/icons/phone-call.svg' alt='' />
								</div>
								<div>
									<img src='/icons/envelope.svg' alt='' />
								</div>
								<div>
									<img src='/icons/linkedin.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='box'>
						<img src='https://placekitten.com/g/1000/800' alt='' />
						<div className='content'>
							<h1>Kartik Bhalla</h1>
							<div className='contact'>
								<div>
									<img src='/icons/phone-call.svg' alt='' />
								</div>
								<div>
									<img src='/icons/envelope.svg' alt='' />
								</div>
								<div>
									<img src='/icons/linkedin.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CurrentTeam;
