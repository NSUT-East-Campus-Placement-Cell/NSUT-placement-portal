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
                src="http://placekitten.com/1920/720"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/1920/1080"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/1920/1080"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section className='aboutNSUT container-fluid'>
            <div className='container'>
                <div className='text'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad fugit voluptate at laboriosam error deleniti sequi esse molestiae numquam sit saepe amet, culpa, temporibus quisquam? Architecto laudantium a totam, eius perferendis quam cum ad autem suscipit nam optio obcaecati tempora soluta aut eveniet esse? Molestiae quidem exercitationem culpa eaque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad fugit voluptate at laboriosam error deleniti sequi esse molestiae numquam sit saepe amet, culpa, temporibus quisquam? Architecto laudantium a totam, eius perferendis quam cum ad autem suscipit nam optio obcaecati tempora soluta aut eveniet esse? Molestiae quidem exercitationem culpa eaque?</p>
                    <Button variant="success">Learn more</Button>
                </div>
                <div className='about-img'>
                <img
                    // className="d-block"
                    src="http://placekitten.com/300/500"
                    alt="Third slide"
                    />
                </div>
            </div>
        </section>
        <section className='whyNSUT container'>
            <h1>Why NSUT East Campus ?</h1>
            <div className='f-row'>
                <div className='f-col'>
                    <img
                   
                    src="http://placekitten.com/300/300"
                    alt="Third slide"
                    />
                    <div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, iusto pariatur quia consequuntur quod illo deserunt. Et maxime amet illum ea illo alias ab, ut corporis, beatae delectus natus quas? Delectus, sequi aperiam! Delectus a ducimus quisquam. Velit, laudantium reprehenderit?</p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
                <div className='f-col'>
                    <img
                   
                    src="http://placekitten.com/300/300"
                    alt="Third slide"
                    />
                     <div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, iusto pariatur quia consequuntur quod illo deserunt. Et maxime amet illum ea illo alias ab, ut corporis, beatae delectus natus quas? Delectus, sequi aperiam! Delectus a ducimus quisquam. Velit, laudantium reprehenderit?</p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
            </div>
            <div className='f-row'>
                <div className='f-col'>
                    <img
                   
                    src="http://placekitten.com/300/300"
                    alt="Third slide"
                    />
                    <div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, iusto pariatur quia consequuntur quod illo deserunt. Et maxime amet illum ea illo alias ab, ut corporis, beatae delectus natus quas? Delectus, sequi aperiam! Delectus a ducimus quisquam. Velit, laudantium reprehenderit?</p>
                        <a className='learn'>Learn more</a>
                    </div>

                </div>
                <div className='f-col'>
                    <img
                    src="http://placekitten.com/300/300"
                    alt="Third slide"
                    />
                     <div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, iusto pariatur quia consequuntur quod illo deserunt. Et maxime amet illum ea illo alias ab, ut corporis, beatae delectus natus quas? Delectus, sequi aperiam! Delectus a ducimus quisquam. Velit, laudantium reprehenderit?</p>
                        <a className='learn'>Learn more</a>

                    </div>

                </div>
            </div>

        </section>
        <Footer />


    </div> );
}
 
export default Home;