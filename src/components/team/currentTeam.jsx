import React from 'react';
import NavBar from './../common/navbar';
import Footer from './../common/footer';
import Coordinator from './common/coordinator';

const CurrentTeam = () => {
	return (
		<div className='current-team'>
			<NavBar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/team/bg.png")` }}>
				<h1>Student Coordinators</h1>
			</div>
			<div className='list container'>
				<h1>OVERALL COORDINATORS</h1>
				<div className='row'>
					<Coordinator
						imageURL='/team/students/jaspreet-kaur.jpg'
						name='Jaspreet Kaur'
						mobile='9205248912'
						email='jaspreet.kaur.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/jaspreet-kaur-9a8056179/'
					/>
					<Coordinator
						imageURL='/team/students/trishant-saxena.jpg'
						name='Trishant Saxena'
						mobile='8743038435'
						email='trishant.saxena.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/trishant-saxena-383628172/'
					/>
					<Coordinator
						imageURL='/team/students/avi-gupta.jpg'
						name='Avi Gupta'
						mobile='9643679467'
						email='avi.gupta.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/avi-gupta-00309a93/'
					/>
					<Coordinator
						imageURL='/team/students/kartik.png'
						name='Kartik Bhalla'
						mobile='8826008296'
						email='kartik.bhalla.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/kartikbhalla/'
					/>
				</div>

				<h1>COORDINATORS</h1>
				<div className='row'>
					<Coordinator
						imageURL='/team/students/sargam-verma.jpeg'
						name='Sargam Verma'
						email='sargam.verma.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/sargam-verma-3aa9ba172/'
					/>
					<Coordinator
						imageURL='/team/students/vishal-siray.jpg'
						name='Vishal Siray'
						email='vishal.siray.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/vishal-siray-158892199'
					/>
					<Coordinator
						imageURL='/team/students/yashkar-jha.png'
						name='Yashkar Jha'
						email='yashkar.jha.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/yashkar-jha-83095a177/'
					/>
					<Coordinator
						imageURL='/team/students/gaurav-singh.jpg'
						name='Gourav Singh'
						email='gourav.singh.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/gourav-singh-b8a95b1a3/'
					/>
					<Coordinator
						imageURL='/team/students/shilpa-panwar.jpg'
						name='Shilpa Panwar'
						email='shilpa.panwar.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/shilpa-panwar-6212b6150'
					/>
					<Coordinator
						imageURL='/team/students/parjanya-singh.jpg'
						name='Parjanya Singh'
						email='parjanya.singh.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/parjanya-singh-21b28118a/'
					/>
					<Coordinator
						imageURL='/team/students/samyak-jain.jpg'
						name='Samyak Jain'
						email='samyak.jain.e21@nsut.ac.in'
						linkedinURL='http://www.linkedin.com/in/samyak-jain-9621571a4'
					/>
					<Coordinator
						imageURL='/team/students/deepali-verma.png'
						name='Deepali Verma'
						email='deepali.verma.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/deepali-verma-1599241b6'
					/>
					<Coordinator
						imageURL='/team/students/diksha-gupta.jpeg'
						name='Diksha Gupta'
						email='diksha.gupta.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/diksha-gupta-517bb8207/'
					/>
					<Coordinator
						imageURL='/team/students/aditya-rayer.jpg'
						name='Aditya Rayer'
						email='aditya.rayer.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/aditya-r-7325a8120'
					/>
					<Coordinator
						imageURL='/team/students/abhishek-yadav.jpg'
						name='Abhishek Yadav'
						email='abhishek.yadav.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/abhishek-yadav-991732208'
					/>
					<Coordinator
						imageURL='/team/students/karan-yadav.jpg'
						name='Karan Yadav'
						email='karan.yadav.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/karan-yadav-091367123'
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CurrentTeam;
