import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import CoursesOffered from './CoursesOffered'
import Societies from './Societies'
import OurAlumni from './OurAlumni'
import PastRecruiters from './PastRecruiters'
import Carousel from 'react-bootstrap/Carousel'
const WhyNSUT = () => {
    return ( <div>

        <Navbar/>
        {/* <div style={{backgroundColor:"black"}}> */}
        
    
       
        <CoursesOffered/>
        <br/>
        <Carousel controls={false} indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/college.png"
      alt="First slide"
      style={{height:'45vh',objectFit:'cover'}}
    />
    <Carousel.Caption>
      <h3>PAST RECRUITERS</h3>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
       <PastRecruiters/>
        <OurAlumni/>
        <br/>
        <Footer/>


    </div>);
   
    
}
 
export default WhyNSUT;