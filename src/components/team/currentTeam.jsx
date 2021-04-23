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
						imageURL='/team/students/jaspreet-kaur.jpeg'
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
						imageURL='/team/students/nikhil-tiwari.jpg'
						name='Nikhil Tiwari'
						email='nikhil.tiwari.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/nikhil-tiwari-917590153/'
					/>
					<Coordinator
						imageURL='/team/students/sargam-verma.jpeg'
						name='Sargam Verma'
						email='sargam.verma.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/sargam-verma-3aa9ba172/'
					/>
					<Coordinator
						imageURL='/team/students/akash.jpg'
						name='Akash'
						email='akash.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/akash-saini-08173a1a9/'
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
						imageURL='/team/students/arpit-pathak.jpg'
						name='Arpit Pathak'
						email='arpit.pathak.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/arpit-pathak-226b91195/'
					/>
					<Coordinator
						imageURL='/team/students/gaurav-singh.jpg'
						name='Gourav Singh'
						email='gourav.singh.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/gourav-singh-b8a95b1a3/'
					/>
					<Coordinator
						imageURL='/team/students/adarsh-sharma.jpg'
						name='Adarsh Sharma'
						email='adarsh.sharma.e21@nsut.ac.in'
						// linkedinURL='https://www.linkedin.com/in/gourav-singh-b8a95b1a3/'
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
						imageURL='/team/students/mayank-sharma.jpg'
						name='Mayank Sharma'
						email='mayank.sharma.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/mayank-sharma-87182974'
					/>
					<Coordinator
						imageURL='/team/students/vicky-pandey.jpg'
						name='Vicky Pandey'
						email='vicky.pandey.e21@nsut.ac.in'
						linkedinURL='https://www.linkedin.com/in/vicky-pandey-0276841a5'
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
						imageURL='/team/students/kajal-jha.jpg'
						name='Kajal Jha'
						email='kajal.jha.e21@gmail.com'
						linkedinURL='https://www.linkedin.com/in/kajal-jha-5122641a1/'
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
					<Coordinator
						imageURL='/team/students/riddika-grover.jpg'
						name='Riddika Grover'
						email='riddika.grover.e21@nsut.ac.in'
						linkedinURL='http://linkedin.com/in/riddika-grover-2b41221b3'
					/>
					<Coordinator
						imageURL='/team/students/anurag-tyagi.jpeg'
						name='Anurag Tyagi'
						email='anurag.tyagi4964@gmail.com'
						linkedinURL='https://www.linkedin.com/in/anurag-tyagi-395425178/'
					/>
					<Coordinator
						imageURL='/team/students/generic.png'
						name='Nakul Sharma'
					/>
					<Coordinator
						imageURL='/team/students/generic.png'
						name='Rupinder Singh'
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CurrentTeam;
