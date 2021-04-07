import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import {Carousel, Button}from 'react-bootstrap'

const Home = () => {
    return ( <div className='home'>
        <Navbar />
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/campus/2.jpeg"
                alt="Second slide"
                />

                <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/campus/3.jpeg"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/campus/4.jpeg"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section className='aboutNSUT container-fluid' style={{backgroundImage:  `url("/campus/1.jpeg")` }}>
            <div className='container'>
                <div className='text'>
                    <h1>Our Campus</h1>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad fugit voluptate at laboriosam error deleniti sequi esse molestiae numquam sit saepe amet, culpa, temporibus quisquam? Architecto laudantium a totam, eius perferendis quam cum ad autem suscipit nam optio obcaecati tempora soluta aut eveniet esse? Molestiae quidem exercitationem culpa eaque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad fugit voluptate at laboriosam error deleniti sequi esse molestiae numquam sit saepe amet, culpa, temporibus quisquam? Architecto laudantium a totam, eius perferendis quam cum ad autem suscipit nam optio obcaecati tempora soluta aut eveniet esse? Molestiae quidem exercitationem culpa eaque?</p> */}
                    <p>NSUT East Campus ( Formerly AIACTR) is a top-grade engineering institute functioning from its Campus located at Geeta Colony, East Delhi. The Institute has an area of 7.8 acres with modern lab facilities and a green ambiance all around. Its objective is to meet the growing demand for professionals in the fields of engineering and technology.</p>
                    {/* <p>The foundation Stone of this campus was laid by the Honorable Chief Minister of Delhi Mrs. Sheila Dixit on 24th May 2006. The campus was built in a record time of 18 months by the Public Works Department (PWD). The students have access to all facilities like Centralized Air-Conditioned Labs, well-equipped Library, Student Study Center, RO System, lush green playground, and Rain harvesting system.</p> */}
                    <p>The Campus is built on a strong foundation of knowledge and values. It includes highly qualified and distinguished faculty to motivate and challenge students. The college offers not just a degree; it offers an experience and a way of life! With ample technical and cultural clubs, students work towards a holistic development.</p>
                    <p>The College’s vision is to become an Institute of Excellence in the field of Undergraduate and Postgraduate Engineering. NSUT EAST CAMPUS  presently offers Two B.Tech and four M.Tech programs.</p>
                    <Button variant="success">Learn more</Button>
                </div>
                <div className='about-img'>
                <img
                    // className="d-block"
                    src="/campus/1.jpeg"
                    alt="Third slide"
                    />
                </div>
            </div>
        </section>
        <section className='whyNSUT container'>
            <h1>Why NSUT East Campus ?</h1>
            <div className='f-row'>
                <div className='f-col'>
                    <div className="image-wrapper">
                    <img
                   
                        src="/icons/courses.svg"
                        alt="Third slide"
                    />
                    </div>
                    
                    <div>
                        <h2>Courses Offered</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, iusto pariatur quia consequuntur quod illo deserunt. Et maxime amet illum ea illo alias ab, ut corporis, beatae delectus natus quas? Delectus, sequi aperiam! Delectus a ducimus quisquam. Velit, laudantium reprehenderit?</p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
                <div className='f-col'>
                    <div className="image-wrapper">
                        <img
                        src="/icons/alumni.svg"
                        alt="Third slide"
                        />
                    </div>
                    
                     <div>
                        <h2>Our Alumni</h2>
                        <p>From Flipkart to STMicroelectronics, our alumni have marked their presence in the innovative world. At NSUT East Campus, we're defining our future while still being committed to excellence. Our mission shapes our vision. But our alumni make that vision a reality. They ensure our students’ success and help us forge a bold new chapter in our extraordinary story creating a better world together.</p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
            </div>
            <div className='f-row'>
                <div className='f-col'>
                    <div className="image-wrapper">
                    <img
                        src="/icons/societies.svg"
                        alt="Third slide"
                    />
                    </div>
                    
                    <div>
                        <h2>Societies and Events</h2>
                        <p>Culture is intricately interwoven into life at NSUT EAST CAMPUS. Extracurricular activities provide a setting to become involved and to interact with other students, thus leading to increased learning and enhanced development.</p>
                        <p>Here where people lead a busy life, the name 'Tech Club' itself brings a breeze of happiness, relaxation, pleasure, and many joyous moments to members.</p>
                        <p>Ranging from coding, machine learning to robotics it is truly a place for leisure and entertainment beyond their hectic schedules.</p>
                        <p>Along with that Theater, Dance, Music, Fashion also provides a place for students to look out for their talent in these fields as well as promoting an awareness of cultural diversity on campus.</p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
                <div className='f-col'>
                    <div className="image-wrapper">
                    <img
                        src="/icons/recruiters.svg"
                        alt="Third slide"
                    />
                     
                    </div>
                    <div>
                        <h2>Past Recruiters</h2>
                        <p>Facebook, Epic systems, Microsoft, Google, PayTM, Flipkart, Tekion India  Adobe, Amazon, Intel,Pentester Academy, Société Générale, Synopsys, STMicroelectronics, Ciena, Dunnhumby, VNL, Samsung, Freescale, D.E. Shaw, C-DOT, Unisys, Engineers India Limited (EIL), Qualcomm </p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
            </div>

        </section>
        <Footer />


    </div> );
}
 
export default Home;