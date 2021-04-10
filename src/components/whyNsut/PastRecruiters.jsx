import React from 'react'
import NavBar from './../common/navbar';
import Footer from './../common/footer';

export default function PastRecruiters() {
  return (
    <div>
      <NavBar />
      <div className='banner past-recruiters' style={{backgroundImage: `url("/why-nsut/recruitment.jpg")` }}>
        <h1>PAST RECRUITERS</h1>
      </div>
      <div style={{marginTop:"10vh",marginBottom:'7vh'}}>
        <center>
          <img src="/Companies.jpg" style={{maxWidth:'90%'}} />
        </center>
      </div>
      <Footer />
    </div>
    
  )
}
