import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import {Carousel, Button}from 'react-bootstrap'

const AboutUs = () => {
    return (  <div className="about-us">
        <Navbar />

        {/* about nsut first section */}
        <section className="wrapper">
        <div className="container px-5">
            <div className="row px-2">
            <div className="col-12 col-md-6 py-3 content">
                <h2>About NSUT(East Campus)</h2>
                <p>Lectus vestibulum mattis ullamcorper velit. Senectus et netus et malesuada fames ac. Eget aliquet nibh praesent tristique magna. Duis ultricies lacus sed turpis tincidunt id aliquet. Purus ut faucibus pulvinar elementum integer enim neque. Dui sapien eget mi proin sed libero enim sed faucibus. Id semper risus in hendrerit gravida rutrum quisque. Cursus vitae congue mauris rhoncus aenean vel elit.</p>
                <br />
                <p>Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Vel fringilla est ullamcorper eget nulla facilisi. Arcu bibendum at varius vel. Orci ac auctor augue mauris augue neque gravida in. Eget nulla facilisi etiam dignissim diam quis enim. Libero justo laoreet sit amet cursus. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.</p>
                <ul style={{listStyle: 'disc'}}>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Malesuada proin libero nunc consequat interdum varius sit amet.</li>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.</li>
                <li style={{fontSize: '16px', color: 'aliceblue', lineHeight: '25px'}}>Neque vitae tempus quam pellentesque.</li>
                </ul>
            </div>
            <div className="col-12 col-md-6 p-5">
                <img src="about_utils/images/about.jpg" alt="Placement Process" className="img-fluid" />
            </div>
            </div>
        </div>
        </section>
        {/* about nsut end */}
        {/* second section */}
        <section>
        <div className="container p-5">
            <div className="row">
            <div className="col-12">
                <h2>About The Placement Cell</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                <br />
            </div>
            <div className="col-12">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="about_utils/images/aboutslider/001.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="about_utils/images/aboutslider/002.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="about_utils/images/aboutslider/003.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="about_utils/images/aboutslider/004.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="about_utils/images/aboutslider/5.jpg"
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