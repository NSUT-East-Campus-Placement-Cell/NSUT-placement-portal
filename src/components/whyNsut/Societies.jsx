import React from 'react';
import { Row, Card, Container, Col } from 'react-bootstrap';
import NavBar from './../common/navbar';
import Footer from './../common/footer';

export default function Societies() {
	return (
		<div>
			<NavBar />
			<div className='societies'>
				<div
					className='banner our-societies'
					style={{ backgroundImage: `url("/why-nsut/societies.jpg")` }}>
					<h1>OUR SOCIETIES</h1>
				</div>
				<Container style={{ marginTop: '5vh' }}>
					<p className='desc'>
						NSUT East Campus thrives on culture and technical events. Various
						societies spearhead the events and make them a lasting experience
						for everyone. Many Technical Clubs and Non- Technical Clubs have
						been actively involved on the campus - recruiting new students,
						organizing workshops, and participating in various competitions
						across various disciplines. NSUT east campus is a place to learn and
						interact and the College societies are just our flag bearer in that
						direction. We promote an awareness of cultural diversity on campus.
					</p>

					<Row>
						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/robotics.jpg' />
								<Card.Header>SR-AIT</Card.Header>
								<Card.Body>
									<Card.Title>Society Of Robotics</Card.Title>
									<Card.Text>
										Society of Robotics has been actively involved with students
										directly from the first year and is one of the most
										cherished clubs on campus. The club aims to technically
										strengthen students by integrating their skills in the
										various fields of Engineering and Technology, so as to cope
										up with the highly competitive environment. The club
										consists of students who love playing with gadgets and have
										the fire to construct new things and explore, experiment and
										try new things.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/coding.jpg' />
								<Card.Header>ScriptX</Card.Header>
								<Card.Body>
									<Card.Title>Software Development Club</Card.Title>
									<Card.Text>
										If you are into computers, "ScriptX" is the club for you!
										It's open for all students of the college. You don't need to
										be tech geeks to join this club. All you need is creativity
										to build and passion to continue. Members get together to
										research and collaborate on projects. The objective of the
										club is to provide a platform for all coding lovers to get
										together and build something interesting. The club plans
										various training sessions to learn and contests to apply the
										jargon!
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/web.jpg' />
								<Card.Header>Web.js</Card.Header>
								<Card.Body>
									<Card.Title>Web Development Club</Card.Title>
									<Card.Text>
										The objective of the Website Development club is to promote
										innovation and creativity in the website development domain.
										The aim is to establish a platform for like-minded people
										who wish to grow professionally in the field of web
										development. In addition to training workshops and seminars,
										the itinerary includes a number of contests to bring the
										talent on stage and help students increase their visibility.
										Students guided by their seniors and faculty guides work
										towards being the webmaster!!
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/dance.jpg' />
								<Card.Header>IMMORTALS</Card.Header>
								<Card.Body>
									<Card.Title>Dance Club</Card.Title>
									<Card.Text>
										Dancing with the feet is one thing but dancing with the
										heart is another at the NSUT East Campus dance society, and
										here we just believe in doing that. The club believes in
										engaging the dancer not only in technique-based training but
										also finer nuances like expressing and breathing from the
										soul.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/music.jpg' />
								<Card.Header>SAARANG</Card.Header>
								<Card.Body>
									<Card.Title>Music Club</Card.Title>
									<Card.Text>
										A music club is a place where students come to jam, learn
										and make music of different flavors. It promotes the music
										culture and also participates in events that encompass many
										genres, both Western and Eastern.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/theatre.jpg' />
								<Card.Header>Hunkaar</Card.Header>
								<Card.Body>
									<Card.Title>Dramatics Society</Card.Title>
									<Card.Text>
										The Dramatic Society of the college works to sensitize
										people to the realities of the society we live in,
										questioning stereotypes and providing solutions to social
										ills. This society has produced thought-provoking plays on
										the lines of human trafficking to nationalism. The Theatre
										society bagged a Runner-Up position at the GGSIPU Cultural
										fest in 2020 adding their names in the history book of the
										NSUT East Campus.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/photography.jpg' />
								<Card.Header>Constant Vision</Card.Header>
								<Card.Body>
									<Card.Title>Photography Society</Card.Title>
									<Card.Text>
										The art or practice of capturing photographs is called
										photography. The photography club of the college organizes
										activities to enable the members to get a chance to learn
										photography and become sensitized to the world about us.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/literary.jpg' />
								<Card.Header>Alfaaz</Card.Header>
								<Card.Body>
									<Card.Title>Literary Club</Card.Title>

									<Card.Text>
										A literary club is a place where students can meet to read
										and write. It is based on the creative skills of a writer.
										The club inspires students to develop a taste for literature
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col md={true}>
							<Card border='dark' style={{ marginBottom: '5vh' }}>
								<Card.Img variant='top' src='/societies/fine_art.jpg' />
								<Card.Header>Fine Arts</Card.Header>
								<Card.Body>
									<Card.Title>Art Club</Card.Title>
									<Card.Text>
										The club is dedicated to promoting all aspects of fine arts.
										It conducts activities to stimulate and encourage artistic
										endeavors among students. Art is not limited to just paints
										and brushes but can be produced out of anything.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<br />
				</Container>
			</div>
			<Footer />
		</div>
	);
}
