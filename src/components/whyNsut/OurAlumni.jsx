import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap'



export default function OurAlumni() {
  return (
    <div>
<Container style={{marginTop:'5vh'}}>
  <Row>
    <Col md={true}><Card border='light' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
  <Card.Img variant="top" 
  src="/randomguy.jpg" 
  />
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>

    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  
    <Col md={true}><Card border='light' style={{ width: '18rem',margin:'auto',marginBottom:'5vh'}}>
  <Card.Img variant="top" src="/randomguy.jpg"/>
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
 
    <Col md={true}><Card border='light' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
  <Card.Img variant="top" src="/randomguy.jpg" />
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>

  </Row>
  <br/>
  <Row>
    <Col md={true}><Card border='light' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
  <Card.Img variant="top" src="/randomguy.jpg" />
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>

    <Col md={true}><Card border='light' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
  <Card.Img variant="top" src="/randomguy.jpg" />
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col md={true}><Card border='light' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
  <Card.Img variant="top" src="/randomguy.jpg" />
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  </Row>
</Container>
  


    </div>
  )
}
