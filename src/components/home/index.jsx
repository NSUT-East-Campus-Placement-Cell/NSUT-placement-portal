import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import { Carousel, Button } from 'react-bootstrap';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/campus/2.png'
						alt='First image'
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/campus/3.png'
						alt='Second image'
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/campus/4.png'
						alt='Third image'
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/campus/5.png'
						alt='Third image'
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<section
				className='aboutNSUT container-fluid'
				style={{ backgroundImage: `url("/campus/1.png")` }}>
				<div className='container'>
					<div className='text'>
						<h1>Our Campus</h1>
						<p>
							NSUT East Campus ( Formerly AIACTR) is a top-grade engineering
							institute functioning from its Campus located at Geeta Colony,
							East Delhi. The Institute has an area of 7.8 acres with modern lab
							facilities and a green ambiance all around. Its objective is to
							meet the growing demand for professionals in the fields of
							engineering and technology.
						</p>
						{/* <p>The foundation Stone of this campus was laid by the Honorable Chief Minister of Delhi Mrs. Sheila Dixit on 24th May 2006. The campus was built in a record time of 18 months by the Public Works Department (PWD). The students have access to all facilities like Centralized Air-Conditioned Labs, well-equipped Library, Student Study Center, RO System, lush green playground, and Rain harvesting system.</p> */}
						<p>
							The Campus is built on a strong foundation of knowledge and
							values. It includes highly qualified and distinguished faculty to
							motivate and challenge students. The college offers not just a
							degree; it offers an experience and a way of life! With ample
							technical and cultural clubs, students work towards a holistic
							development.
						</p>
						<p>
							The College’s vision is to become an Institute of Excellence in
							the field of Undergraduate and Postgraduate Engineering. NSUT EAST
							CAMPUS presently offers Two B.Tech and four M.Tech programs.
						</p>
						<Button variant='success'>Learn more</Button>
					</div>
					<div className='about-img'>
						<img
							// className="d-block"
							src='/campus/1.png'
							alt='Campus image'
						/>
					</div>
				</div>
			</section>
			<section className='whyNSUT container'>
				<h1>Why NSUT East Campus ?</h1>
				<div className='f-row'>
					<div className='f-col'>
						<div className='image-wrapper'>
							<img src='/icons/courses.svg' />
						</div>

						<div>
							<h2>Courses Offered</h2>
							<p>
								NSUT East Campus offers courses at the undergraduate and
								Graduate level in streams of Engineering and Technology.
							</p>
							<p>
								The institute is well known for offering traditional B.Tech and
								M.Tech Programs in domains of Computer Science and Electronics.
							</p>
							<p>
								NSUT East Campus has now introduced innovative and popular
								Undergraduate courses such as CSDA, ECAM and Graduate courses in
								Information Security and Digital Communication.
							</p>
							<a className='learn'>Learn more</a>
						</div>
					</div>
					<div className='f-col'>
						<div className='image-wrapper'>
							<img src='/icons/alumni.svg' />
						</div>

						<div>
							<h2>Our Alumni</h2>
							<p>
								From Flipkart to STMicroelectronics, our alumni have marked
								their presence in the innovative world. At NSUT East Campus,
								we're defining our future while still being committed to
								excellence. Our mission shapes our vision. But our alumni make
								that vision a reality. They ensure our students’ success and
								help us forge a bold new chapter in our extraordinary story
								creating a better world together.
							</p>
							<a className='learn'>Learn more</a>
						</div>
					</div>
				</div>
				<div className='f-row'>
					<div className='f-col'>
						<div className='image-wrapper'>
							<img src='/icons/societies.svg' />
						</div>

						<div>
							<h2>Societies and Events</h2>
							<p>
								Culture is intricately interwoven into life at NSUT EAST CAMPUS.
								Extracurricular activities provide a setting to become involved
								and to interact with other students, thus leading to increased
								learning and inclusive development.
							</p>
							<p>
								Here, when people lead a busy life, the multifarious clubs bring
								a breeze of happiness, relaxation, pleasure, and many joyous
								moments.
							</p>
							<a className='learn'>Learn more</a>
						</div>
					</div>
					<div className='f-col'>
						<div className='image-wrapper'>
							<img src='/icons/recruiters.svg' />
						</div>
						<div>
							<h2>Past Recruiters</h2>
							<p>
								The batch profile consists of students from computer science and
								electronics background. Students at NSUT East Campus throughout
								their graduation and Post-Graduation indulge into various skill
								development programs, internships, training, and cultural as
								well as technical contests. Students have continued to receive
								placement offers from various reputed companies from different
								sectors of the industry.
							</p>
							<a className='learn'>Learn more</a>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
