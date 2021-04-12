import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import { Carousel, Button } from 'react-bootstrap';

const AboutUs = () => {
	return (
		<div className='about-us'>
			<Navbar />

			{/* about nsut first section */}
			<section
				className='wrapper'
				style={{ backgroundImage: `url("/campus/1.jpeg")` }}>
				<div className='container'>
					<div className='row px-2'>
						<div className='col-12 col-md-6 py-3 content'>
							<h2>About NSUT East Campus </h2>
							<p>
								NSUT East Campus ( Formerly AIACTR) is a top-grade engineering
								institute functioning from its Campus located at Geeta Colony,
								East Delhi. The Institute has an area of 7.8 acres with modern
								lab facilities and a green ambiance all around.
							</p>
							<p>
								The Campus is built on a strong foundation of knowledge and
								values. It includes highly qualified and distinguished faculty
								to motivate and challenge students. With ample technical and
								cultural clubs, students work towards a holistic development.
							</p>

							{/* <ul style={{listStyle: 'disc'}}>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Malesuada proin libero nunc consequat interdum varius sit amet.</li>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.</li>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Neque vitae tempus quam pellentesque.</li>
                </ul> */}
						</div>
						<div className='col-12 col-md-6 '>
							<img
								src='/campus/1.jpeg'
								alt='Placement Process'
								className='img-fluid'
							/>
						</div>
					</div>
				</div>
			</section>
			{/* about nsut end */}
			{/* second section */}
			<section className='placement-cell'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2>About The Placement Cell</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Mauris ultrices eros. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Mauris ultrices eros in cursus turpis massa
								tincidunt dui.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Mauris ultrices eros. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Mauris ultrices eros in cursus turpis massa
								tincidunt dui.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Mauris ultrices eros. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Mauris ultrices eros in cursus turpis massa
								tincidunt dui.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Mauris ultrices eros. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Mauris ultrices eros in cursus turpis massa
								tincidunt dui.
							</p>
							<br />
						</div>
						<div className='col-12'>
							<Carousel>
								<Carousel.Item>
									<img
										className='d-block w-100'
										src='https://placekitten.com/1920/1080'
										alt='First slide'
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className='d-block w-100'
										src='https://placekitten.com/1920/1080'
										alt='Second slide'
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className='d-block w-100'
										src='https://placekitten.com/1920/1080'
										alt='Third slide'
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className='d-block w-100'
										src='https://placekitten.com/1920/1080'
										alt='Third slide'
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className='d-block w-100'
										src='https://placekitten.com/1920/1080'
										alt='Third slide'
									/>
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
				</div>
			</section>
			{/* end section */}
			<Footer />
		</div>
	);
};

export default AboutUs;
