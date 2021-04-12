import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

const Downloads = () => {
	return (
		<div className='downloads'>
			<Navbar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/downloads/bg.jpg")` }}>
				<h1>Downloads</h1>
			</div>
			<div className='content container'>
				<h2>
					Check our <span style={{ color: '#27ae60' }}>Documents</span>
				</h2>
				<div className='download-list'>
					<div className='section'>
						<div className='table-heading'>
							<h2>Brochure</h2>
						</div>
						<div className='list'>
							<a href='/randomguy.jpg' download='brochure'>
								Lorem, ipsum.
							</a>
							<a href='' download='brochure'>
								Lorem, ipsum.
							</a>
							<a href='' download='brochure'>
								Lorem, ipsum.
							</a>
						</div>
					</div>
					<div className='section'>
						<div className='table-heading'>
							<h2>Training Documents</h2>
						</div>
						<div className='list'>
							<a href='' download='brochure'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
								reiciendis voluptates ratione.
							</a>
							<a href='' download='brochure'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
								repellat, saepe quis molestiae voluptates laudantium sit!
							</a>
							<a href='' download='brochure'>
								Lorem ipsum dolor sit amet consectetur adipisicing
							</a>
						</div>
					</div>
					<div className='section'>
						<div className='table-heading'>
							<h2>Placement Documents</h2>
						</div>
						<div className='list'>
							<a href='' download='brochure'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
								reiciendis voluptates ratione.
							</a>
							<a href='' download='brochure'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
								repellat, saepe quis molestiae voluptates laudantium sit!
							</a>
							<a href='' download='brochure'>
								Lorem ipsum dolor sit amet consectetur adipisicing
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Downloads;
