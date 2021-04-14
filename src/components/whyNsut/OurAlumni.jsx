import React from 'react'
import {Row, Card, Container, Col} from 'react-bootstrap';
import NavBar from './../common/navbar';
import Footer from './../common/footer';



export default function OurAlumni() {
  return (
    <div>
      <NavBar />
      <div className='alumni'>
        <div className='banner our-alumni' style={{backgroundImage: `url("/why-nsut/alumni.jpg")` }}>
              <h1>OUR ALUMNI</h1>
        </div>
        <Container style={{marginTop:'5vh'}}>
          <p className='desc'>From Flipkart to STMicroelectronics, our alumni have marked their presence in the innovative world. At NSUT East Campus, we're defining our future while still being committed to excellence. Our mission shapes our vision. But our alumni make that vision a reality. They ensure our students’ success and help us forge a bold new chapter in our extraordinary story creating a better world together.</p>
          <Row>
         <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
          <Card.Img variant="top" 
          src="/LokenderSarna.jpg" 
          />
          <Card.Header>Lokender Sarna</Card.Header>
          <Card.Body>
            <Card.Title>Masters student, Bishop's University Canada, prev. Software Developer at Hewlett Packard Enterprise</Card.Title>

            <Card.Text>
            “AIACTR provided a lot of opportunities to volunteer for non-profits including URVAR. My journey was simply incredible. It was about exploring different domains through co-curricular and extra-curricular activities. My favorite memory during my time at AIACTR was project SAMUDRA winning first prize at GRIDTECH'15 competition.Suggestion for my junior is to Work on your domain knowledge and programming skills right from beginning. Also, be participative in co-curriculars and extra-curriculars too”
            </Card.Text>
            
          </Card.Body>
        </Card></Col>

        <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
          <Card.Img variant="top" src="/Sankalp.jpg" />
          <Card.Header>Sankalp Singh Gaharwar</Card.Header>
          <Card.Body>
            <Card.Title>Masters Student, North Carolina State University</Card.Title>
            <Card.Text>
            “AIACT&R gave me the confidence to always face the world with a smile on my face and unwavering faith in my abilities.
             My four year journey can be summed up in a single word- “Evolution”. As a part of the AIACTR family, I met wonderful people who helped me become a more well-rounded personality and this enabled me to tap into avenues of my potential that I felt were beyond my reach when I joined this institution. Being in the college team is my fondest memory of college. Along the way, I formed bonds with my teammates that I will cherish for life.”
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
          
            <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh'}}>
          <Card.Img variant="top" src="/Taramishra.jpg"/>
          <Card.Header>Tara Mishra</Card.Header>
          <Card.Body>
            <Card.Title>RF Design Engineer (Vedang Radio  ),DRDO</Card.Title>
            <Card.Text>
            “The faculties at institution made me a good person. I want to highlight their names, Bhupesh Bhati Sir, Preity Mishra mam and Vajpayee Sir. They are very special for me. My whole journey is circled around study, culture programs and NSS.
            I want to share an incident when headmaster of our neighbour govt school asked me to help for their annual  function. And our some of NSS members: Aman Mittal, Pritam, Ishika helped them to prepare drama, dance. After completion of the annual fest, Headmaster summoned me and thanked me with folded hands. I felt so good that day.""

            </Card.Text>
            
          </Card.Body>
        </Card></Col>
        

          </Row>
          <br/>
          <Row>

            <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
          <Card.Img variant="top" src="/Abhijeet.jpg" />
          <Card.Header>Abhijeet Pathak</Card.Header>
          <Card.Body>
            <Card.Title>CEO, Mekvahan</Card.Title>
            <Card.Text>
            “The institute nourishes the entrepreneur inside me. Now, i am representing my college in market as owner of half-million dollar company (Mekvahan). This golden period better equips you for all the challenges you’ll face in life and creates a strong foundation of knowledge. It is a perfect blend of joy and hardships. The favorite moment in my college life is that when I submit my training certificate to the faculty which is signed by myself. Keep it up. All of you doing a great job.”
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
        <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
          <Card.Img variant="top" src="/Ishika.jpg" />
          <Card.Header>Ishika Sharma</Card.Header>
          <Card.Body>
            <Card.Title>Samsung Research Institute</Card.Title>
            <Card.Text>
            “This institute gave me platform to furnish every skill. I joined college in second year as lateral entry. AIACTR has given some lifetime friends, versatile experiences, a platform to furnish my skills, some good juniors and an ocean full of memories. Good knowledge gained by attending different conferences organised in institute. Time spent in Smart India Hackathon (SIH) was a great experience to represent college in Kolkata for our innovative project.“
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
        
            <Col md={true}><Card border='dark' style={{ width: '18rem',margin:'auto',marginBottom:'5vh' }}>
          <Card.Img variant="top" src="/Sourav.jpg" />
          <Card.Header>Sourav Chandra</Card.Header>
          <Card.Body style={{height:'440px'}}>
            <Card.Title>Founder and CEO, Pyza Labs</Card.Title>
            <Card.Text>
            “As the Head of Design team at IEEE-AIT, I learned to work in teams. Professors who taught us in the 3rd and 4th year were the best. I choose ECE as my major but eventually realised that my soul belongs to software. I started learning app development all by myself and became really good at Android Development. My suggestion to my junior is that to focus on your core subjects as much as you can. IP Chaap is just for passing exams“
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
    
  )
}
