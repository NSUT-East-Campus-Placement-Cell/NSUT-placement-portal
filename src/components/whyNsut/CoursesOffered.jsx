import React from 'react';
import { Row, Card, Container, Col } from 'react-bootstrap';
import NavBar from './../common/navbar';
import Footer from './../common/footer';

export default function CoursesOffered() {
	return (
		<div>
			<NavBar />
			<div className='courses'>
				<div
					className='banner courses-offered'
					style={{ backgroundImage: `url("/why-nsut/courses.jpg")` }}>
					<h1>COURSES OFFERED</h1>
				</div>
				<Container style={{ marginTop: '5vh' }}>
					<p className='desc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
						aliquam sit assumenda ullam asperiores. Vel odio eaque atque laborum
						ipsam deleniti consequatur in dolorum tempore provident cum voluptas
						repellat, quis hic ipsum magni quaerat quidem maxime distinctio
						asperiores vero dolore modi odit? Enim neque, reprehenderit dolor
						voluptate perspiciatis incidunt!
					</p>
					<h3 className='heading'>Graduate Courses</h3>
					<Row>
						<Col lg={true}>
							<Card className='xl'>
								<Card.Body>
									<Card.Title>
										Computer Science and Engineering (Big Data Analytics) (CSDA)
									</Card.Title>
									<Card.Subtitle>
										B.Tech (Admission Batch 2020 Onwards - NSUT)
									</Card.Subtitle>
									<Card.Text>
										<p>
											Computer Science is one of the most popular branches of
											engineering and is rapidly growing day by day. It helps us
											to solve challenging problems using computation and is the
											solution to every problem in the world at present and in
											future too. In Computer Science Engineering, Students
											shall also study and specialize in Big Data Analytics.
										</p>
										<p>
											Data is the new gold and keeping that in mind this course
											has been designed in a manner that promises to teach
											students how to reap benefits of big data for businesses
											and give them a global understanding of the opportunities
											the technology presents. This course shall impart training
											in statistics, Data Mining, Data Warehousing, Data
											Visualization etc. This would help in understanding and
											handling huge amounts of Data of an organization and
											helping them make informed decisions.
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={true}>
							<Card className='xl'>
								<Card.Body>
									<Card.Title>
										Electronics and Communication Engineering (Artificial
										Intelligence & Machine Learning) (ECAM)
									</Card.Title>
									<Card.Subtitle>
										B.Tech (Admission Batch 2020 Onwards - NSUT)
									</Card.Subtitle>
									<Card.Text>
										<p>
											Electronics and Communication Engineering are the two most
											specific entities of modern day technology. This course
											shall empower students to provide innovative ideas and
											solution to problems in the world in the Electronic and
											Communication Industry. The course gives you a thorough
											knowledge within various disciplines coming under
											Electronics and Communication such as Embedded System,
											Internet of Things (IOT), Robotics etc.
										</p>
										<p>
											Within this course, students shall be specialized in
											Artificial Intelligence and Machine Learning. This Course
											provides an opportunity to the students to learn the
											insights to the most important technologies driving the
											modern world namely Artificial Intelligence and machine
											learning. Students will be given a 360 degree exposure to
											various Hardware and Software platforms that are used in
											Industry for AI and IoT development.
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg={true}>
							<Card className='lg'>
								<Card.Body>
									<Card.Title>Computer Science Engineering (CSE)</Card.Title>
									<Card.Subtitle>
										B.Tech (Admission upto 2019 - GGSIPU)
									</Card.Subtitle>
									<Card.Text>
										<p>
											True to our commitment of providing industry based
											technology knowledge our college provides 4 year B.Tech
											programme in computer science which focuses on preparing
											the next generation technically sound and skilled
											engineers. CSE wraps around topics like computation,
											algorithm analysis,computer hardware and software among
											all other tech based topics.Over the past few years a
											humongous amount of increased inclination of students is
											evident towards this field of science and our college
											tries to provide resources to come up with the best
											possible way to enhance the students skills in this
											sector.
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={true}>
							<Card className='lg'>
								<Card.Body>
									<Card.Title>
										Electronics and Communication Engineering (ECE)
									</Card.Title>
									<Card.Subtitle>
										B.Tech (Admission upto 2019 - GGSIPU)
									</Card.Subtitle>
									<Card.Text>
										<p>
											There is 4 year B.Tech programme for ECE course in our
											college. This course primarily covers topics like
											Electronics basic components and their uses,Electronics
											circuit design, Micro processor and micro-controller uses,
											Signals characteristics and function,Sensors, Embedded
											system among other tech based topics. It prepares the
											interested students for the fields like computer hardware,
											the aerospace industry,computer software, nano-electronic
											chips, photonics, nano-engineering, robotics, solar energy
											harvesting among a vast amount of career options as a
											further enhancement of this course.
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<h3 className='heading'>Post Graduate Courses</h3>
					<Row>
						<Col lg={true}>
							<Card className='md'>
								<Card.Body>
									<Card.Title>Information Security (IS)</Card.Title>
									<Card.Subtitle>M.Tech</Card.Subtitle>
									<Card.Text>
										<p>
											The main objective of the programme is to train the
											students to preserve security caused due to the increase
											in information threats in various organizations from
											technological growth and information sharing. Students are
											exposed to various tools for secure communications,
											analytics, and threat/risk management.
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={true}>
							<Card className='md'>
								<Card.Body>
									<Card.Title>Digital Communications (DC)</Card.Title>
									<Card.Subtitle>M.Tech</Card.Subtitle>
									<Card.Text>
										<p>
											This course focusses on both theoretical and practical
											exposure to students in communication and networking
											areas. It is designed to offer a modern, industry-oriented
											education in communication applications. This specialized
											programme focuses on instilling skills related to design,
											development, observation, and application of Digital
											Communication circuits & systems.
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	);
}
