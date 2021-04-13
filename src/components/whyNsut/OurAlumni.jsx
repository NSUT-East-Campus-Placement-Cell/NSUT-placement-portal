import React from 'react';
import { Row, Card, Container, Col } from 'react-bootstrap';
import NavBar from './../common/navbar';
import Footer from './../common/footer';

export default function OurAlumni() {
	return (
		<div>
			<NavBar />
			<div className='alumni'>
				<div
					className='banner our-alumni'
					style={{ backgroundImage: `url("/why-nsut/alumni.png")` }}>
					<h1>OUR ALUMNI</h1>
				</div>
				<Container style={{ marginTop: '5vh' }}>
					<p className='desc'>
						From Flipkart to STMicroelectronics, our alumni have marked their
						presence in the innovative world. At NSUT East Campus, we're
						defining our future while still being committed to excellence. Our
						mission shapes our vision. But our alumni make that vision a
						reality. They ensure our students’ success and help us forge a bold
						new chapter in our extraordinary story creating a better world
						together.
					</p>
					<Row>
						<Col md={true}>
							<Card
								border='dark'
								style={{ width: '18rem', margin: 'auto', marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/randomguy.jpg' />
								<Card.Header>Header</Card.Header>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={true}>
							<Card
								border='dark'
								style={{ width: '18rem', margin: 'auto', marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/randomguy.jpg' />
								<Card.Header>Header</Card.Header>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={true}>
							<Card
								border='dark'
								style={{ width: '18rem', margin: 'auto', marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/randomguy.jpg' />
								<Card.Header>Header</Card.Header>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<br />
					<Row>
						<Col md={true}>
							<Card
								border='dark'
								style={{ width: '18rem', margin: 'auto', marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/randomguy.jpg' />
								<Card.Header>Header</Card.Header>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={true}>
							<Card
								border='dark'
								style={{ width: '18rem', margin: 'auto', marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/randomguy.jpg' />
								<Card.Header>Header</Card.Header>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={true}>
							<Card
								border='dark'
								style={{ width: '18rem', margin: 'auto', marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/randomguy.jpg' />
								<Card.Header>Header</Card.Header>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
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
