import React from 'react';
import './about_utils/about.css';


const AboutUs = () => {
    return (  <div>
        <div className="blank_nav" />
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
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="about_utils/images/aboutslider/001.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="about_utils/images/aboutslider/002.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="about_utils/images/aboutslider/003.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="about_utils/images/aboutslider/004.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="about_utils/images/aboutslider/5.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* end section */}
    </div>
     );
}
 
export default AboutUs;