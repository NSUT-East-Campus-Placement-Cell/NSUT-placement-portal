import React from 'react'
import {Chrono} from 'react-chrono'

export default function CoursesOffered() {
  const items = [
     {
    title: "",
    cardTitle:"B.Tech",
    cardSubtitle:"CSE",
    cardDetailedText:"Computer Science Engineering with specialization in Big Data Analytics."
    },{
    title: "",
    cardTitle: "B.Tech",
    cardSubtitle: "ECE",
    cardDetailedText: "4 year B.Tech course in Electronics and Communication Enginnering with specialization in Artificial intellgence and Machine learning."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle: "Information Security",
    cardDetailedText: "2 year M.Tech course in Information Security Branch Of computer Science."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle: "Digital Communications",
    cardDetailedText: "2 Year M.Tech Course in Digital Communications."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle: "Signal Processing",
    cardDetailedText: "2 Year M.Tech Course in Digital Communications."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle: "Radio Frequency and Microwave Engineering",
    cardDetailedText: " 2 Year M.Tech Course in Radio Frequency and Microwave Engineering."
    }
];
  return (
    <div>
      {/* <center>
      <img style={{
			height:"45vh",
			objectFit:"cover"}} 
      src="/nsut_logo.png" 
      alt="Courses Offered"
      
      />
      </center> */}
      <Chrono items={items} 
      mode="VERTICAL"
      scrollabel={{scrollBar:"false"}}
      />
      
    </div>
  )
}
