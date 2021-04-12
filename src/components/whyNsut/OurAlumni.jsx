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
					style={{ backgroundImage: `url("/why-nsut/alumni.jpg")` }}>
					<h1>OUR ALUMNI</h1>
				</div>
				<Container style={{ marginTop: '5vh' }}>
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
