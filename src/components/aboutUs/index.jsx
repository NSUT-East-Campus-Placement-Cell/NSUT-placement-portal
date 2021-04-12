import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import {Carousel, Button}from 'react-bootstrap'

const AboutUs = () => {
    return (  <div className="about-us">
        <Navbar />

        {/* about nsut first section */}
        <section className="wrapper" style={{backgroundImage:  `url("/campus/1.jpeg")` }}>
        <div className="container">
            <div className="row px-2">
            <div className="col-12 col-md-6 py-3 content">
                <h2>About NSUT East Campus </h2>
                <p>NSUT East Campus ( Formerly AIACTR) is a top-grade engineering institute functioning from its Campus located at Geeta Colony, East Delhi. The Institute has an area of 7.8 acres with modern lab facilities and a green ambiance all around.</p>
                <p>The Campus is built on a strong foundation of knowledge and values. It includes highly qualified and distinguished faculty to motivate and challenge students. With ample technical and cultural clubs, students work towards a holistic development.</p>
                
                {/* <ul style={{listStyle: 'disc'}}>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Malesuada proin libero nunc consequat interdum varius sit amet.</li>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.</li>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Neque vitae tempus quam pellentesque.</li>
                </ul> */}
            </div>
            <div className="col-12 col-md-6 ">
                <img src="/campus/1.jpeg" alt="Placement Process" className="img-fluid" />
            </div>
            </div>
        </div>
        </section>
        {/* about nsut end */}
        {/* second section */}
        <section className='placement-cell'>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h2>About The Placement Cell</h2>
                <p>NSUT East Campus facilitates the students with the opportunities to procure the placement as per their requirements and skills .The Placement cell plays a massive role in acting as an interface between Companies and the students. Placement cell along with the campus' students skills as a collective is the driving forces behind on-campus recruitments.</p>
                <p>The Placement Cell works  round the year to encourage contacts between companies and graduates. Providing students with proper interaction should be an important responsibility of an institution and our campus also has the same belief. The vision of our placement cell is to shape up students with Competencies and Employability Skills to become part of Top Notch Companies</p>
                <p>The Placement Cell keeps organising skills development and guidance programmes for the students. The Cell arranges programmes like Aptitude skills (Verbal Ability, Quantitative and Logical Reasoning) development, tech skills development(through coding competitions etc), Resume Writing, Interview Skills, Group Discussions, overall personality (Goal Setting, Confidence Building, Motivation, Positive Thinking, Flexibility and other soft skills) development, etc for students welfare.The Cell works in direction of counselling and guiding the learners for their overall development be it hard or even soft skills.</p>
                <p>The Training And Placement Cell is composed of certain teams like training,Research and Development, Person Of Contact(POC) among others in order to make sure the smooth conducting of all the aspects of our responsibilities. These teams have their own defined role in the Train, connect and contact process. Since placement cell is working for the students, there has to be certain transparency in our working which we always take care of by ensuring campus students' involvement in a lot of decisive processes so that we know what they require and what should we include in our processing.</p>
                <br />
            </div>
            <div className="col-12">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://placekitten.com/1920/1080"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://placekitten.com/1920/1080"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://placekitten.com/1920/1080"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://placekitten.com/1920/1080"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://placekitten.com/1920/1080"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>  
            </div>
            </div>
        </div>
        </section>
        {/* end section */}
        <Footer />
    </div>
     );
}
 
export default AboutUs;