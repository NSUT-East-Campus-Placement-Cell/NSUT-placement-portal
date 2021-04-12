import React from 'react';
import NavBar from './../common/navbar';
import Footer from './../common/footer';

const Administration = () => {
	return (
		<div className='administration'>
			<NavBar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/downloads/bg.jpg")` }}>
				<h1>Admin</h1>
			</div>
			<div className='list container'>
				<div className='row'>
					<div className='box'>
						<img src='/team/admin/prerna-gaur.jpg' alt='' />
						<div className='member-content'>
							<h1>Dr. Prerna Gaur</h1>
							<h4>Director</h4>
							<h6>NSUT East Campus</h6>
						</div>
					</div>
					<div className='box'>
						<img src='/team/admin/mps.jpg' alt='' />
						<div className='member-content'>
							<h1>Prof. M.P.S. Bhatia</h1>
							<h4>Training & Placement Officer</h4>
							<h6>NSUT</h6>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='box'>
						<img src='https://placekitten.com/g/1000/800' alt='' />
						<div className='member-content'>
							<h1>Prof. S K Dana</h1>
							<h4>Training & Placement Officer</h4>
							<h6>NSUT East Campus</h6>
						</div>
					</div>
					<div className='box'>
						<img src='/team/admin/mayank-bhardwaj.jpg' alt='' />
						<div className='member-content'>
							<h1>Mr. Mayank Bhardwaj</h1>
							<h4>Consultant, Training & Placement</h4>
							<h6>NSUT</h6>
						</div>
					</div>
					<div className='box'>
						<img src='https://placekitten.com/g/1000/800' alt='' />
						<div className='member-content'>
							<h1>Dr. Amita Jain</h1>
							<h4>Training & Placement Member</h4>
							<h6>NSUT East Campus</h6>
						</div>
					</div>
					<div className='box'>
						<img src='/team/admin/rs-rao.jpg' alt='' />
						<div className='member-content'>
							<h1>Dr. Ram Shrinagar Rao</h1>
							<h4>Training & Placement Member</h4>
							<h6>NSUT East Campus</h6>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Administration;
