import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import CoursesOffered from './CoursesOffered'
import Societies from './Societies'
import OurAlumni from './OurAlumni'
import PastRecruiters from './PastRecruiters'
import Carousel from 'react-bootstrap/Carousel'
const WhyNSUT = () => {
    return ( <div style={{backgroundColor:"azure"}}>

        <Navbar/>
        {/* <div style={{backgroundColor:"black"}}> */}
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/college.jpg"
      alt="First slide"
      style={{height:'45vh',objectFit:'cover'}}
    />
    <Carousel.Caption>
      <h3>COURSES OFFERED</h3>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>

    
        {/* <h3 style={{textAlign:"center",color:"White"}}>COURSES OFFERED</h3> */}
        {/* </div> */}
        <CoursesOffered/>
        <br/>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/college.jpg"
      alt="First slide"
      style={{height:'45vh',objectFit:'cover'}}
    />
    <Carousel.Caption>
      <h3>Companies Visiting</h3>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
    <PastRecruiters/>
        <br/>
        {/* <h1>SOCIETIES</h1> */}
        {/* <Societies/> */}
        <br/>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/alumni.jpg"
      alt="First slide"
      style={{height:'50vh',objectFit:'cover'}}
    />
    <Carousel.Caption>
      <h3>OUR ALUMNI</h3>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>

        {/* <div style={{backgroundColor:'black'}}><h1 style={{textAlign:'center',color:'white'}}>OUR ALUMNI</h1></div> */}
        <OurAlumni/>
        <br/>
        <Footer/>


    </div>);
   
    
}
 
export default WhyNSUT;