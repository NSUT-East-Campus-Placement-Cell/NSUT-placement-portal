import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

const Process = () => {
	return (
		<div className='process'>
			<Navbar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/downloads/bg.png")` }}>
				<h1>Process</h1>
			</div>
			<div className='image-wrapper container'>
				<img
					src={
						window.innerWidth > 992
							? '/process/desktop-process.svg'
							: '/process/mobile-process.svg'
					}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Process;
