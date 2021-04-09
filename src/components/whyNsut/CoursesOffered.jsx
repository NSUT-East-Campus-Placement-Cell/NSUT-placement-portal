import React from 'react'
import {Chrono} from 'react-chrono'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
export default function CoursesOffered() {
  return (
      <div>
        <div className='banner courses-offered' style={{backgroundImage: `url("/why-nsut/courses.jpg")` }}>
          <h1>COURSES OFFERED </h1>
        </div>
      
<br/>
<Jumbotron border='light' style={{backgroundColor:'white',padding:'auto',borderRadius:'0',}}>
  <p>
  Our Institute offers a wide variety of Courses to shape up indsutry leaders in the most demanding and innovative technical fields.
  </p>
  <p>
    {/* <Button variant="primary">Learn more</Button> */}
  </p>
</Jumbotron>
<br/>
<Container>
<Row>
<Col md={true}>
      <Card style={{ width: '20rem',
      margin:'auto',
      height:'50rem',
      marginBottom:'5vh'}}>
  <Card.Body>
  <Card.Header style={{fontWeight:'700'}} >Graduate</Card.Header>
    <Card.Title>Computer Science and Engineering (Big Data Analytics) (CSDA)
</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">B.Tech</Card.Subtitle>
    <Card.Text>
    Computer Science is one of the most popular branches of engineering and is rapidly growing day by day. It helps us to solve challenging problems using computation and is the solution to every problem in the world at present and in the future too. In Computer Science Engineering, Students shall also study and specialize in Big Data Analytics. Data is the new gold and keeping that in mind this course has been designed in a manner that promises to teach students how to reap the benefits of big data for businesses and give them a global understanding of the opportunities the technology presents. This course shall impart training in statistics, Data Mining, Data Warehousing, Data Visualization, etc. This would help in understanding and handling huge amounts of Data of an organization and helping them make informed decisions. 
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col md={true}>
<Card style={{ width: '20rem',
margin:'auto',
height:'50rem',marginBottom:'5vh'}}>
  <Card.Body>
  <Card.Header style={{fontWeight:'700'}}>Graduate</Card.Header>
    <Card.Title> Electronics and Communication Engineering (Artificial Intelligence & Machine Learning) (ECAM) </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">B.Tech</Card.Subtitle>
    <Card.Text>
    Electronics and Communication Engineering are the two most specific entities of modern-day technology . This course shall empower students to provide innovative ideas and solutions to problems in the world in the Electronic and Communication Industry. The course gives you thorough knowledge within various disciplines coming under Electronics and Communication such as Embedded System, Internet of Things ( IoT ), Robotics, and Satellite Communication. Within this course, students shall be specialized in Artificial Intelligence and Machine Learning. This course facilitates students to learn insights into the most important technologies driving the modern world namely Artificial Intelligence and machine learning. Students will be given a 360-degree exposure to various Software and Hardware platforms that are used in the Industry.

    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
<Col md={true}>
      <Card style={{ width: '20rem',
      margin:'auto',
      height:'fit-content',marginBottom:'5vh'}}>
  <Card.Body>
  <Card.Header style={{fontWeight:'700'}}>Graduate</Card.Header>
    <Card.Title>Computer Sceince Engineering</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">B.Tech</Card.Subtitle>
    <Card.Text>
    True to our commitment of providing industry
based technology knowledge our college provides
4 year BTECH programme in computer science
which focuses on preparing the next generation
techincally sound and skilled engineers.
CSE wraps around topics like computation,
algorithm analysis,computer hardware and software
among all other tech based topics.Over the past
few years a humungous amount of increased inclination
of students is evident towards this field of science
and our college tries to provide resources to come up
with the best possible way to enhance the students
skills in this sector.

    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col md={true}>
<Card style={{ width: '20rem',
margin:'auto',
height:'fit-content',marginBottom:'5vh'}}>
  <Card.Body>
  <Card.Header style={{fontWeight:'700'}}>Graduate</Card.Header>
    <Card.Title>Electronics and communication engineering
</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">B.Tech</Card.Subtitle>
    <Card.Text>
    Electronics and communication engineering
   THere is 4year BTECH programme for ECE
course in our college.This course basically 
covers topics like Electronics basic components
and their uses,Electronics circuit design,
Micro processor and microcontroller uses,
Signals characteristics and function,Sensors,
Embedded system among other tech based topics.
It prepares the interested students for the
fields like computer hardware, the aerospace
industry,computer software, nanoelectronic
chips,photonics,nanoengineering,robotics,
solar energy harvesting among a vast amount
of career options as a further enhancement
of this course.
</Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
<Col md={true}>
<Card style={{ width: '20rem',
margin:'auto',
height:'30rem',marginBottom:'5vh'}}>
  <Card.Body>
  <Card.Header style={{fontWeight:'700'}}>Post Graduate</Card.Header>
    <Card.Title>Digital Communications</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">M.Tech</Card.Subtitle>
    <Card.Text>
    This course focuses on both theoretical and practical exposure to students in communication and networking areas. It is designed to offer a modern, industry-
oriented education in communication applications. This specialized program focuses on instilling skills related to design, development, observation, and application of Digital Communication circuits & systems. 
</Card.Text>
  </Card.Body>
</Card>
</Col>

<Col md={true}>
<Card style={{ width: '20rem',
margin:'auto',
height:'30rem',
marginBottom:'5vh'}}>
  <Card.Body>
  <Card.Header style={{fontWeight:'700'}}>Post Graduate</Card.Header>
    <Card.Title>Information Security</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">M.Tech</Card.Subtitle>
    <Card.Text>
    The main objective of the program is to train the students to preserve security caused due to the increase in information threats in various organizations from technological growth and information sharing. Students are exposed to various tools for secure communications, analytics, and threat / Risk management. 

    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>

</Container>
    </div>
  )
}
