import React from 'react'
import {Chrono} from 'react-chrono'

export default function CoursesOffered() {
  const items = [
     {
    title: "",
    cardTitle:"B.Tech",
    cardSubtitle:"CSE",
    cardDetailedText:"The Division of Computer engineering was started during the 2006-2007 session. Students from this branch have a knack for coding but also an in-depth knowledge of the hardware aspect of programming as well. In the COE department, the thrust is to cover all the basic and specialized courses as per industry needs."
    },{
    title: "",
    cardTitle: "B.Tech",
    cardSubtitle: "ECE",
    cardDetailedText:"The Electronics and Communication Engineering Deptt. at NSIT is one of the reputed departments amongst technical colleges all over India. It offers courses in wide areas which produce the best brains in technical fields every year. Under the guidance of our Dean Prof. Sujata Sengar, who currently holds the reputation of publishing more than 100 papers in international journals, students of this department are exposed to the best and the latest knowledge available in the field.In a course of three years, college has provided students with in-depth knowledge of courses which are pre-requisites for any future electronics engineer. Practical knowledge is also imbibed by the well-equipped laboratories having the best available technology."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle:"Information Security",
    cardDetailedText:"2 year M.Tech course in Information Security Branch Of computer Science."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle: "Digital Communications",
    cardDetailedText:"2 Year M.Tech Course in Digital Communications."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle: "Signal Processing",
    cardDetailedText:"2 Year M.Tech Course in Digital Communications."
    },{
      title: "",
    cardTitle: "M.Tech",
    cardSubtitle:"Radio Frequency and Microwave Engineering",
    cardDetailedText: " 2 Year M.Tech Course in Radio Frequency and Microwave Engineering."
    }
];
  return (
      <div>
        <div className='banner courses-offered' >
          <h1>COURSES OFFERED </h1>
        </div>
      <Chrono items={items} 
      mode="VERTICAL"
      theme={
        {primary:"#17404e",
        secondary:"#17404e"}
      }
      hideControls={true}>
      </Chrono>
      
    </div>
  )
}
