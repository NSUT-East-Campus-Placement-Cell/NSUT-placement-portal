import React from 'react';
import NavBar from './../common/navbar';
import Footer from './../common/footer';
import { Row, Card, Container, Col } from 'react-bootstrap';

export default function PastRecruiters() {
	return (
		<div>
			<NavBar />
			<div
				className='banner past-recruiters'
				style={{ backgroundImage: `url("/why-nsut/recruitment.png")` }}>
				<h1>PAST RECRUITERS</h1>
			</div>
			<Container style={{ marginTop: '5vh' }}>
				<div class='recruiters' style={{ marginBottom: '7vh' }}>
					<center>
						<p>
							The batch profile consists of students from computer science and
							electronics background. Students at NSUT East Campus throughout
							their graduation and Post-Graduation indulge into various skill
							development programs, internships, training, and cultural as well
							as technical contests. Students have continued to receive
							placement offers from various reputed companies from different
							sectors of the industry.
						</p>
						<img src='/Companies.jpg' style={{ maxWidth: '90%' }} />
					</center>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
