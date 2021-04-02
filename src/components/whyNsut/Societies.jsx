import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap'
export default function Societies() {
    return(<div>
    
        <Carousel controls={false} indicators={false}>
        <Carousel.Item >
        <div>
          <img
            className="d-block w-100"
            src="/societies.jpg"
            alt="First slide"
            style={{height:'50vh',objectFit:'cover'}}
          />
          </div>
          
          <Carousel.Caption>
            <h3>SOCIETIES</h3>
          </Carousel.Caption>
        </Carousel.Item>
          </Carousel>
          <Container style={{marginTop:'5vh'}}>
  <Row>
    <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
  <Card.Img variant="top" 
  src="/randomguy.jpg" 
  />
  <Card.Header>Alfaaz</Card.Header>
  <Card.Body>
    <Card.Title>Literary Club</Card.Title>

    <Card.Text>
        The literary club is a place where students can meet to read and write.its based on using
        the skills to be an innovative writer
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  
    <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh'}}>
  <Card.Img variant="top" src="/randomguy.jpg"/>
  <Card.Header>Society Of Robotics</Card.Header>
  <Card.Body>
    <Card.Title>Robotics</Card.Title>
    <Card.Text>
        the club aims to technically strengthen the skills of students and knowledge in the fields of robotics technology
    </Card.Text>

  </Card.Body>
</Card></Col>
    <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
    <Card.Img variant="top" src="/randomguy.jpg" />
    <Card.Header>IMMORTALS</Card.Header>
    <Card.Body>
    <Card.Title>Dancing Club</Card.Title>
    <Card.Text>
        Dancing with the feet is one thing but dancing with the heart is another and this
        club really believes in this
    </Card.Text>
    
    </Card.Body>
    </Card></Col>
 
    
</Row>

<Row>
    <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
    <Card.Img variant="top" src="/randomguy.jpg" />
    <Card.Header>SAARANG</Card.Header>
    <Card.Body>
        <Card.Title>Music Club</Card.Title>
        <Card.Text>
            Its a place where students come to jam,learn and make music of different flavours
        </Card.Text>
        
    </Card.Body>
    </Card></Col>

 

    <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
    <Card.Img variant="top" src="/randomguy.jpg" />
    <Card.Header>Hunkaar</Card.Header>
    <Card.Body>
    <Card.Title>Dramatics Society</Card.Title>
    <Card.Text>
        It works to sensitize people and make them aware of the realities of the society we live in.
    </Card.Text>
    
    </Card.Body>
    </Card></Col>

    <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
    <Card.Img variant="top" src="/randomguy.jpg" />
    <Card.Header>Constant Vision</Card.Header>
    <Card.Body>
    <Card.Title>Photography Society</Card.Title>
    <Card.Text>
        Photography is all about study of light,compositin and a good understanding of the equipment
    </Card.Text>
    
    </Card.Body>
    </Card></Col>

  </Row>
  <br/>
  </Container></div>)
}